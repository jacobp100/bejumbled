import { AsyncStorage } from 'react-native';
import {
  shuffle, flatMap, fill, take, drop, sum, pullAt, concat, includes, without, map, propertyOf,
  keys, at, range, join,
} from 'lodash/fp';
import letterBag from './letterBag';
import letterPoints from './letterPoints';
import sowpods from './sowpods';
import { BEST_SCORE } from './constants';

const rackSize = 7;
const wordMultipliers = [1, 1, 1, 2, 3, 4, 5];

const getLetterArray = letter => fill(0, Infinity, letter, new Array(letterBag[letter]));

function getScoreForWord(rack, selectedTiles) {
  const letters = map(propertyOf(rack), selectedTiles);
  const letterScores = map(propertyOf(letterPoints), letters);
  const subWordScore = sum(letterScores);
  const wordScore = subWordScore * wordMultipliers[selectedTiles.length - 1];
  return wordScore || 0;
}

export function beginGame({ bestScore = 0, bestWordScore = 0 }) {
  let allLetters = flatMap(getLetterArray, keys(letterBag));
  allLetters = shuffle(allLetters);
  const rack = take(rackSize, allLetters);
  const remainingLetters = drop(rackSize, allLetters);
  const score = 0;
  const wordScore = 0;
  const selectedTiles = [];
  const wordIsValid = true;

  return {
    rack, selectedTiles, remainingLetters, score, wordScore, bestScore, bestWordScore, wordIsValid,
  };
}

export function addWord(state) {
  let {
    rack, selectedTiles, remainingLetters, score, bestScore, bestWordScore,
  } = state;

  const word = join('', at(selectedTiles, rack));

  if (word.length > 1 && !includes(word, sowpods)) {
    return { wordIsValid: false };
  }

  const wordLength = selectedTiles.length;

  const currentWordScore = getScoreForWord(rack, selectedTiles);
  score += currentWordScore;

  if (score > bestScore) {
    AsyncStorage.setItem(BEST_SCORE, String(bestScore));
  }

  bestScore = Math.max(bestScore, score);
  bestWordScore = Math.max(bestWordScore, currentWordScore);

  rack = pullAt(selectedTiles, rack);
  rack = concat(rack, take(wordLength, remainingLetters));

  remainingLetters = drop(wordLength, remainingLetters);

  selectedTiles = [];
  const wordScore = 0;

  return { rack, selectedTiles, remainingLetters, score, wordScore, bestScore, bestWordScore };
}

export function shuffleRack(state) {
  let { rack, selectedTiles } = state;

  const rackSelectedTiles = at(selectedTiles, rack);
  let rackWithoutSelectedTiles = pullAt(selectedTiles, rack);
  rackWithoutSelectedTiles = shuffle(rackWithoutSelectedTiles);
  rack = concat(rackSelectedTiles, rackWithoutSelectedTiles);

  selectedTiles = range(0, selectedTiles.length);

  return { rack, selectedTiles };
}

export function toggleLetter(state, index) {
  const { rack } = state;
  let { selectedTiles } = state;

  if (includes(index, selectedTiles)) {
    selectedTiles = without([index], selectedTiles);
  } else {
    selectedTiles = concat(selectedTiles, index);
  }

  const wordScore = getScoreForWord(rack, selectedTiles);
  const wordIsValid = true;

  return { selectedTiles, wordScore, wordIsValid };
}

export function clearTiles() {
  const selectedTiles = [];
  const wordIsValid = true;
  return { selectedTiles, wordIsValid };
}

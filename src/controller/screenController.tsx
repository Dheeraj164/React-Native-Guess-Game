import { Alert } from "react-native";
import { game } from "../app";
import { Gamestate, GuesType } from "../model/game_model";

export function addNume(num: string, changeScreen: () => void) {
  const final = parseInt(num!);

  if (isNaN(final)) {
    Alert.alert("enterd alphabeth");
  } else if (final < 0) {
    Alert.alert("number is negative");
  } else {
    game.play(final);
    changeScreen();
  }
}
let minValue = 1;
let maxValue = 100;
let preval: number;
export function randomNumberGenerate(
  min: number,
  max: number,
  except: number
): number {
  let num = Math.floor(Math.random() * (max - min) + min);
  if (num == except) {
    num = randomNumberGenerate(min, max, except);
  }
  game.numberofGuess.push(num);
  preval = num;
  return num;
}

export function checkNumber(
  type: GuesType,
  guess: number,
  setGuess: React.Dispatch<React.SetStateAction<number>>,
  changeScreen: () => void
) {
  if (type == GuesType.Greater) {
    if (guess > game.guessNumber!) {
      Alert.alert("Number is Not Greater", "Do not Cheat Enter Correctly");
      return;
    } else {
      minValue = preval + 1;
    }
  } else {
    if (guess < game.guessNumber!) {
      Alert.alert("Number is Not Lesser", "Do not Cheat Enter Correctly");
      return;
    } else {
      maxValue = preval;
    }
  }
  let num = randomNumberGenerate(minValue, maxValue, preval);
  setGuess(num);

  const result: boolean = game.checkWinner(num);
  if (result == true) {
    game.gameOver();
    changeScreen();
  }
}

export function restartGame(changeScreen: () => void) {
  minValue = 1;
  maxValue = 100;
  game.reset();
  changeScreen();
}

module.exports = class Challenges {
  static isPangram(string) {
    const str = string.split("");
    const az = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    let val = az.every(
      (el) => str.includes(el) || str.includes(el.toUpperCase())
    );
    console.log(`isPangram`, val);
    return val;
  }

  static fiveDiceScore(diceArray) {
    const initialValues = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    diceArray.map(
      (el) => (initialValues[`${el}`] = initialValues[`${el}`] + 1)
    );
    const values = Object.values(initialValues);
    const keys = Object.keys(initialValues);
    let scr = 0;
    values.map((el, i) => {
      if (el >= 3) {
        if (el > 3) {
          if (keys[i] == 1) {
            scr += 1100;
          } else if (keys[i] == 5) {
            scr += 550;
          } else {
            scr += parseInt(`${keys[i]}00`);
          }
        } else {
          if (keys[i] == 1) {
            scr += 1000;
          } else {
            scr += parseInt(`${keys[i]}00`);
          }
        }
      } else {
        if (el == 1 || el == 2) {
          keys[i] == 1
            ? (scr += el * 100)
            : keys[i] == 5
            ? (scr += el * 50)
            : (scr += 0);
        }
      }
    });

    console.log(`fiveDiceScore`, scr);
    return scr;
  }

  static oddOrEvenOneOut(numbers) {
    let odd = 0;
    let even = 0;

    const splits = numbers.split(" ");
    splits.map((el) => {
      if (el % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    });
    let index;
    if (odd === 1) {
      index = splits.findIndex((el) => el % 2 === 1) + 1;
      console.log(`Odd one out at index ${index}`);
      return index;
    } else {
      index = splits.findIndex((el) => el % 2 === 0) + 1;
      console.log(`Even one out at index ${index}`);
      return index;
    }
  }

  static breakIntoPairs(str) {
    let stringToOperate;
    str.length % 2 == 0
      ? (stringToOperate = str)
      : (stringToOperate = str + "_");
    let arr = [];
    for (let i = 0; i <= stringToOperate.length - 2; i = i + 2) {
      arr.push(stringToOperate.substr(i, 2));
    }
    console.log(`Break into Pairs : ${arr}`);
    return arr;
  }
};

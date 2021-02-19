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
};

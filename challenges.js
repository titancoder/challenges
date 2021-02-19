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
};

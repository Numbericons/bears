function bears(x, s) {
  let pairs = "";

  for (let i = 0; i < s.length - 1; i++) {
    let pair = s[i] + s[i + 1];
    if (pair === "B8" || pair === "8B") {
      pairs = pairs + pair;
      i++;
    }
  }

  const match = pairs.length / 2 >= x;
  return [pairs, match];
}
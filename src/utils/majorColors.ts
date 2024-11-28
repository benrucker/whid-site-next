export const MAJOR_COLORS = ["#ffd294", "#a3eff7", "#fcaecf", "#bda6ff"];

export function getRandomMajorColor() {
  return MAJOR_COLORS[getRandomInteger(MAJOR_COLORS.length)];
}

function getRandomInteger(total: number) {
  const newNum = Math.floor(Math.random() * (total - 1));
  return newNum;
}

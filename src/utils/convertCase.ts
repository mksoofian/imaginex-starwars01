export const toPascalCase = function (string: string) {
  const capitalFirstLetter = string[0].toUpperCase();
  const restOfWord = string.slice(1, string.length);
  return capitalFirstLetter + restOfWord;
};

export const convertSnakeCase = function (string: string) {
  const sentenceCase = string
    .split("_")
    .map((word) => {
      return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
    })
    .join(" ");
  return sentenceCase;
};

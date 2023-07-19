const convertToScientificNotation = (number: number): string => {
  const exponent = Math.floor(Math.log10(number));
  const coefficient = number / Math.pow(10, exponent);

  return `${coefficient.toFixed(2)}e${exponent}`;
};

export default convertToScientificNotation;

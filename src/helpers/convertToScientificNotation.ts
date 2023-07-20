const convertToScientificNotation = (number: number): string => {
  if (number === 0) return '0';

  const absNumber = Math.abs(number);
  const exponent = Math.floor(Math.log10(absNumber));
  const coefficient = absNumber / Math.pow(10, exponent);

  const sign = number < 0 ? '-' : '';

  return `${sign}${coefficient.toFixed(2)}e${exponent}`;
};

export default convertToScientificNotation;

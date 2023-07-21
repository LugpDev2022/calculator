import convertToScientificNotation from './convertToScientificNotation';

const formatResult = (result: number, error?: string): string => {
  if (error) {
    return error;
  }

  const absResult = Math.abs(result);

  if (absResult >= 10000000000000 && Number.isFinite(result)) {
    return convertToScientificNotation(result);
  }

  return result.toLocaleString('en-US');
};

export default formatResult;

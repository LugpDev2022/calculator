type Response = { isValid: boolean; result: number; error: string };

//TODO: Handle error
const evaluateOperation = (operation: string): Response => {
  try {
    const standardNotation = operation
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/\)\(/g, ')*(');

    const result = eval(standardNotation);

    if (isNaN(result)) {
      throw new Error('Invalid operation');
    }

    return {
      isValid: true,
      result,
      error: '',
    };
  } catch (e: any) {
    return {
      isValid: false,
      result: 0,
      error: e.message,
    };
  }
};

export default evaluateOperation;

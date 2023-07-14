type Response = { result: number; error: string };

const evaluateOperation = (operation: string): Response => {
  try {
    const standardNotation = operation
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/\)\(/g, ')*(')
      .replace(/(\d)\(/g, '$1*(')
      .replace(/\)(\d)/g, ')*$1');

    const result = eval(standardNotation);

    if (isNaN(result)) {
      throw new Error('Invalid operation');
    }

    return {
      result,
      error: '',
    };
  } catch (e) {
    return {
      result: 0,
      error: 'Invalid operation',
    };
  }
};

export default evaluateOperation;

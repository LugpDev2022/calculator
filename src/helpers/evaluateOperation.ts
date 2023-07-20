import parseOperation from './parseOperation';

type Response = { result: number | null; error: string };

const evaluateOperation = (operation: string): Response => {
  try {
    const standardNotation = parseOperation(operation);

    const result = Function(`return (${standardNotation})`)();

    if (!isFinite(result)) {
      return {
        result: Infinity,
        error: '',
      };
    }

    if (isNaN(result)) {
      throw new Error('Invalid operation');
    }

    return {
      result,
      error: '',
    };
  } catch (e) {
    return {
      result: null,
      error: 'Invalid operation',
    };
  }
};

export default evaluateOperation;

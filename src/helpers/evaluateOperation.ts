type Response = { isValid: boolean; result: number };

//TODO: Handle error
const evaluateOperation = (operation: string): Response => {
  try {
    const standardNotation = operation
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/\)\(/g, ')*(');

    const result = eval(standardNotation);

    return {
      isValid: true,
      result,
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      isValid: false,
      result: 0,
    };
  }
};

export default evaluateOperation;

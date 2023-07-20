const parseOperation = (operation: string): string => {
  const standardNotation = operation
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/\)\(/g, ')*(')
    .replace(/(\d)\(/g, '$1*(')
    .replace(/\)(\d)/g, ')*$1');

  return standardNotation;
};

export default parseOperation;

const binary = input => {
  if (!/^[01]+$/.test(input)) {
    return { toDecimal: () => 0 };
  }
  return {
    toDecimal: () => {
      return input
        .split('')
        .reverse()
        .reduce((sum, n, i) => sum + Number(n) * 2 ** i, 0);
    },
  };
};

export default binary;

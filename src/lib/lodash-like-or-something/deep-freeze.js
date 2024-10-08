const deepFreeze = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      deepFreeze(obj[key]);
    }
  });

  return Object.freeze(obj);
};

export { deepFreeze };

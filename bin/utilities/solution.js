export const genDiff = (obj1, obj2) => {
  const object = {};
  for (let key of Object.keys({...obj1})) {
    if (obj1[key] === obj2[key]) {
      object[key] = 'unchanged';
    } else if (obj2.hasOwnProperty(key)) {
      object[key] = 'changed';
    } else {
      object[key] = 'deleted';
    }
  }
  for (let key of Object.keys({...obj2})) {
    if (obj1[key] !== obj2[key] && !obj1.hasOwnProperty(key)) {
      object[key] = 'added';
    }
  }
  return object;
};
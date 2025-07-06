export const hasEmptyInput = (object: { [x: string]: string }) => {
  for (let key in object) {
    if (!object[key]) return true;
  }
  return false;
};
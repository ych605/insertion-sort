export const insertionSort = list => {
  const newList = [...list];
  for (let i = 0; i < newList.length; i++) {
    const t = newList[i];
    let j = i - 1;
    while (j >= 0 && newList[j] > t) {
      newList[j+1] = newList[j];
      j--;
    }
    newList[j+1] = t;
  }
  return newList
}

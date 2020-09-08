export const insertionSort = list => {
  for (let i = 0; i < list.length; i++) {
    const t = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > t) {
      list[j+1] = list[j];
      j--;
    }
    list[j+1] = t;
  }
  return list
}
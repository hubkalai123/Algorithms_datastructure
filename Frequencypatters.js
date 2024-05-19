function FrequecyPatters(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "false";
  }
  let FrequecyPatters1 = {};
  let FrequecyPatters2 = {};

  for (let val of arr1) {
    FrequecyPatters1[val] = (FrequecyPatters1[val] || 0) + 1;
  }
  for (let val of arr2) {
    FrequecyPatters2[val] = (FrequecyPatters2[val] || 0) + 1;
  }
  for (let key in FrequecyPatters1) {
    if (!(key ** 2 in FrequecyPatters2)) {
      return "false";
    }
    if(FrequecyPatters2[key ** 2] !== FrequecyPatters1[key])
        {
            return "false";
        }
  }
  return "true";
}

console.log(FrequecyPatters([1, 2, 3], [1, 4, 9]));
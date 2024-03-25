function Linear_search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == x) {
        return i;
      }
    }
    return -1;
  }
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const x = 10;
  const linearsearch = Linear_search(array, x);
  console.log(linearsearch);
  
  
  //Big-O = O(n)
function mostFrequentNumber(arr) {
    const map = new Map();
    let maxNum = arr[0], maxCount = 0;
  
    for (let num of arr) {
      map.set(num, (map.get(num) || 0) + 1); // Tăng số lần xuất hiện của số trong map
      if (map.get(num) > maxCount) { // Nếu số lần xuất hiện lớn hơn số lần lớn nhất hiện tại
        maxCount = map.get(num);
        maxNum = num;
      }
    }
  
    return maxNum;
  }

// lam them cho t cai ham tinh binarySearch nua nhanh len.
  
  console.log(mostFrequentNumber([1, 3, 3, 2, 1, 3, 4, 2, 2, 2])); // Output: 2
  

const sumLargestNumbers = function(data) {
    // Put your solution here
    let first;
    let second;
    if(data[0]>data[1]){
        first = data[0];
        second = data[1];
    }else{
        first = data[1];
        second = data[0];
    }
    for(let i=2;i<data.length;i++){
        if(data[i] > first){
            second = first;
            first = data[i];
        }else if(data[i]> second && data[i] != first){
            second = data[i];
        }
    }
    return (first+second);
  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
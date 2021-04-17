const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let longestName = instructors[0];
    for(let i = 0; i < instructors.length; i++){
        if(instructors[i].name.length > longestName.name.length){
            longestName = instructors[i];
        }
    }
    return longestName;
  };
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));

// const instructorWithLongestName = function(instructors) {
//     var long1 = 0;
//     var maxIndex = 0;
//     var arr = instructors;
//    // console.log(instructors[0].name.length);
//     for (i=0; i<arr.length; i++){
//         if (arr[i].name.length > long1){
//           long1= arr[i].name.length;
//           maxIndex= i;
//         }
//     }
//     return instructors[maxIndex];
//   }
//   console.log(instructorWithLongestName([
//     {name: "Samuel", course: "iOS"},
//     {name: "Jeremiah", course: "Web"},
//     {name: "Ophilia", course: "Web"},
//     {name: "Donald", course: "Web"}
//   ]));
//   console.log(instructorWithLongestName([
//     {name: "Matthew", course: "Web"},
//     {name: "David", course: "iOS"},
//     {name: "Domascus", course: "Web"}
//   ]));
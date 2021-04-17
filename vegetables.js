const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
 // console.log(vegetables[0].submitter);
  const metric = 'redness';


  const judgeVegetable = function (vegetables, metric) {
    // Your code in here ...
    let highestRanking = 0;
    let winner = '';
   // console.log(vegetables[0][metric]);
    
    for(let i=0; i<vegetables.length; i++){
        
      if(vegetables[i][metric] > highestRanking){
         highestRanking = vegetables[i][metric];
         winner = vegetables[i].submitter;
       }
     }
    return winner;
  }

// const judgeVegetable = (vegetables, metric) => {
//     // Code here!
//     var value = 0;
//     var name = "";
//     for(var veggie of vegetables){
//       if (veggie[metric]>value){
//         name = veggie['submitter'];
//         value = veggie[metric];
//       }
//     }
//     return name;
//   }
  
  console.log(judgeVegetable(vegetables, metric));
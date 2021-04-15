let stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 10, 'community centre']
  ]

const goodStations = [];
const chooseStations = function (stations) {
  for(let station of stations){
    if(station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")){
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
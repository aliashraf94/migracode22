/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

let travelDestinations = [destination1, destination2, destination3, destination4];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

// Problem no 1
let lessThen500 = travelDestinations.filter((destination) => {
    return destination.distanceKms < 500
})

let nameOfCitiesLessThen500 = lessThen500.map((cityName)=>{
    return cityName.destinationName
})

let destinationNamesWithin500Kms = nameOfCitiesLessThen500


// Problem no 2

let reachableByFerry = travelDestinations.filter((reachable) => {
    return reachable.transportations.includes("ferry");
})

let nameOfReachableCityByFerry = reachableByFerry.map((cityName)=>{
    return cityName.destinationName;
})

let destinationNameReachableByFerry = nameOfReachableCityByFerry;


// Problem no 3

let reachableByTrainAndMoreThen300 = travelDestinations.filter((each)=>{
    return each.distanceKms > 300 && each.transportations.includes("train")
})


let nameOfCityByTrainMoreThe300 = reachableByTrainAndMoreThen300.map((each)=> {
    return each.destinationName
})

let destinationNamesMoreThan300KmsAwayByTrain = nameOfCityByTrainMoreThe300;


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`);
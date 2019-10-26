
/*For this problem, we need to use an array that contains objects on the XY plain.
We need to get rid of (filter/exclude) any points that lie on the axes, meaning
their value is zero
 */

//Declaring the points
let points = [{x:5, y:6},{x:3, y:7}, {x:8, y:0}, {x:9,y:10},
    {x:15, y:4}, {x:0, y:15}];

//This will sort through and find points that are not an the axes
let findPointOffAxes = function(point){
    return ((point.x != 0) && (point.y != 0));
};

//This will store the filtered points in an array
let pointsOffAxes = points.filter(findPointOffAxes);
console.log("The filtered points: ");
console.log(pointsOffAxes);

//To find distance to origin, need to use Euclidian Distance, which this calculates
let findDistances = function(point) {
    return (Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2)));
};

//This prints the distances to the console
let distances = pointsOffAxes.map(findDistances);
console.log("\nDistances from the origin: ");
console.log(distances);

//This will go through the filtered values and return which is the largest by comparison
let findMaxDistance = function(distance1, distance2) {
    return (distance1>distance2)?distance1:distance2;
};
//This calls the findMaxDistance function and prints the returned result to the console
let maximumDist = distances.reduce(findMaxDistance);
console.log("\n");
console.log("The maximum distance is: " + maximumDist);

//This is an alternative way to find the maximum distance from the origin
//First it filters out invalid values (zero)
//Calculates distance to origin
//Reduces the values using the => arrow notation
let MaximumDist = points.filter(point => (point.x != 0) && (point.y != 0))
    .map(point => (Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2))))
    .reduce((distance1,distance2) => (distance1>distance2)?distance1:distance2);

//Prints out the max value to the console
console.log("The maximum distance returned from arrow notation is: " + MaximumDist);

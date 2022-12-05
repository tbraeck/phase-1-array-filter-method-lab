let drivers = ['John', 'Frank', 'Sammy', 'Timmy', 'Simpson'];





const matchingNames = function findMatching(names) {
    matchingNames.filter(drivers, '')
}

// fuzzyMatch

// matchName

//     `findMatching` - This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers.The function should be
//   case insensitive.

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
// with the provided letters.

// * `matchName` - This function takes an array of `driver` objects and a`string`
//   as arguments.Each `driver` object has two properties: `name` and`hometown`.
//   The function should return each element whose `name` property matches the
// provided `string` argument.






















// const drivers = [
//     {
//         name: 'Bobby',
//         hometown: 'Pittsburgh'
//     },
//     {
//         name: 'Sammy',
//         hometown: 'New York'
//     },
//     {
//         name: 'Sally',
//         hometown: 'Cleveland'
//     },
//     {
//         name: 'Annette',
//         hometown: 'Los Angeles'
//     },
//     {
//         name: 'Bobby',
//         hometown: 'Tampa Bay'
//     }
// ];

// function findMatching(drivers, driver) {
//     return drivers.filter(
//         (possibleMatch) => possibleMatch.toLowerCase() === driver.toLowerCase()
//     );
// }

// function fuzzyMatch(drivers, testString) {
//     return drivers.filter(
//         (possibleMatch) => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
// }

// function matchName(drivers, soughtName) {
//     return drivers.filter((record) => record.name === soughtName);
// }
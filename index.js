const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//`findMatching`- This function takes an array of drivers' names and a `string`
//  as arguments, and returns the matching list of drivers. The function should be
//  case insensitive.

function findMatching(drivers, selectDriver){
    return drivers.filter(function(driver){
        return driver.toUpperCase() === selectDriver.toUpperCase();
    });
}

//`fuzzyMatch` - This function takes an array of drivers' names and a `string`
//as arguments for querying the array, and returns all drivers whose names begin
//with the provided letters.

function fuzzyMatch(drivers, letters){
    const fuzzyDrivers = drivers.filter(function(driver){
        return driver.charAt() === letters.charAt();
    })
    return fuzzyDrivers;
}

//`matchName` - This function takes an array of `driver` objects and a `string`
//  as arguments. Each `driver` object has two properties: `name` and `hometown`.
//  The function should return each element whose `name` property matches the
//  provided `string` argument.



function matchName(drivers, string){
    const matchedName = drivers.filter(function(drivers){
        return drivers.name === string;
    })
    return matchedName;
}

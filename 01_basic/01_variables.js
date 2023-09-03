const accountID = 3004
let accountEmail =  "Rohitvvishwakarma04@gmail.com"
var accountPassword = '12345678'
accountCity = "Mumbai"


// accountID = 20003 // Not allowed

accountEmail = 'rohitvishwakarma@google.com'
accountPassword = '87654321'
accountCity = 'Uttar Pradesh'

console.log(accountID);
 
console.table([accountID,accountEmail,accountPassword,accountCity])

/*  
    perfer not use a var
    because of issuse in block scope and functional scope
*/
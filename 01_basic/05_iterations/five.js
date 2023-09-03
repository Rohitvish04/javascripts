const coding = ["js", "java", "python", "cpp", "Ruby"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// }
// )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//         console.log(item, index, arr );
//     }
//     )

const myCoding =[
    {
        languageName:"javascript",
        languageFile: "js"
    },
    {
        languageName:"java",
        languageFile: "java"
    },
    {
        languageName:"Pyhton",
        languageFile: "py"
    },
    {
        languageName:"Ruby",
        languageFile: "ry"
    },
]

myCoding.forEach(   (item) => {
    console.log(item.languageName);
} )
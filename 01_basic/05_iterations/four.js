const myObject ={
    js:"javascript",
    py: "Python",
    rb: "Ruby",
    cpp: "C++",
    swift: "swift of apple"
}

for (const key in myObject) {
//    console.log( `${key} shrotcut is for ${myObject[key]}`);
}

const programming  = [ 'js', 'java', 'python', 'cpp', 'ruby']  

for (const key in  programming) {
//    console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"Untied State of Amercian")
map.set('Fra',"France")
map.set('IN',"India")

for (const key in map) {
    console.log(key[map]);
}
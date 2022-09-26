var fs = require("fs");
fs.readFile("./welcome.txt" , "utf-8" , (err , data)=>{ 

if(err){ 
    console.log(`ERREUR :  ${err.message}`);
}
else { 
    console.log(data);
}


})

function toTitlecase(naam){

    //return naam.replace (/w+/g, naam=>naam.charAt(0).toUpperCase+naam.substr(1).toLowerCase)
    return naam.replace (/\w\S*/g, (naam)=>{
        return naam.charAt(0).toUpperCase()+naam.substr(1).toLowerCase();
});
}
let naam ='Syed mutahir Raza';
let lowercasename = naam.toLowerCase();
console.log('Name in Lower Case is',lowercasename);
let uppercasename = naam.toUpperCase();
console.log('Name in Upper case is',uppercasename);
let titlename=toTitlecase(naam);
console.log('Name in Titlecase is', titlename)
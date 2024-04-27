function toTitlecase(naam) {
    //return naam.replace (/w+/g, naam=>naam.charAt(0).toUpperCase+naam.substr(1).toLowerCase)
    return naam.replace(/\w\S*/g, function (naam) {
        return naam.charAt(0).toUpperCase() + naam.substr(1).toLowerCase();
    });
}
var naam = 'Syed mutahir Raza';
var lowercasename = naam.toLowerCase();
console.log('Name in Lower Case is', lowercasename);
var uppercasename = naam.toUpperCase();
console.log('Name in Upper case is', uppercasename);
var titlename = toTitlecase(naam);
console.log('Name in Titlecase is', titlename);

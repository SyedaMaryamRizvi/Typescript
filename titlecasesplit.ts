
let nama="Syed Mutahir Raza Rizvi"
function titlecase(str)
{
    str=str.toLowerCase();
    str=str.split(' ');
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

console.log(titlecase(nama));
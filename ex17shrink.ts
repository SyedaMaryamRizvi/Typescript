/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/

let guestlist: Array<String> = [
    "Zeeshan", 
    "Ali Mehdi",
    "Uncle Tom",
    "Aunty Rose",
]



console.log("***************************************");
console.log("This is Excercise 17 Shrink Friend list");
console.log("*************************************** \n\n");
console.log('My Guest List for tonight Dinner is ');
console.log("++++++++++++++++++++++++++++++++++++");
for (let i=0;i<guestlist.length;i++)
    {
        console.log(guestlist[i]);

    }
console.log("\nThe Problem is I can only invite two friends \n");
while (guestlist.length > 2)
{
let rmvguest = guestlist.pop()
console.log(`Sorry, ${rmvguest}, I cant invite you tonight for dinner`);
}

for (let guest of guestlist)
    {
        console.log(`Dear, ${guest}, You are still invited tonight at my place for dinner`)
    }
    
    console.log('Total Number of Guests are',guestlist.length)
    //This will remove guest list as we have two guest after removing the rest in while loop
    guestlist.pop()
    guestlist.pop()
    //List is empty now lets check it what is pending in guest list i hope nothing
    console.log('So the list of gust after invitation is',guestlist);

    let guestlist1: Array<String> = [
        "Zeeshan", 
        "Ali Mehdi",
        "Uncle Tom",
        "Aunty Rose",
    ]
export{guestlist1}    

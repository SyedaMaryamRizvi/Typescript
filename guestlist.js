var friends = ["Ali Mehdi", "Zeeshan", "Abbas", "Ali Raza", "Hamza"];
var invitedfriends = [];
//let kk:number 
for (var kk = 0; kk < 3; kk++) {
    invitedfriends.push(friends[kk]);
    console.log(invitedfriends);
}
for (var _i = 0, invitedfriends_1 = invitedfriends; _i < invitedfriends_1.length; _i++) {
    var final = invitedfriends_1[_i];
    // console.log (final)
    console.log("Dear", final, "You are invited on 27th Ramadan at my place for Aftaar");
}

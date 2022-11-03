function do_assignment(callback) {
    console.log("A am doing assignment and it is complete now...");
    callback();
    return function()
    {
        console.log("Yahoo...Mai to ban gaya");
    }
}
function copy_assignment() {
    console.log("Hey bro.. thank yoy.Let me copy");
}
let retturnFun=do_assignment(copy_assignment);
retturnFun();
console.log("==========================================");


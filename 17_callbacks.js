function do_assignment(callback) {
    console.log("A am doing assignment and it is complete now...");
    callback();
}
function copy_assignment() {
    console.log("Hey bro.. thank yoy.Let me copy");
}
// function copy_assignment_amar() {
//     console.log("Hey bro.. thank yoy.Let me copy");

// }
do_assignment(copy_assignment);
console.log("==========================================");
function display() {
    console.log("display function");
}
setTimeout(display,2000);
console.log("==========================================");

setInterval(display,2000);


class Vehicle {

    vehicleName
    vehicleModel
    vehiclePrice
    vehicleColor
    vehicleRating
    constructor(vehicleName, vehicleModel, vehiclePrice, vehicleColor, vehicleRating) {
        this.vehicleName = vehicleName;
        this.vehicleModel = vehicleModel;
        this.vehiclePrice = vehiclePrice;
        this.vehicleColor = vehicleColor;
        this.vehicleRating = vehicleRating;
    }
}
console.log("******************************************Vehicle Class**************************************");

const v1 = new Vehicle("Audi", "Audi Q7", 3000000, "Red", "****");
console.log(v1);
const v2 = new Vehicle(" BMW", "BMW X1", 4000000, "Blue", "****");
console.log(v2);
const v3 = new Vehicle(" Chevrolet", "Chevrolet Aveo", 5000000, "Purple", "*****");
console.log(v3);

const v4 = new Vehicle(" Ferrari", "Ferrari F8", 2800000, "White", "****");
console.log(v4);

const v5 = new Vehicle(" Fiat", "Fiat 1100", 4300000, "Black", "*****");
console.log(v5);

class College {
    collegeName
    collegeAddress
    collegeEstablished
    constructor(collegeName,collegeAddress,collegeEstablished) {
        this.collegeName = collegeName;
        this.collegeAddress = collegeAddress;
        this.collegeEstablished=collegeEstablished;
    }
    // displaymsg() {
    //     console.log("This is College Class");
    // }
}
console.log("******************************************College Class**************************************");

const c1 = new College("YMC","Yerandwana Pune",1910);
console.log(c1);
const c2 = new College("COEP","Shivajinagar pune",1989);
console.log(c2);

const c3 = new College("MIT","Yerandwana Pune",1956);
console.log(c3);
const c4 = new College("Morden College","Yerandwana",1934);
console.log(c4);
const c5 = new College("PVG","Shivdarhan pune",1967);
console.log(c5);





   function traverseObject(object) {
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key}:${element}`);
    }
}

}
// traverseObject(v1);
// traverseObject(v2);
// traverseObject(v3);
// traverseObject(v4);
// traverseObject(v5);
console.log("********************************Using 'TraverseObject() instance of College class'************************");
traverseObject(c1);
console.log("*******************************************************");
traverseObject(c2);
console.log("*******************************************************");

traverseObject(c3);
console.log("*******************************************************");

traverseObject(c4);
console.log("*******************************************************");

traverseObject(c5);
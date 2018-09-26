// arguments object - no longer bound with arrow function
// const add = function (a,b){
//     console.log(arguments);
//     return a+b;
// };

const add = (a,b) => {
    //console.log(arguments);
    return a+b;
}

console.log(add(55,1));

//this keyword - no longer bound
// const name = 'Vijay';
// const cities = ['Delhi','Dubai','Al Ain'];
const user = {
name: 'Andrew',
cities:['Philadelphia','New York','Dublin'],
printPlacesLived() {

    return this.cities.map((city)=> 'Hello '+ city);
    // return cityMessages;
    // this.cities.forEach((city) => {
//console.log(that.name + 'has lived in' + city);
//console.log(this.name + 'has lived in ' + city);
    // });
}
};

console.log(user.printPlacesLived());


//
const multiplier = {
    numbers:[1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number)=>  number * this.multiplyBy)
    }
    //numbers array
    //multiplyBy number
    //multiply - result

};

console.log(multiplier.multiply());//[1,2,3] 2[2,4,6]
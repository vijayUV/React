var nameVar = "Andrew";
nameVar = 'Mike';
console.log('nameVar',nameVar);

 let nameLet = 'Jen';
 nameLet = 'Jack';
 console.log('nameLet', nameLet);

 const nameConst= 'Frank';
 
 console.log('nameConst', nameConst);

 function getPetName()
 {var petName = 'Ha1';
    return petName; }

    //Block scoping

    var fullName = 'Andrew Mead';
    let firstName;
    if(fullName){
        firstName = fullName.split(' ')[0];
        console.log('firstName',firstName);
    }
    console.log('firstName',firstName);
console.log("Register program initiated..."); 

let petSalon = {
    //properties
    Title: "The Fashion Pet",
        address:{
            street: "232 Awesome Street",
            city: "Albuquerque",
            state: "New Mexico",
            zip: "10101"    
        },
        pets:[]
    }

    //creat the constructor
    //<-------------------------parameters  (local variables)--------------->
function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed =breed;
    this.service =service;
    this.owner =owner;
    this.phone = phone;
}

let pet1 = new Pet("Mr. Tinkles", 2, "Male", "Doberman", "Nail Trimming",  "James Dobson", "111-111-1111");
let pet2 = new Pet("Rickshaw", 6, "Female", "Pyrynes", "Vaccines",  "Julio Garz", "222-222-2222");
let pet3 = new Pet("Rez", 9, "Male", "Egyptian", "Grooming",  "Lev Eldemir", "333-333-3333");


petSalon.pets.push (pet1,pet2,pet3);

   //create the pets
//let pet1=new Pet("Scooby", 60, "Male", "Dane", "Grooming", "Shaggy", "555-555-5555");
//let pet2=new Pet("Scoobz", 68, "Female", "Chihuahua", "Wash", "Gary K", "666-666-6666");
//let pet3=new Pet("Fluffs", 80, "Male", "Doberman", "Trim", "Stephen Fry", "333-333-3333");

//register function
//getting the inpiuts
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("numAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("numContact");



function register(){
    //console.log (document.getElementById("txtOwner").value)
    let thePet = new Pet (inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputOwner.value, inputPhone.value);


//Push the obj
if (thePet["name"] ==""){
    alert ("Please enter pet's name"); return false;
    }if (thePet["age"] ==""){
        console.log ("Please enter pet's age"); return false;
        }if (thePet["gender"] ==""){
            console.log ("Please select pet's gender"); return false;
            }if (thePet["breed"] ==""){
                console.log ("Please enter pet's breed"); return false;
                }if (thePet["service"] ==""){
                    console.log ("Please select a service"); return false;
                    }if (thePet["owner"] ==""){
                        console.log ("Please enter owner's name"); return false;
                        }if (thePet["phone"] ==""){
                            console.log ("Please enter owners phone number"); return false;



   // } else for(let i=0; i<petSalon.pets.length; i++) {
   //         if (petSalon.pets[i].name ==thePet.name){
   //     console.log ("They are the same"); return false;
    }else petSalon.pets.push(thePet);
    //console.log (petSalon.pets[0].name);
    //console.log (thePet.name);
    
    //display the petSalon.pets
    for(let i=0; i<petSalon.pets.length; i++) {
    console.log(petSalon.pets[i].name);
    console.log(petSalon.pets[i].age);
    //document.getElementById("pet-name").innerHTML +=`<td class="pet-name">${petSalon.pets[i].name}</td>`;



  // if (item=document.getElementById("txtTask").value){document.getElementById("list").innerHTML+= `<input type=checkbox>${item}<br></input>`;

    }
//    for(let i=0; i<petSalon.pets.length; i++) {
//        for(let i=0; i<petSalon.pets.length; i++) {
            }


 //           document.getElementById("pet-properties").innerHTML =9999999;




console.log("Register program initiated..."); 

let petSalon = {
    //properties
    title: "All the Fluffs!",
        catch_phrase: "Albuquerque's Premier Spa for our favorite furry friends",
        address:{
            street: "232 Navajo Street",
            city: "Albuquerque",
            state: "New Mexico",
            zip: "87106"    
        },
        pets:[]
    }
    document.getElementById("title").innerHTML=`<h1>${petSalon.title}</h1>`;

    document.getElementById("catch-phrase").innerHTML=`
    <p>
        <h3>${petSalon.catch_phrase}</h3>
    </p>
    `;


    //creat the constructor (Pet)
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

//create the original pets 
let pet1 = new Pet("Mr. Tinkles", 2, "Male", "Doberman", "nail trimming",  "James Dobson", "111-111-1111");
let pet2 = new Pet("Rickshaw", 6, "Female", "Pyrynes", "vaccines",  "Julio Garz", "222-222-2222");
let pet3 = new Pet("Rez", 9, "Male", "Egyptian", "grooming",  "Lev Eldemir", "333-333-3333");



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
console.log("-----Updated Pets------");
if (thePet["name"] ==""){
    alert ("Please enter pet's name"); return false;
    }if (thePet["age"] ==""){
        alert ("Please enter pet's age"); return false;
        }if (thePet["gender"] ==""){
            alert ("Please select pet's gender"); return false;
            }if (thePet["breed"] ==""){
                alert ("Please enter pet's breed"); return false;
                }if (thePet["service"] ==""){
                    alert ("Please select a service"); return false;
                    }if (thePet["owner"] ==""){
                        alert ("Please enter owner's name"); return false;
                        }if (thePet["phone"] ==""){
                            alert ("Please enter owners phone number"); return false;
                             //push the new pet (the)                        
                            }else petSalon.pets.push(thePet);
                            //display the petSalon.pets in console window
                                for(let i=0; i<petSalon.pets.length; i++) {
                                console.log(petSalon.pets[i]);
    //clear the inputs
    inputName.value = "";
    inputAge.value = "";
    inputGender.value ="";
    inputBreed.value ="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value ="";
            }
    }


function init(){
    console.log("init");
    petSalon.pets.push (pet1,pet2,pet3);
    //displayCards();

}
window.onload=init;





let userArray=[];

function init(){
    if(localStorage.userRecods){
        userArray=JSON.parse(localStorage.userRecods);
    }
}
function myFunction(){
    let userDetails={
        userName :document.getElementById('name').value , 
        email : document.getElementById('email').value ,
        phone : document.getElementById('phone').value ,
        date : document.getElementById('date').value , 
        time : document.getElementById('time').value
    };


    userArray.push(userDetails);
    console.log(userArray);

    localStorage.userRecods=JSON.stringify(userArray);

    document.getElementById ("name") .value = " ";
    document. getElementById ("email" ).value = " ";
    document.getElementById ("phone") .value = " ";
    document.getElementById ("date") .value = " ";
    document. getElementById ("time" ).value = " ";
    
    
    
    // let userDetails_serialized=JSON.stringify(userDetails)

    // localStorage.setItem("userDetails" , userDetails_serialized)

    // let userDetails_deserialized=JSON.parse(localStorage.getItem("userDetails"))


    // console.log(userDetails_deserialized);
}
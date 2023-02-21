let userArray=[];
let selectedtr=null;

function init(){
    document.getElementById ("tablerows").innerHTML="";
    if(localStorage.userRecods){
        userArray=JSON.parse(localStorage.userRecods);
        for(let i=0 ; i<userArray.length ; i++){
            prepareTable(i,userArray[i].username , userArray[i].email , userArray[i].phone , userArray[i].date , userArray[i].time)
        }
    }
}
function myFunction(){
    let userDetails={
        username :document.getElementById('name').value , 
        email : document.getElementById('email').value ,
        phone : document.getElementById('phone').value ,
        date : document.getElementById('date').value , 
        time : document.getElementById('time').value
    };


    userArray.push(userDetails);
    console.log(userArray);
    localStorage.userRecods=JSON.stringify(userArray);

    init();

    


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

function prepareTable(index,username , email , phone , date , time){
    var table = document.getElementById ("tablerows");
    var row = table.insertRow();
    var user = row.insertCell(0);
    var mail = row.insertCell(1);
    var ph = row. insertCell (2);
    var da = row.insertCell(3);
    var ti = row.insertCell(4);
    var edt=row.insertCell(5);


    user.innerHTML = username;
    mail. innerHTML = email;
    //firstNameCell.colSpan = 2;
    ph.innerHTML = phone;
    da.innerHTML = date;
    ti.innerHTML = time;
    edt.innerHTML= '<button style="width:100%;">Edit</button><br/><button style=" background-color:red;width:100%; margin-top:2px" onclick="deleteTableRow('+index+')">Delete</button>';



    
}

function deleteTableRow(index){
    var table = document.getElementById ("regtable");
    table.deleteRow(index+1);
    userArray.splice(index , 1);
    localStorage.userRecods=JSON.stringify(userArray);
    init();
}
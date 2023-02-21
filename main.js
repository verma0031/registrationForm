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
function onPressingSubmit(){
    let userDetails={
        username :document.getElementById('name').value , 
        email : document.getElementById('email').value ,
        phone : document.getElementById('phone').value ,
        date : document.getElementById('date').value , 
        time : document.getElementById('time').value
    };

    if(selectedIndex==null){
        userArray.push(userDetails);
    }
    else{
        userArray.splice(selectedIndex , 1 , userDetails);
    }
    console.log(userArray);
    localStorage.userRecods=JSON.stringify(userArray);

    init();

    onPressingClear();

    
    
    
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
    edt.innerHTML= '<button style="width:100%;" onclick="onPressingEdit('+index+')">Edit</button><br/><button style=" background-color:red;width:100%; margin-top:2px" onclick="deleteTableRow('+index+')">Delete</button>';



    
}

function deleteTableRow(index){
    // var table = document.getElementById ("regtable");
    // table.deleteRow(index+1);
    userArray.splice(index , 1);
    localStorage.userRecods=JSON.stringify(userArray);
    init();
}

function onPressingClear(){
    selectedIndex=null;
    document.getElementById ("name") .value = " ";
    document. getElementById ("email" ).value = " ";
    document.getElementById ("phone") .value = " ";
    document.getElementById ("date") .value = " ";
    document. getElementById ("time" ).value = " ";

    document.getElementById('submit').value = 'Get a Call';
}

let selectedIndex=null;

function onPressingEdit(index){
    selectedIndex=index;

    let userDetails=userArray[index];

    document.getElementById('name').value = userDetails.username; 
    document.getElementById('email').value = userDetails.email;
    document.getElementById('phone').value = userDetails.phone;
    document.getElementById('date').value = userDetails.date;
    document.getElementById('time').value = userDetails.time;

    document.getElementById('submit').value = 'Update';
}
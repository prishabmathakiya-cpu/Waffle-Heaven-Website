function formValidation(){
    var name=document.forms["reg"]["username"].value;
    var email=document.forms["reg"]["email"].value;
    var message=document.forms["reg"]["message"].value;

    var letters=/^[A-Za-z]+$/;
    var mailformate=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name.trim() === "" || !name.match(letters)){
        alert("Name must contain only letters");
        return false;
    }

    if(!email.match(mailformate)){
        alert("Inavalid Email");
        return false;
    }

    if(message.trim() === ""){
        alert("Message cannot be empty");
        return false;
    }

    alert("Form Successfully Submitted");
    return true;
}
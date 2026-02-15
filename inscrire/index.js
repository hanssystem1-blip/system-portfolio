function required() {
    if (document.formul.Username.value==""){
        document.getElementById("result").innerHTML="Entrer Username*";
        return false;
    }
    else if(document.formul.Username.value.length=<6){
        document.getElementById("result").innerHTML="Atleast eight letter*";
        return false;
    }
}
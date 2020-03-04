

function validateform(){
if (document.Biodata.Name.value =="")
{
   alert("please provide your name");
  
}

else if (document.Biodata.Age.value =="")
{
    alert("please provide your age");
}
else if (document.Biodata.schoolclass =="")
{
    alert("please provide your current class");
} 
else if (document.Biodata.city =="")
{
    alert("please provide your current city");
}
else if (document.Biodata.Email-address =="")
{
    alert("please enter your email address");
}

else{
    
}

}


/*
var Biodataform = document.getElementById('Biodata');
Biodataform.addEventListener('submit', function(event){
    event.preventDefault;
    var NameInput =document.getElementById('Name');
    var AgeInput = document.getElementById('Age');
    var schoolclassInput = document.getElementById('Schoolclass');
    var cityInput = document.getElementById('city')


    var NameValue = NameInput.Value;
    var AgeValue = AgeInput.Value;
    var schoolclassValue = schoolclassInput.Value;
    var cityValue = cityInput.value;

    console.log(NameValue);


});
*/

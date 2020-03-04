

function validateform()
if (name =="")
{
    console.log("field cannot be empty");
}
else if (age == "")
{
    console.log("field cannot be empty");
}
else if (schoolclass == "")
{
    console.log("field cannot be empty");
} 
else if (city =="")
{
    console.log("field cannot be empty");
}

else{
    console.log("fields are accurate");
}

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


});



function validateform(){/*
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

else if (document.Biodata.Email =="")
{
    alert("please enter your email address");
}

else
*/
   var Name = document.getElementById("Name").value;
   var Age = document.getElementById("Age").value;
   var Schoolclass = document.getElementById("Schoolclass").value;
   var city = document.getElementById("city").value;
   var Email = document.getElementById("Email").value;

   var InputDetails = [Name, Age, Schoolclass, city, Email];

   var tablebody = document.getElementById('form-body');
   var newRow = document.createElement('tr');
   
   for(var c=0; c < InputDetails; c++){
   var td = document.createElement('td');
   td.innerHTML = InputDetails(c);
   newRow.appendChild(td);
   }

tablebody.appendChild(newRow);



Name= document.getElementById ("Name").value ="";
Age= document.getElementById ("Age").value ="";
Schoolclass= document.getElementById ("Schoolclass").value ="";
Email= document.getElementById ("Email").value ="";
city= document.getElementById ("city").value ="";
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

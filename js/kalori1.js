function GenderType() {
    var GenderType = document.getElementsByName("rbMale","rbFemale");
 
    if(rbMale == "Male") {
      GenderType.innerHTML = "Male";
    } else {
      rbFemale == "Female";
      GenderType.innerHTML = "Female";
    }     
  }
 
  function validate() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var weight = document.getElementById("weight");
    var height = document.getElementById("height");          
 
    error = false;
 
    var reName = /^[a-zA-Z ]{5,}$/;
    if (reName.test(name.value) == false) {
      nameError.innerHTML = "Name must be eight letters or more";
      error = true;
    } else {
      nameError.innerHTML = "";
    }
 
    age = parseInt(age.value);
    if ( isNaN(age)  || age < 0 || age > 65) {
      ageError.innerHTML = "Age must be in range 0-65";
      error = true;
    } else {
      ageError.innerHTML = "";
    }
 
    weight = parseInt(weight.value);
    if ( isNaN(weight) || weight < 0) {
      weightError.innerHTML = "Weight must be greater than 0";
      error = true;
    } else {
      weightError.innerHTML = "";
    }
 
    height = parseInt(height.value);
    if (isNaN(height) || height < 0) {
      heightError.innerHTML = "height must be greater than 0"
      error = true;
    } else {
      heightError.innerHTML = "";
    }
 
    if ( !male.checked & !female.checked) {
      genderError.innerHTML = "Select value";
      error = true;
    } else {
      genderError.innerHTML = "";    
    }                    
  }
 
  function BMRCalculate () {
    if ( validate()==false ) {
      var GenderType = document.getElementById("rbMale","rbFemale").value;
      var age = document.getElementById("age").value;
      var female = document.getElementById("rbFemale");
      var male = document.getElementById("rbMale");
      var weight = document.getElementById("weight");
      var height = document.getElementById("height");
      var BMIValue = weight/( (height/100)*(height/100) );
      var BMRValue;
      var ThisMeans = document.getElementById("meaning");
 
      if(GenderType == male) {
        BMRValue = 10*(weight+6.25)(height-5)(age+5);
      } else {
        GenderType = female;
        BMRValue = 10*(weight+6.25)(height-5)(age-161);
    }
 
    if (BMIValue<18.5) {
      ThisMeans = "you are too thin";
      document.write(ThisMeans);
    } else if (BMIValue>18.5 && BMIValue<25) {
      ThisMeans = "you are healthy";
      document.write(ThisMeans);
    } else {
      ThisMeans = "You are not healthy";
      document.write(ThisMeans);
    }
  }
document.getElementById('calorie-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none';
  
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateCalories, 2000);
  
    e.preventDefault();
  });
  
  function calculateCalories(e) {
    
    const age = document.getElementById('age');
    const gender = document.querySelector('input[name="customRadioInline1"]:checked');
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const activity = document.getElementById('list').value;
    const totalCalories = document.getElementById('total-calories');
    
    
    if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
      errorMessage('Please make sure the values you entered are correct')
    } else if(gender.id === 'male' && activity === "1") {
      totalCalories.value = 90 / 100 * (66.5 + (13.75 * parseFloat(weight.value)) + (5 * parseFloat(height.value)) - (6.75 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "2") {
      totalCalories.value = 79 / 100 * (66.5 + (13.75 * parseFloat(weight.value)) + (5 * parseFloat(height.value)) - (6.75 * parseFloat(age.value)));
    } else if (gender.id === 'male' && activity === "3") {
      totalCalories.value = 59 / 100 * (66.5 + (13.75 * parseFloat(weight.value)) + (5 * parseFloat(height.value)) - (6.75 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "4") {
      totalCalories.value = 110 / 100 * (66.5 + (13.75 * parseFloat(weight.value)) + (5 * parseFloat(height.value)) - (6.75 * parseFloat(age.value)));
    } else if(gender.id === 'male' && activity === "5") {
      totalCalories.value = 121 / 100 * (66.5 + (13.75 * parseFloat(weight.value)) + (5 * parseFloat(height.value)) - (6.75 * parseFloat(age.value)))
    } else if(gender.id === 'male' && activity === "6") {
      totalCalories.value = 141 / 100 * (66.5 + (13.75 * parseFloat(weight.value)) + (5 * parseFloat(height.value)) - (6.75 * parseFloat(age.value)))
    } else if(gender.id === 'male' && activity === "7") {
      totalCalories.value = (66.5 + (13.75 * parseFloat(weight.value)) + (5 * parseFloat(height.value)) - (6.75 * parseFloat(age.value)))
      ;
    } else if(gender.id === 'female' && activity === "1") {
      totalCalories.value = 90 / 100 * (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "2") {
      totalCalories.value = 79 / 100 * (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "3") {
      totalCalories.value = 59 / 100 * (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "4") {
      totalCalories.value = 110 / 100 * (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "5") {
      totalCalories.value = 121 / 100 * (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "6") {
      totalCalories.value = 141 / 100 * (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else if(gender.id === 'female' && activity === "7") {
      totalCalories.value = (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
    } else {
      totalCalories.value = 141 / 100 * (655.1 + (9.563 * parseFloat(weight.value)) + (1.85 * parseFloat(height)) - (4.676 * parseFloat(age.value)));
    } 
  
    document.getElementById('results').style.display = 'block';
  
    document.getElementById('loading').style.display = 'none';
  }
  
  function errorMessage(error) {
    document.getElementById('results').style.display = 'none';
  
    document.getElementById('loading').style.display = 'none';
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
  
    card.insertBefore(errorDiv, heading);
  
    setTimeout(clearError, 4000);
  }
  
  function clearError() {
    document.querySelector('.alert').remove();
  }
  
  
function getDogImage(dogNumber) {
    fetch('https://dog.ceo/api/breeds/image/random/' + dogNumber)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Ahhhhhhhhh!'));
  }

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  for(i = 0; i < responseJson.message.length; i++){
    $('h2').append(
      `<img src="${responseJson.message[i]}" class="getdog">`
    )
  }
  //display the results section
  $('section').removeClass('hidden');
}
  
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //gets number from input & saves to variable
    let dogNumber = $('#dogNumber').val();  
    getDogImage(dogNumber);
  });
}
  
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

function response(){
    response().json; 
}; 

// response => response.json()
// Add your code here

function submitData(userName, userEmail){
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail
    }) 
  }
  return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response){
      return response.json();
    })
    .then(function (object){
     document.body.innerHTML = object.id 
    })
    .catch(function(error){
      alert("Danger, Will Robinson!");
      document.body.innerHTML = error.message
    })
}

// const configurationObject = {
//  // method: "POST", 
//   headers: {
//     "Content-type": "application/json",
//     Accept: "application/jason",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   })
// }

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function(response){
//     return response.json();
//   })
//   .then(function (object){
//     console.log(object);
//   })
//   .catch(function(error){
//     alert("Bad things, bitch!");
//     console.log(error.message);
//   });
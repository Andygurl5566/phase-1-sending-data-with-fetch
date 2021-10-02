// Add your code here

//test 1
function submitData(username,userEmail){
const userdataObject = {
  method: "POST",
  headers:{
    "Content-Type": "application/json",
    Accept : "application/json",
  },
  body: JSON.stringify({
    name: username,
    email: userEmail,
  })
}

fetch("http://localhost:3000/users", userdataObject)
.then(function (response) { // returns what we posted
  return response.json(); // converts back to text from Json
})
.then(function (object) {  // the results of the json() is returned 
  console.log(object);    // tells the computer what to do with the returned data
})
}

// test 2
function submitData(username,userEmail){
  const userdataObject = {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      Accept : "application/json",
    },
    body: JSON.stringify({
      name: username,
      email: userEmail,
    })
  }
  
  fetch("http://localhost:3000/users", userdataObject)
  .then(function (response) { // returns what we posted
    return response.json(); // converts back to text from Json
  })
  .then(function (object) { // the results of the json() is returned 
    
    document.body.append(object.id);    // tells the computer what to do with the returned data
  })
  }

  //test 3

function submitData(username,userEmail){
  const userdataObject = {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      Accept : "application/json",
    },
    body: JSON.stringify({
      name: username,
      email: userEmail,
    })
  }
  
  fetch("http://localhost:3000/users", userdataObject)
  .then(function (response) { // returns what we posted
    return response.json(); // converts back to text from Json
  })
  .then(function (object) { // the results of the json() is returned 
    
    document.body.append(object.id);    // tells the computer what to do with the returned data
  })
  .catch(function (error) {
    error ("Bad things! Ragnarők!");
    
    console.log(error.message);
    document.body.innerHTML = 'Unauthorized Access'
    })
  }

// EXAMPLES

//   const formData = {
//   dogName: "Bryon",
//   dogBreed:"Poodle",
//  }



// const configurationObject = {
//   method: "POST",
//   headers:{
//     "Content-Type": "application/json",
//     Accept : "application/json",
//   },
//   body: JSON.stringify(formData),
// }


// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function (response) { // returns what we posted
//   return response.json(); // converts back to text from Json
// })
// .then(function (object) {  // the results of the json() is returned 
//   console.log(object);    // tells the computer what to do with the returned data
// })
// .catch(function (error) {   
//   alert("Bad things! Ragnarők!");
//   console.log(error.message);
// })

//Example of the above using an anonymous object  
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });

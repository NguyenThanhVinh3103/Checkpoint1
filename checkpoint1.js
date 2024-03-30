function getList(){
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://reqres.in/api/users", requestOptions)
    .then((response) =>
     response.json()
     )
    .then((result) =>
    //  console.log(result),
     document.getElementById('text').innerText = JSON.stringify(result, null, 2)
     )
    .catch((error) => console.error(error));
}

 
function displayData (response){
    document.getElementById('response').innerText = JSON.stringify(response, null, 2);}
  

function postList(){

    var name = document.getElementById('name').value;
    var job = document.getElementById('job').value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
      
     
    const raw = JSON.stringify({
      "name": name,
      "job": job
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      
    
  fetch("https://reqres.in/api/users", requestOptions)
    .then((response) => response.json()) 
    .then((result) => document.getElementById('text').innerText = JSON.stringify(result, null, 2))
    .catch((error) => console.error(error));
}



  
function putList(){

    var name = document.getElementById('name').value;
    var job = document.getElementById('job').value;
    var userID = document.getElementById('userID').value;

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": name,
  "job": job,
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`https://reqres.in/api/users/${userID}`, requestOptions)
  .then((response) => response.json())
  .then((result) => document.getElementById('text').innerText = JSON.stringify(result, null, 2))
  .catch((error) => console.error(error));
}




function deleteList(){

    var userID = document.getElementById('userID').value;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`https://reqres.in/api/users/${userID}`, requestOptions)
  .then((response) => response.text().then(data =>{alert('delete successful');
console.log(data)}))
  .then((result) => document.getElementById('text').innerText = JSON.stringify(result, null, 2))
  .catch((error) => console.error(error));
}
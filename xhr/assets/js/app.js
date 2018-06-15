const btn = document.querySelector("button");
const img = document.getElementById("photo");
const url = "https://dog.ceo/api/breeds/image/random"

const getJSON = (url, callback) => {
  //crear instncia del objeto XMLHttpRequest
  const request = new  XMLHttpRequest();

  request.onload = () => {
    //el 4: la peticion se termino y la repuesta esta lista 
    // 200: status está ok
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText);
    }
  }
  // open()
  request.open("GET", url);
  //send()
  request.send();
}

btn.addEventListener("click", () => {
  //response respuesta a la petición y es el JSON
  getJSON(url, response => {
    let doggie = JSON.parse(response);
    console.log(doggie);
    img.src = doggie.message;
  })
});
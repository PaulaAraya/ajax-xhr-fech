const inputText = document.querySelector("input")
const containerTitle = document.getElementById("title")
const containerYear = document.getElementById("year")
const containerRuntime = document.getElementById("runtime")
const containerImage = document.getElementById("img") 


//enviar mensaje con enter sin boton
inputText.addEventListener("keypress", (event) =>{
  // wich y keyCode son eventos del teclado
  let key = event.which || event.keyCode;
  // 13 es enter
  if(key === 13) {
    let movie = inputText.value;
    console.log(movie)
    inputText.value = ""; 

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=348097f5`) //sin ; después de fech
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderInfo(data);
    })
  }
})
const renderInfo = data => {
  containerTitle.innerHTML = data.Title;
  containerYear.innerHTML = data.Year;
  containerRuntime.innerHTML = data.Runtime;
  containerImage.innerHTML = `<img src="${data.Poster}">`;
}
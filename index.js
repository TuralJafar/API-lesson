const  cards = document.getElementById("cards");


fetch(
    "https://rickandmortyapi.com/api/character"
).then((res)=> res.json())
.then((data) => {
    console.log(data)
    let innerHTML = "";
    for(let i = 0; i< data.results.length; i++){
        innerHTML += `<div class="row row-cols-1 row-cols-md-4 " id="cards" >
        <div class="col my-4">
          <div class="card" style="width: 18rem;">
            <img src="${data.results[i].image }" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" id="official">${data.results[i].name}</h5>
              <p > ID : ${data.results[i].id}</p>
              <p> CREATED : ${data.results[i].created}
              <p> LINK : ${data.results[i].url}</p>
            </div>
          </div>
        </div>
      </div>`
    }
    cards.innerHTML = innerHTML;
})
toggle.addEventListener("click", function(e){
    document.body.classList.toggle("toggle")
    toggle.classList("toggle")
   
})
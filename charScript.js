const data = JSON.parse(localStorage.getItem('myData'));
const episodes = document.querySelector('.eps')

if (data) {
  const {name, image, species, status, origin, eps } = data.character;
  updateCharacterInfo(name, image, species, status, origin, eps);
} else {
  console.log('Dados não recebidos');
}

function updateCharacterInfo(name, image, species, status, origin, eps) {
  const nameElem = document.querySelector('.name');
  const imageElem = document.querySelector('.img');
  const speciesElem = document.querySelector('.species');
  const statusElem = document.querySelector('.status');
  const originElem = document.querySelector('.origin')
  const epsElem = document.querySelector('.eps')

  if (nameElem && imageElem && speciesElem && statusElem && originElem && epsElem) {
    document.title = name;
    nameElem.textContent = name;
    imageElem.src = image;
    speciesElem.innerText = species;
    statusElem.innerText = status;
    originElem.innerText = origin;
    eps.forEach(episode => {
      const p = document.createElement('p')
      p.classList = 'episodes'
      p.append(episode)
      p.innerText = episode.substring(40, 42);
      episodes.append(p)
    });

    if(statusElem.innerText == "Dead"){
      statusElem.style.color = "red";
    }else {
      statusElem.style.color = "green"
    }

    }else{
      const erro = document.createElement("h1")
      erro.innerHTML = "Dados não recebidos"
    };
}

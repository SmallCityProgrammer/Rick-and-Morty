const charsContainer = document.querySelector('.chars-container');
const searchInput = document.querySelector("#search")
const speciesFilters = document.querySelector('#species');
const genderFilters = document.querySelector('#gender');
const statusFilters = document.querySelector('#status');
const loadMoreButton = document.querySelector('#load-more')


const API = 'https://rickandmortyapi.com/api/'
const defaultFilters = {
  name: '',
  species: '',
  gender: '',
  status: '',
  page: 1
}

//Função que reúne todas as informações que serão passadas na API
async function getCharacters({name, species, gender, status, page = 1}) {
  const response = await fetch(`${API}/character?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`)

  const characters = await response.json()
  return characters.results
}

//Função assíncrona que usa getCharacters e passa o objeto defaultFilters como parametro
async function main() {
  const characters = await getCharacters(defaultFilters)
  addListeners()
  render({ characters })
}

//Starta o projeto
main()

//Renderizei todos characters com um forEach criando dinamicamente toda a estrutura dos cards
function render({ characters }) {
  characters.forEach((character) => {
    //criei elementos para cada card
    const div = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const species = document.createElement('p');
    const status = document.createElement('p');

    //adicionei as classes pra estilizar no CSS
    div.classList = 'card'
    image.classList = 'card-img'
    name.classList = 'card-name'
    species.classList = 'card-species card-info'
    status.classList = 'card-status card-info'
    

    //adicionei os dados do objeto character aos elementos criados
    image.src = character.image;
    name.innerText = character.name;
    species.innerText = character.species;
    status.innerText = character.status;
    
    //linkei os elementos ao elemento div, e o elemento div a classe charsContainer do Index.html
    div.append(image, name, species, status)
    charsContainer.appendChild(div)
    
    //essa função salva os dados do personagem clickado como selectedCharacter, que eu armazeno como dado pro localStorage e transfiro o usuário pra pagina charPage onde eu consumo esses dados
    div.addEventListener("click", () => {
    const selectedCharacter = {
      name: character.name,
      image: character.image,
      status: character.status,
      species: character.species,
      origin: character.origin.name,
      eps: character.episode
    };

    localStorage.setItem('myData', JSON.stringify({ character: selectedCharacter }));
    window.location.href = "./charPage.html";
  })
  });
}

async function handleFilterChange(type, event) {
  defaultFilters[type] = event.target.value;

  charsContainer.innerHTML = '';
  const characters = await getCharacters(defaultFilters);
  render({ characters });
}

//Botão de carregar mais
function handleLoadMore(){
  loadMoreButton.addEventListener("click", async () => {
    defaultFilters.page += 1

    const characters = await getCharacters(defaultFilters)
    render({characters})
  })
}

//Listener da filtragem por nome, status, genero e especie com validação de formulário
function addListeners() {
  speciesFilters.addEventListener("change", async (event) => {
    defaultFilters.species = speciesFilters.value.trim();
    defaultFilters.page = 1; //Reseta a pagina da API pra 1

    handleFilterChange("species", event)()
  })

  genderFilters.addEventListener("change", async (event) => {
    defaultFilters.gender = genderFilters.value.trim();
    defaultFilters.page = 1; //Reseta a pagina da API pra 1

    handleFilterChange("gender", event)()
  })

  statusFilters.addEventListener("change", async (event) => {
    defaultFilters.status = statusFilters.value.trim();
    defaultFilters.page = 1; //Reseta a pagina da API pra 1

    handleFilterChange("status", event)()
  })

  searchInput.addEventListener("keyup", async (event) => {
    defaultFilters.name = searchInput.value.trim();
    defaultFilters.page = 1; //Reseta a pagina da API pra 1
  
    //Realiza a filtragem por nome
    handleFilterChange("name",event)();
  })

  loadMoreButton.addEventListener("click",handleLoadMore)
}

const people = 'https://www.swapi.tech/api/people';
const planets = 'https://www.swapi.tech/api/planets';
const spaceships = 'https://swapi.tech/api/starships';
const vehicles = 'https://www.swapi.tech/api/vehicles';
const species = 'https://www.swapi.tech/api/species';

let url, outputClass;

document.querySelector('.menu_btn').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_people')) {
      url = people;
      outputClass = 'people';
    } else if (event.target.classList.contains('btn_planets')) {
      url = planets;
      outputClass = 'planets';
    } else if (event.target.classList.contains('btn_spaceships')) {
      url = spaceships;
      outputClass = 'spaceships';
    } else if (event.target.classList.contains('btn_vehicles')) {
      url = vehicles;
      outputClass = 'vehicles';
    } else if (event.target.classList.contains('btn_species')) {
      url = species;
      outputClass = 'species';
    } else {
      return;
    }
  
    if (url && outputClass) {
      loadServer(url, outputClass, false);
    }
  });

async function loadServer(url, outputClass, append = false) {
    const people = await fetch(url);
    const result = await people.json();
    console.log(result);

    showTitles(result, outputClass, append);
}

function showTitles(result, outputClass, append) {
  const parent = document.querySelector(`.${outputClass}`);
  if (!append) {
    parent.innerHTML = '';
  }
  
  let ol = parent.querySelector('ol');
  
  if (!ol) {
    ol = document.createElement('ol');
    parent.appendChild(ol);
  }

  result.results.forEach(element => {
    const name = element.name;
    const li = document.createElement('li');
    li.textContent = name;
    li.setAttribute('title', outputClass)
    ol.appendChild(li);
  });

  const oldBtn = parent.querySelector('.btn_load');
  if (oldBtn) {
    oldBtn.remove()};

  if (result.next) {
    const btn_load = document.createElement('button');
    btn_load.classList.add('btn_load');
    btn_load.textContent = 'Load more';
    btn_load.addEventListener('click', () => {
      loadServer(result.next, outputClass, true);
    });
    parent.appendChild(btn_load);
  }
}


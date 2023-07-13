export function alfabeto(data){
  const titleAZ = data.slice();
  titleAZ.sort((a, b) => {
    if (a.title < b.title){
      return -1;
    }
  })
  return titleAZ;
}

export function sortRelease(data){
  const realease = data.slice();
  realease.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return -1;
    }
  })
  return realease;
}

export function sortRating(data){
  const rating = data.slice();
  rating.sort((a, b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)){
      return -1;
    }
  })
  return rating;
}

export function renderCardFilms(data){
  const card = `
  <div class = "card">
    <img class="card-img" src="${data.poster}" alt="poster">
    <table>
      <tr>
        <th class="title">${data.title}</th>
        <th class="score">⭐${data.rt_score}/100</th>
      </tr>
      <tr>
        <th class="director">🎬${data.director}</th>
        <th class="release">${data.release_date}</th>
      </tr>
    </table>
  </div>
  `;
  return card;
}

export function director (data, value){
  const result = data.filter(i => i.director === value);
  return result;
}
//funcionou!
export function better (data, value){
  const array = director(data, value);
  const better = array.filter(i => i.rt_score >94);
  console.log(better);
  return better;
}
//funcionou!!
export function rt_score (data, value) {
  const array = director(data, value);

  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += parseInt(array[i].rt_score);
  }
  const media = soma/array.length;
  return media;
}


//funcionou!
export function avaliarDiretor(data, value){
  const array = director(data, value);
  const betterFilms = better(data, value);
  const p = `
  <p class="rt"> Esse diretor produziu ${array.length} animações.</p>
  <p class="rt"> E ${betterFilms.length} foram muito bem avaliadas!</p>
  <p class="rt"> Nota média das produções desse diretor é: ${rt_score(data, value)}  </p>
  `;
  return p;
}

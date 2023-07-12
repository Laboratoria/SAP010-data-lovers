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

export function percentRating(data){
  const array = data.slice();
  const rating = array.rt_score;

}

export function director (data, value){
  const result = data.filter(i => i.director === value);

  //const percent = (result.length / data.length) * 100
  return result;
}

import { alfabeto, sortRelease, sortRating, renderCardFilms} from '../src/data.js';

const arrayExemple = [{
  "title": "Castle in the Sky",
  "release_date": "1986",
  "rt_score": "95"
},
{
  "title": "The Secret World of Arrietty",
  "release_date": "2010",
  "rt_score": "95",
},
{
  "title": "The Wind Rises",
  "release_date": "2013",
  "rt_score": "89"
},
{
  "title": "Grave of the Fireflies",
  "release_date": "1988",
  "rt_score": "97"
},
{
  "title": "Kiki's Delivery Service",
  "release_date": "1989",
  "rt_score": "96"
}]

const arrayFilm = [{"id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
  "director": "Isao Takahata",
  "producer": "Toru Hara",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
  "release_date": "1988",
  "rt_score": "97"}]

describe('alfabeto', () => {
  it('should be a function', () => {
    expect(typeof alfabeto).toBe('function');
  });

  it('returns array films ordered br alfabeth', () => {
    expect(alfabeto(arrayExemple)).toEqual(
      [{
        "title": "Castle in the Sky",
        "release_date": "1986",
        "rt_score": "95"
      },
      {
        "title": "Grave of the Fireflies",
        "release_date": "1988",
        "rt_score": "97"
      },
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96"
      },
      {
        "title": "The Secret World of Arrietty",
        "release_date": "2010",
        "rt_score": "95",
      },
      {
        "title": "The Wind Rises",
        "release_date": "2013",
        "rt_score": "89"
      }
      ]
    );
  });
});

describe('sortRelease', () => {
  it('is a function', () => {
    expect(typeof sortRelease).toBe('function');
  });

  it('returns array ordered by release date', () => {
    expect(sortRelease(arrayExemple)).toEqual(
      [{
        "title": "Castle in the Sky",
        "release_date": "1986",
        "rt_score": "95"
      },
      {
        "title": "Grave of the Fireflies",
        "release_date": "1988",
        "rt_score": "97"
      },
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96"
      },
      {
        "title": "The Secret World of Arrietty",
        "release_date": "2010",
        "rt_score": "95",
      },
      {
        "title": "The Wind Rises",
        "release_date": "2013",
        "rt_score": "89"
      }
      ]
    );
  });
});

describe('sortRating', () => {
  it('is a function', () => {
    expect(typeof sortRating).toBe('function');
  });

  it('returns array ordered by rating score', () => {
    expect(sortRating(arrayExemple)).toEqual(
      [ {
        "title": "The Wind Rises",
        "release_date": "2013",
        "rt_score": "89"
      },
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
        "rt_score": "95"
      },
      {
        "title": "The Secret World of Arrietty",
        "release_date": "2010",
        "rt_score": "95",
      },
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96"
      },
      {
        "title": "Grave of the Fireflies",
        "release_date": "1988",
        "rt_score": "97"
      }]
    );
  });
});

describe('renderCardFilms', () => {
  it('is a function', () => {
    expect(typeof sortRelease).toBe('function');
  });

  it('returns card', () => {
    expect(renderCardFilms(arrayFilm[0])).toBe(`
  <div class = "card">
    <img src="https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg" alt="poster">
    <table>
      <tr>
        <th>Grave of the Fireflies</th>
        <th>⭐97/100</th>
      </tr>
      <tr>
        <th>🎬Isao Takahata</th>
        <th>1988</th>
      </tr>
    </table>
  </div>`
    );
  });
});


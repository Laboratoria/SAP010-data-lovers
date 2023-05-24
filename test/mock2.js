const arrCont = [
  {
    name: {
      common: "Guatemala",
      official: "Republic of Guatemala",
    },
    tld: [".gt"],
    independent: true,
    capital: ["Guatemala City"],
    subregion: "Central America",
    languages: {
      spa: "Spanish",
    },
    borders: ["BLZ", "SLV", "HND", "MEX"],
    area: 108889,
    flag: "🇬🇹",
    population: 16858333,
    gini: {
      2014: 48.3,
    },
    fifa: "GUA",
    timezones: ["UTC-06:00"],
    continents: ["America"],
    flags: {
      png: "https://flagcdn.com/w320/gt.png",
      svg: "https://flagcdn.com/gt.svg",
      alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band.",
    },
  },
  {
    name: {
      common: "Singapore",
      official: "Republic of Singapore",
    },
    tld: [".sg", ".新加坡", ".சிங்கப்பூர்"],
    independent: true,
    capital: ["Singapore"],
    subregion: "South-Eastern Asia",
    languages: {
      zho: "Chinese",
      eng: "English",
      msa: "Malay",
      tam: "Tamil",
    },
    area: 710,
    flag: "🇸🇬",
    population: 5685807,
    fifa: "SIN",
    timezones: ["UTC+08:00"],
    continents: ["Asia"],
    flags: {
      png: "https://flagcdn.com/w320/sg.png",
      svg: "https://flagcdn.com/sg.svg",
      alt: "The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon.",
    },
  },
  {
    name: {
      common: "Bosnia and Herzegovina",
      official: "Bosnia and Herzegovina",
    },
    tld: [".ba"],
    independent: true,
    capital: ["Sarajevo"],
    subregion: "Southeast Europe",
    languages: {
      bos: "Bosnian",
      hrv: "Croatian",
      srp: "Serbian",
    },
    borders: ["HRV", "MNE", "SRB"],
    area: 51209,
    flag: "🇧🇦",
    population: 3280815,
    gini: {
      2011: 33,
    },
    fifa: "BIH",
    timezones: ["UTC+01:00"],
    continents: ["Europe"],
    flags: {
      png: "https://flagcdn.com/w320/ba.png",
      svg: "https://flagcdn.com/ba.svg",
      alt: "The flag of Bosnia and Herzegovina has a blue field, at the center of which is a large yellow hoist-side facing right-angled triangle that is based on the top edge and spans the height of the field. Adjacent to the hypotenuse of this triangle are nine adjoining five-pointed white stars with the top and bottom stars cut in half by the edges of the field.",
    },
  },
  {
    name: {
      common: "Cape Verde",
      official: "Republic of Cabo Verde",
    },
    tld: [".cv"],
    independent: true,
    capital: ["Praia"],
    subregion: "Western Africa",
    languages: {
      por: "Portuguese",
    },
    area: 4033,
    flag: "🇨🇻",
    population: 555988,
    gini: {
      2015: 42.4,
    },
    fifa: "CPV",
    timezones: ["UTC-01:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/cv.png",
      svg: "https://flagcdn.com/cv.svg",
      alt: "The flag of Cape Verde is composed of five horizontal bands of blue, white, red, white and blue in the ratio of 6:1:1:1:3. A ring of ten five-pointed yellow stars is centered at three-eighth of the height from the bottom edge and three-eighth of the width from the hoist end of the field.",
    },
  },
  {
    name: {
      common: "Antarctica",
      official: "Antarctica",
    },
    tld: [".aq"],
    independent: false,
    area: 14000000,
    flag: "🇦🇶",
    population: 1000,
    timezones: [
      "UTC-03:00",
      "UTC+03:00",
      "UTC+05:00",
      "UTC+06:00",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+10:00",
      "UTC+12:00",
    ],
    continents: ["Antarctica"],
    flags: {
      png: "https://flagcdn.com/w320/aq.png",
      svg: "https://flagcdn.com/aq.svg",
    },
  },
  {
    name: {
      common: "New Zealand",
      official: "New Zealand",
    },
    tld: [".nz"],
    independent: true,
    capital: ["Wellington"],
    subregion: "Australia and New Zealand",
    languages: {
      eng: "English",
      mri: "Māori",
      nzs: "New Zealand Sign Language",
    },
    area: 270467,
    flag: "🇳🇿",
    population: 5084300,
    fifa: "NZL",
    timezones: [
      "UTC-11:00",
      "UTC-10:00",
      "UTC+12:00",
      "UTC+12:45",
      "UTC+13:00",
    ],
    continents: ["Oceania"],
    flags: {
      png: "https://flagcdn.com/w320/nz.png",
      svg: "https://flagcdn.com/nz.svg",
      alt: "The flag of New Zealand has a dark blue field with the flag of the United Kingdom — the Union Jack — in the canton and a representation of the Southern Cross constellation, made up of four five-pointed white-edged red stars, on the fly side of the field.",
    },
  },
];

const arrAmerica = [
  {
    name: {
      common: "Guatemala",
      official: "Republic of Guatemala",
    },
    tld: [".gt"],
    independent: true,
    capital: ["Guatemala City"],
    subregion: "Central America",
    languages: {
      spa: "Spanish",
    },
    borders: ["BLZ", "SLV", "HND", "MEX"],
    area: 108889,
    flag: "🇬🇹",
    population: 16858333,
    gini: {
      2014: 48.3,
    },
    fifa: "GUA",
    timezones: ["UTC-06:00"],
    continents: ["America"],
    flags: {
      png: "https://flagcdn.com/w320/gt.png",
      svg: "https://flagcdn.com/gt.svg",
      alt: "The flag of Guatemala is composed of three equal vertical bands of light blue, white and light blue, with the national coat of arms centered in the white band.",
    },
  },
];

const arrAsia = [
  {
    name: {
      common: "Singapore",
      official: "Republic of Singapore",
    },
    tld: [".sg", ".新加坡", ".சிங்கப்பூர்"],
    independent: true,
    capital: ["Singapore"],
    subregion: "South-Eastern Asia",
    languages: {
      zho: "Chinese",
      eng: "English",
      msa: "Malay",
      tam: "Tamil",
    },
    area: 710,
    flag: "🇸🇬",
    population: 5685807,
    fifa: "SIN",
    timezones: ["UTC+08:00"],
    continents: ["Asia"],
    flags: {
      png: "https://flagcdn.com/w320/sg.png",
      svg: "https://flagcdn.com/sg.svg",
      alt: "The flag of Singapore is composed of two equal horizontal bands of red and white. On the hoist side of the red band is a fly-side facing white crescent which partially encloses five small five-pointed white stars arranged in the shape of a pentagon.",
    },
  },
];

const arrEuropa = [
  {
    name: {
      common: "Bosnia and Herzegovina",
      official: "Bosnia and Herzegovina",
    },
    tld: [".ba"],
    independent: true,
    capital: ["Sarajevo"],
    subregion: "Southeast Europe",
    languages: {
      bos: "Bosnian",
      hrv: "Croatian",
      srp: "Serbian",
    },
    borders: ["HRV", "MNE", "SRB"],
    area: 51209,
    flag: "🇧🇦",
    population: 3280815,
    gini: {
      2011: 33,
    },
    fifa: "BIH",
    timezones: ["UTC+01:00"],
    continents: ["Europe"],
    flags: {
      png: "https://flagcdn.com/w320/ba.png",
      svg: "https://flagcdn.com/ba.svg",
      alt: "The flag of Bosnia and Herzegovina has a blue field, at the center of which is a large yellow hoist-side facing right-angled triangle that is based on the top edge and spans the height of the field. Adjacent to the hypotenuse of this triangle are nine adjoining five-pointed white stars with the top and bottom stars cut in half by the edges of the field.",
    },
  },
];

const arrAfrica = [
  {
    name: {
      common: "Cape Verde",
      official: "Republic of Cabo Verde",
    },
    tld: [".cv"],
    independent: true,
    capital: ["Praia"],
    subregion: "Western Africa",
    languages: {
      por: "Portuguese",
    },
    area: 4033,
    flag: "🇨🇻",
    population: 555988,
    gini: {
      2015: 42.4,
    },
    fifa: "CPV",
    timezones: ["UTC-01:00"],
    continents: ["Africa"],
    flags: {
      png: "https://flagcdn.com/w320/cv.png",
      svg: "https://flagcdn.com/cv.svg",
      alt: "The flag of Cape Verde is composed of five horizontal bands of blue, white, red, white and blue in the ratio of 6:1:1:1:3. A ring of ten five-pointed yellow stars is centered at three-eighth of the height from the bottom edge and three-eighth of the width from the hoist end of the field.",
    },
  },
];

const arrAntartida = [
  {
    name: {
      common: "Antarctica",
      official: "Antarctica",
    },
    tld: [".aq"],
    independent: false,
    area: 14000000,
    flag: "🇦🇶",
    population: 1000,
    timezones: [
      "UTC-03:00",
      "UTC+03:00",
      "UTC+05:00",
      "UTC+06:00",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+10:00",
      "UTC+12:00",
    ],
    continents: ["Antarctica"],
    flags: {
      png: "https://flagcdn.com/w320/aq.png",
      svg: "https://flagcdn.com/aq.svg",
    },
  },
];

const arrOceania = [
  {
    name: {
      common: "New Zealand",
      official: "New Zealand",
    },
    tld: [".nz"],
    independent: true,
    capital: ["Wellington"],
    subregion: "Australia and New Zealand",
    languages: {
      eng: "English",
      mri: "Māori",
      nzs: "New Zealand Sign Language",
    },
    area: 270467,
    flag: "🇳🇿",
    population: 5084300,
    fifa: "NZL",
    timezones: [
      "UTC-11:00",
      "UTC-10:00",
      "UTC+12:00",
      "UTC+12:45",
      "UTC+13:00",
    ],
    continents: ["Oceania"],
    flags: {
      png: "https://flagcdn.com/w320/nz.png",
      svg: "https://flagcdn.com/nz.svg",
      alt: "The flag of New Zealand has a dark blue field with the flag of the United Kingdom — the Union Jack — in the canton and a representation of the Southern Cross constellation, made up of four five-pointed white-edged red stars, on the fly side of the field.",
    },
  },
];

export {
  arrCont,
  arrAmerica,
  arrAsia,
  arrEuropa,
  arrAfrica,
  arrAntartida,
  arrOceania,
};

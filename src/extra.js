import characters from "./data/got/got.js";


export function translateTitle(title) {
    // Mapear os títulos em inglês para suas traduções em português
    const translations = {
        "Mother of Dragons": "Mãe dos Dragões",
        "Maester": "Meistre",
        "King of the North": "Rei do Norte",
        "No One": "Nenhum",
        "Lady of Winterfell": "Senhora de Winterfell",
        "Lord of Winterfell": "Senhor de Winterfell",
        "Lord of the Seven Kingdoms": "Senhor dos Sete Reinos",
        "Lord Commander of the Kingsguard": "Senhor Comandante da Guarda Real",
        "Lady of Casterly Rock": "Senhora do Rochedo Casterly",
        "Captain of Sea Bitch": "Capitão do Cadela do Mar",
        "Lord of the Seven Kingdoms, Protector of the Realm": "Senhor dos Sete Reinos, Protetor do Território",
        "Hand of the Queen": "Mão da Rainha",
        "The Hound": "Cão de Caça",
        "Littlefinger": "Mindinho",
        "Hand of the King": "Mão do Rei",
        "Lord of Dragonstone":"Senhor da Pedra do Dragão",
        "Master of Whisperers":"Mestre dos Sussurros",
        "Queen of the Seven Kingdoms":"Rainha dos Sete Reinos",
        "Spearwife":"Esposa de Lança",
        "Lady Brienne":"A Donzela de Tarth",
        "Queen's Personal Advisor":" Conselheira de Confiança da Rainha",
        "The Rabbit Keeper":"A Criadora de Coelhos",
        "King Viserys III":"Rei Viserys III",
        "Prince":"Príncipe",
        "Lord of Dreadfort":"Senhor do Forte do Pavor",
        "Commander of the Second Sons":"Comandante dos Segundos Filhos",
        "Mistress":"Amante",
        "Lord of Storm's End":"Lorde de Ponta Tempestade",
        "Knight":"Sor",
        "King":"Rei",
        "The Bastard of Bolton":"O Bastardo de Bolton",
        "Queen Consort":"Rainha",
        "Lord Commander of the Knight's Watch":"Senhor Comandante da Patrulha da Noite",
        "High Septon":"Alto Septão",
        "Red Viper of Dorne":"A Serpente Vermelha de Dorne",
        "Melisandre of Asshai":"A Sacerdotisa Vermelha",
        "Faceless Men of Braavos":"Homens sem Rosto de Braavos",
        "Lord Paramount of Westerlands":"Lorde Protetor dos Oeste",
        "Paramour of Prince Oberyn Martell":"Amante do Príncipe Oberyn Martell",
        "Free Folk Warrior":"Líder dos Selvagens",
        "Lady of the Iron Islands":"Senhora das Ilhas de Ferro",
        "King of the iron Islands":"Rei das Ilhas de Ferro",
        "Servant of House Stark":"Criado da Casa Stark",
        "Grand Maester of the Seven Kingdoms":"Grande Meistre dos Sete Reinos",
        "Commander of the Unsullied":"Comandante Escolhido dos Imaculados",
        "Queen of Thorns":"Rainha dos Espinhos",
        "Former maester of the Citadel":"Antigo Meistre da Cidadela",
        "Lord of Highgarden":"Lorde do Jardim de Cima",


    };

    // Obter todas as chaves do objeto de traduções
    const translationTitles = Object.keys(translations);

    // Verificar se o título fornecido está presente nas chaves de tradução
    if (translationTitles.includes(title)) {
        return translations[title]; // Retornar a tradução correspondente
    } else {
        return title; // Se não houver tradução disponível, retorna o título original
    }
}

export function translateFamily(family) {
  const translations = {
    "House Targaryen": "Casa Targaryen",
    "House Tarly": "Casa Tarly",
    "House Stark": "Casa Stark",
    "House Baratheon": "Casa Baratheon",
    "House Lannister": "Casa Lannister",
    "House Greyjoy": "Casa Greyjoy",
    "House Clegane": "Casa Clegane",
    "House Baelish": "Casa Baelish",
    "House Seaworth": "Casa Seaworth",
    "Unknown": "Desconhecido",
    "House Tyrell": "Casa Tyrell",
    "None": "Nenhuma",
    
  };

  if (translations.hasOwnProperty(family)) {
    return translations[family];
  } else {
    return family;
  }
}

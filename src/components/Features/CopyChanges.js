const light = (plantIndex) => {
  switch (plantIndex["Light tolered"]) {
    case "Diffuse light ( Less than 5,300 lux / 500 fc)":
      return "I dont mind the diffused lighting";

    case "Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)":
      return "I quite like the a strong light";
    case "Full sun (+21,500 lux /+2000 fc )":
      return "Please I am fellow sunseeker, only full sunshine please";
    default:
      return "Surprise Me";
  }
};

const pruning = (plantIndex) => {
  switch (plantIndex["Pruning"]) {
    case "If needed":
      return "I'm chilled, only when you feel like I need it";
    case "Never":
      return "I'm super easy and I'll never need a trim";
    case "After blooming":
      return "Once I've flowered, it's always nice to have my ends trimmed a little";
    case "Fall":
      return "Once a year, around autumn is the time";
    default:
      return "I'll let you decide.";
  }
};

const bearing = (plantIndex) => {
  switch (plantIndex["Bearing"]) {
    case "Erect":
      return "Im upright";
    case "Clump":
      return "Some people say I'm a bit clumpy, but I like to find it endering";
    case "Arborescent":
      return "I have tree like structure";
    case "Creeping":
      return "Im a little bit of a creep";
    case "Rosette":
      return "I have a circular arrangement of leaves or of structures resembling leaves";
    case "Climbing":
      return "Im a bit of a climber";
    case "Bush-like":
      return "A little busty";
    case "Drooping":
      return "Some say I can be a bit droppy";
    default:
      return "null";
  }
};

const appeal = (plantIndex) => {
  switch (plantIndex["Appeal"]) {
    case "Robustness":
      return "For my robustnesss";
    case "Foliage":
      return "For my foliage";
    case "Flower":
      return "For my flower";
    case "Bearing":
      return "For my bearing";
    case "Color":
      return "For my colour";
    case "Style":
      return "For my style";
    case "Trunc":
      return "For me trunc";
    default:
      return "null";
  }
};

// Blooming season (183 results - 172 Nulls)

// (12) ['Winter / Spring', null, 'All year', 'Seasonal', 'Winter', 'Spring', 'Spring / Summer', 'Sporadic', 'Summer / Fall', 'Fall / Winter', 'Rarely', 'Fall']

const blooming = (plantIndex) => {
  switch (plantIndex["Blooming season"]) {
    case "Winter / Spring":
      return "Winter to Spring is when I really come into my own";
    case "All year":
      return "For you, I'll be glowing all year round";
    case "Seasonal":
      return "I'm bit of seasonal delight";
    case "Winter":
      return "Winter is when you'll catch me shine";
    case "Spring":
      return "Spring is 100% my season";
    case "Spring / Summer":
      return "All about that sunshine baby, from spring to";
    case "Sporadic":
      return "I'm a bit of wild card, I'll bloom on you when you least expect it";
    case "Summer / Fall":
      return "I'm all about those Indian Summer vibes, you'll catch me from late summer to autumn";
    case "Fall / Winter":
      return "For my robustnesss";
    case "Fall":
      return "For my robustnesss";
    case "Rarely":
      return "For my robustnesss";
      default:
        return "null";
  }
};

export { light, pruning, bearing, appeal, blooming };

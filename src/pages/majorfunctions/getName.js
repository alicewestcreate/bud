const getName = (plantIndex) => {
  const nameKeys = [
    "Common name",
    "Other names",
    "Latin name",
  ];
  let plantName = null;
  for (const key of nameKeys) {
    if (plantIndex[key] != null && typeof plantIndex[key] === "string") {
      plantName = plantIndex[key];
      break;
    } else if (
      Array.isArray(plantIndex[key]) &&
      typeof plantIndex[key][0] === "string"
    ) {
      plantName = plantIndex[key][0];
      break;
    }
  }
  if (plantName != null) {
    return plantName;
  }
  return plantIndex.Categories;
};


export default getName;

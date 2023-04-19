const filterPreferences = (plants, userPreferences) => {

  const { allProperties, allValues, allFeatures } = userPreferences;

  const matches = [];

  for (let i = 0; i < plants.length; i++) {
    const plantEntry = plants[i];

    plantEntry.score = 0;
    plantEntry.matchedOn = [];
    plantEntry.match = false;

    allProperties.forEach((property, index) => {
      if (allValues[index].includes(plantEntry[property])) { // allValues[index] is an array. 
        plantEntry.score++;
        plantEntry.matchedOn.push(allFeatures[index]);
        plantEntry.match = true;
      }
    });
    if (plantEntry.match === true) {
      matches.push(plantEntry);
    }
  }

  const sortedMatches = matches.sort((a,b) => b.score - a.score );

  console.log(sortedMatches);
  return sortedMatches;
};

export { filterPreferences };

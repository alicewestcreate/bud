const filterPreferences = (plants, allProperties, allValues, allFeatures ) => {



const properties = allProperties
const values = allValues
const features = allFeatures
      // FILTER EACH ITEM RETURNED IN DATA//
  // For each item matches, return true.
  // For each property matched, plus one to prioity points

  const matches = [];

  plants.forEach((entry) => {
    entry.priority = 0;
    entry.matchdOn = []
    entry.match = false;

    if (entry[properties[0]] === values[0]) {
      entry.priority += 1;
      entry.matchdOn.push(features[0])
      entry.match = true;
    }
    if (entry[properties[1]] === values[1]) {
      entry.priority += 1;
      entry.matchdOn.push(features[1])
      entry.match = true;
    }
    if (entry[properties[2]] === values[2]) {
      entry.priority += 1;
      entry.matchdOn.push(features[3])
      entry.match = true;
    }
    if (entry[properties[3]] === values[3]) {
      entry.priority += 1;
      entry.matchdOn.push(features[3])      
      entry.match = true;
    }
    if (entry[properties[4]] === values[4]) {
      entry.priority += 1;
      entry.matchdOn.push(features[4])
      entry.match = true;
    }
    // if the item is matched, push to matches array.
    if (entry.match === true) {
      matches.push(entry);
    } else {
      return;
    }
  });

  // This compares the value of two prioity points/
  // If one is higher than the other, it changes order.
  // Else it stay in place.
  function sortByPriority(a, b) {
    return b.priority - a.priority;
  }

  // Sort results by Priority and give the top 12.
  const sortedMatches = matches.sort(sortByPriority);
//   const slicedResults = sortedMatches.slice(0, 12);

//  console.log(sortedMatches);

 return sortedMatches



    // console.log(plants, collectedVariables);

}

export { filterPreferences }
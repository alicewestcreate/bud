import React, {useState} from "react";
import dummyInfo from "../data/dummyApi.json";
import plant from "../data/plants.json"
import ResultsCard from "./majorSections/ResultsCard";
import PageContainer from "../components/containers/PageContainer";

const Results = () => {

  let [resultIndex, setResultIndex] = useState(0)


  
//   let cateogory = plant.map((pla) => pla["Color of leaf"])
//   console.log(cateogory);

//   const uniqueCat = Array.from(new Set(cateogory))

//   console.log(uniqueCat);


// let count = 0;

// const filteredArr = cateogory.filter((item) => {
//   if (item === null) {
//     count++; // increment count if item is null
//     return false; // remove null item from filtered array
//   }
//   return true; // keep non-null item in filtered array
// });

// console.log(filteredArr); // [1, 3, 4, 5]
// console.log(count); // 3 (number of null items)

  





                            // let listOfValue = []
                              
                            //   plant.forEach((pla) => {
                            //     if(pla["Temperature min"] != null) {
                            //       listOfValue.push(pla["Temperature min"])
                            //     }
                            //   })

                            // console.log(listOfValue)

                            // let values = []

                            // listOfValue.forEach((obj) => {
                            //   values.push(obj["C"])
                            // })

                            // const uniqueCat = Array.from(new Set(values))

                            // console.log(uniqueCat.sort());

  // const uniqueCat = Array.from(new Set(obj["M"]));
  // console.log(uniqueCat);

  
// let cateogory = plant.map((pla) => pla["Height potential"])
// if (cateogory != null ) {
//   console.log(cateogory);
//   cateogory.forEach((obj) => {
//     const uniqueCat = Array.from(new Set(obj["M"]));
//     console.log(uniqueCat);
//   });

 

// }





  const storeInFavorites = () => {
    console.log("stored");
  }


  const showNextCard = (text) => {
    let addOne = resultIndex + 1;
    setResultIndex(addOne);
    if (text === "yes") {
      storeInFavorites()
    }

  }


  return (

    <PageContainer parent={"results"}>
    <ResultsCard dummyInfo = {dummyInfo} plantIndex = {plant[resultIndex]} showNextCard = {showNextCard}></ResultsCard>
    </PageContainer>
  );
};

export default Results;

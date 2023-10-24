//Utility logic
function isEmpty(testString) {
  return (testString.trim().length === 0);
}

//Business logic
function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}


function censor(passage) {
const textArray = passage.split(" ");
let finalArray = [];
textArray.forEach(function(word) {
  if (word.toLowerCase.includes("zoinks") || (word.toLowerCase.includes("muppeteer")) || (word.toLowerCase.includes("biffaroni")) || (word.toLowerCase.includes("loopdaloop"))) {
  finalArray.push("****");
  } else {
    finalArray.push(word);
  }
}

); 
return finalArray;
}

function wordSort(text) {
  if (isEmpty(text)) {
    return 0;
  }
  const textArray = text.split(" ");
  uniqueTextArray = new Set (textArray);
  let finalArray = [];
  let realFinalArray = []
  myMap = new Map();
  uniqueTextArray.forEach(function(word) {
    let count = 0;
    textArray.forEach(function(otherWord) {
      if (word === otherWord) {
        count++;
      }
      myMap.set (word + ":", count + " |");
    })
    myMap = new Map([...myMap.entries()].sort())
    finalArray = Array.from(myMap);
    realFinalArray = finalArray.reverse();
    console.log(finalArray);
  } 
);

console.log(finalArray);
stringFinalArray = realFinalArray.toString();
let commalessString = stringFinalArray.replace(/,/g, " ");
console.log(commalessString);
return commalessString;
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage)
  let wordSorted = wordSort(passage);
  document.getElementById("total-repitition").innerText = wordSorted
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

function boldPassage(word, text) {
  if ((isEmpty(text)) || (isEmpty(word))) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
  if (word === text) {
    const bold = document.createElement("strong");
    bold.append(element);
    p.append(bold);
  } else {
  p.append(element);
  }
  if (index !== (textArray.length - 1)) {
    p.append(" ");
  }
});
  return p;
}
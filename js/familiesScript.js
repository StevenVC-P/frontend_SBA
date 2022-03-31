const body = document.getElementById("table-body");
let innerBody;

const submit = document.getElementById("submit");

const familyName = document.getElementById("familyName");
const primaryContact = document.getElementById("primaryContact");
const childCount = document.getElementById("childCount");

let familyCollection = []

//main function
const addFamily = () => {
    console.log("fired")
    console.log(familyCollection.length)

    //checks the length of collection of families, if its 1 or greater it clears child elements to rebuild from fresh
    if (familyCollection.length >= 1) {
        innerBody.parentNode.removeChild(innerBody)
    }

    //creates inner body that can be cleared without destroying any other information when clearing
    innerBody=document.createElement("div")
    innerBody.classList.add("container")
    body.append(innerBody)

    //main object that forms each row of the table body
    const family = {
        familyName: familyName.value,
        primaryContact: primaryContact.value,
        childCount: childCount.value
    }

    //adds information from the from to the family collection
    familyCollection.push(family)
    console.log(familyCollection)

    //creates all the necessary elements to correctly display each familily's information
    familyCollection.forEach(function(family,index) {
        console.log(family.familyName)
        console.log("index" + index)
        let rowEl = document.createElement("tr")
        rowEl.classList.add("row")

        let familyNameEl = document.createElement("td")
        familyNameEl.classList.add("col")
        familyNameEl.appendChild(document.createTextNode(family.familyName))

        let primaryEl = document.createElement("td")
        primaryEl.classList.add("col")
        primaryEl.appendChild(document.createTextNode(family.primaryContact))

        let childCountEl = document.createElement("td")
        childCountEl.classList.add("col")
        childCountEl.appendChild(document.createTextNode(family.childCount))

        let buttonEl = document.createElement("button")
        buttonEl.classList.add("col")
        buttonEl.classList.add("btn")
        buttonEl.classList.add("btn-lg")
        buttonEl.classList.add("btn-danger")
        buttonEl.classList.add("btn-block")
        buttonEl.appendChild(document.createTextNode("Delete"))

        rowEl.append(familyNameEl)
        rowEl.append(primaryEl)
        rowEl.append(childCountEl)
        rowEl.append(buttonEl)

        innerBody.append(rowEl)
    })
}

//button fires off for adding a family
submit.addEventListener("click", function (e) {
    e.preventDefault();
    addFamily();
    console.log("Clicked");
  });
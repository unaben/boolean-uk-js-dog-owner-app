const bodyEl = document.querySelector("body");

function createDogsListItem(dogs) {
  for (let i = 0; i < data.length; i++) {
    const dogs = data[i];
    // console.log("Inside Dog's Data: ", dogs);

    const headerEl = document.querySelector("header");
    bodyEl.append(headerEl);

    const titleEl = document.querySelector("h1");
    titleEl.innerText = "";
    headerEl.append(titleEl);

    const ulEl = document.querySelector("ul");
    ulEl.className = "dogs-list";
    headerEl.append(ulEl);

    const listEl = document.createElement("li");
    listEl.className = "dogs-list__button dogs-list__button--add";

    // listEl.innerText = dogs.name;

    const buttonEl = document.createElement("button");
    buttonEl.innerText = dogs.name;
    listEl.append(buttonEl);

    // console.log("Dogs Name: ", dogs.name);
    ulEl.append(listEl);
  }
  return;
}
const dogsOwnerAppData = createDogsListItem(data);
// console.log("inside dogsOnwerAppData: ", dogsOwnerAppData);

const mainEl = document.querySelector("main");
bodyEl.append(mainEl);

function createCardElement(dog) {  
    const sectionEl = document.querySelector("section");
    sectionEl.className = "main__dog-section";
    mainEl.append(sectionEl);

    const h2El = document.querySelector("h2");
    h2El.innerText = dog.name;

    const imageEl = document.createElement("img");
    const imageSrc = dog.image;
    // console.log("Dogs Images: ", image);
    imageEl.setAttribute("src", imageSrc);
    sectionEl.append(imageEl);

    const divEl = document.createElement("div");
    divEl.className = "main__dog-section__btn";
    sectionEl.append(divEl);

    const h3El = document.createElement("h3");
    h3El.innerText = "Bio";
    divEl.append(h3El);

    const pEl = document.createElement("p");
    const bio = dog.bio;
    pEl.innerText = bio;
    divEl.append(pEl);

    const buttonEl = document.createElement("button");  
  return;
}
const dogsOnlineCard = createCardElement(data);
// console.log("Inside Card Online: ", dogsOnlineCard);

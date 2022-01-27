  const dogsListEl = document.querySelector(".dogs-list");
  const mainSectionEl = document.querySelector(".main__dog-section");


  function renderPlusButton() {
    const listItemEl = document.createElement("li");
    listItemEl.className = "dogs-list__button dogs-list__button--add";
    listItemEl.innerText = "+";
  
    dogsListEl.append(listItemEl);
  }
 
  
  function renderDogsList(dogs) {
    console.log("Inside renderDogsList: ", dogs);
  
    for (let i = 0; i < dogs.length; i++) {
      const dog = dogs[i];
      const name = dog.name;
  
      const listItemEl = document.createElement("li");
      listItemEl.className = "dogs-list__button";
  
      listItemEl.innerText = name;  
     
      listItemEl.addEventListener("click", () => {
        console.log("OnClick inside renderDogsList: ", dog);
  
        renderMainCard(dog);
      });
  
      console.log(listItemEl);
  
      dogsListEl.append(listItemEl);
    }
  }
  
  renderDogsList(data);
  
  function renderMainCard(dog) {
    mainSectionEl.innerHTML = ""
    
    const h2El = document.createElement("h2")
     h2El.innerText = dog.name
     mainSectionEl.append(h2El)
    
     const imageEl = document.createElement("img")
     imageEl.setAttribute("height", 300)
     imageEl.setAttribute("width", 400)
        const imageSrc = dog.image
        imageEl.src = imageSrc
        mainSectionEl.append(imageEl)

  }

  function renderBioSection(bio) {
    console.log("Inside renderBioSection: ", bio);

        const containerEl = document.createElement("div")
        containerEl.className = "main__dog-section__desc"
      mainSectionEl.append(containerEl)
      
        const headingEl = document.createElement("h3")
        headingEl.innerText = "Bio"
        containerEl.append(headingEl)
      
        const paragraphEl = document.createElement("p")
        paragraphEl.innerText = dog.bio
        containerEl.append(paragraphEl)
    
        return containerEl
    }  

  function renderBehaviourSection(behaviour) {
    console.log("Inside renderBehaviourSection: ", behaviour);
  
    const containerEl = document.createElement("div");
    containerEl.className = "main__dog-section__btn";
  
    return containerEl;
  }

  const addDogButton = document.querySelector(".dogs-list__button--add");

// 2.0 listenToPlusButton() (HARD)
// - An event listener for "click"
// - call renderCreateDogForm

function listenToPlusButton() {
  
  addDogButton.addEventListener("click", () => {
    console.log("Plus button clicked!");

    renderCreateDogForm();
  });
}

listenToPlusButton();

// 3.0 renderCreateDogForm()
// - create <h2>
// - create <form>
// -- className = "form"
// - create label and input for:
// -- name
// -- image
// -- bio
// - create submit button
// - an event listener for "submit" (HARD)

function renderCreateDogForm() {

  mainSectionEl.innerHTML = "";

  const headingEl = document.createElement("h2");
  headingEl.innerText = "Add a New Dog";

  mainSectionEl.append(headingEl);

  const formEl = document.createElement("form");
  formEl.className = "form";

  const nameLabelEl = document.createElement("label");
  nameLabelEl.setAttribute("for", "name");
  nameLabelEl.innerText = "Dog's Name";

  formEl.append(nameLabelEl);

  const nameInputEl = document.createElement("input");
  nameInputEl.setAttribute("type", "text");
  nameInputEl.id = "name";
  nameInputEl.name = "name";

  formEl.append(nameInputEl);

  console.log(mainSectionEl, formEl);

  const imageLabelEl = document.createElement("label");
  imageLabelEl.setAttribute("for", "image");
  imageLabelEl.innerText = "Dog's Image";

  formEl.append(imageLabelEl);

  const imageInputEl = document.createElement("input");
  imageInputEl.setAttribute("type", "url");
  imageInputEl.id = "image";
  imageInputEl.name = "image";

  formEl.append(imageInputEl);

  const bioLabelEl = document.createElement("label");
  bioLabelEl.setAttribute("for", "bio");
  bioLabelEl.innerText = "Dog's Bio";

  formEl.append(bioLabelEl);

  const bioTextareaEl = document.createElement("textarea");
  bioTextareaEl.setAttribute("rows", "5");
  bioTextareaEl.id = "bio";
  bioTextareaEl.name = "bio";

  formEl.append(bioTextareaEl);

  const submitInputEl = document.createElement("input");
  submitInputEl.setAttribute("type", "submit");
  submitInputEl.id = "submit";
  submitInputEl.className = "form__button";
  submitInputEl.name = "submit";
  submitInputEl.value = "Let's add a dog!";

  formEl.append(submitInputEl);

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = formEl.name;
    const bioInput = formEl.bio;
    const imageInput = formEl.image;

    const newDog = {
      id: data.length + 1,
      name: nameInput.value,
      bio: bioInput.value,
      isGoodDog: true,
      image: imageInput.value
    };

    data.push(newDog);

    console.log(data);

    renderDogsList(data);
    renderMainCard(newDog);

    formEl.reset();
  });

  mainSectionEl.append(formEl);
}

// Just to test in isolation
renderCreateDogForm();
  
    // function renderMainCard(dog) {
  //   console.log("Inside renderMainCard: ", dog);
  
  //   mainSectionEl.innerHTML = "";
  
  //   const headingEl = document.createElement("h2");
  //   headingEl.innerText = dog.name;
  
  //   mainSectionEl.append(headingEl);
  
  //   const imageEl = document.createElement("img");
  //   imageEl.setAttribute("height", 300);
  //   imageEl.setAttribute("width", 400);
  //   imageEl.src = dog.image;
  
  //   mainSectionEl.append(imageEl);
  //   // renderBioSection(data)
  //   const containerEl = document.createElement("div");
  //   containerEl.className = "main__dog-section__desc";

  //   mainSectionEl.append(containerEl)
    
  //   const headingEl = document.createElement("h3");
  //   headingEl.innerText = "Bio";
  
  //   containerEl.append(headingEl);
  
  //   const paragraphEl = document.createElement("p");
  //   paragraphEl.innerText = bio.bio;
  
  //   containerEl.append(paragraphEl);
  // }
  
  
  // function renderBioSection(bio) {
  //   console.log("Inside renderBioSection: ", bio);
  
    // const containerEl = document.createElement("div");
    // containerEl.className = "main__dog-section__desc";

    // mainSectionEl.append(containerEl)

    // const headingEl = document.createElement("h3");
    // headingEl.innerText = "Bio";
  
    // containerEl.append(headingEl);
  
    // const paragraphEl = document.createElement("p");
    // paragraphEl.innerText = bio.bio;
  
    // containerEl.append(paragraphEl);
  
  //   return containerEl;
  // }
  
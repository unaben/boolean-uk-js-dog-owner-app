  const dogsListEl = document.querySelector(".dogs-list");
  const mainSectionEl = document.querySelector(".main__dog-section");
 
  
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
    console.log("Inside renderMainCard: ", dog);
  
    mainSectionEl.innerHTML = "";
  
    const headingEl = document.createElement("h2");
    headingEl.innerText = dog.name;
  
    mainSectionEl.append(headingEl);
  
    const imageEl = document.createElement("img");
    imageEl.setAttribute("height", 300);
    imageEl.setAttribute("width", 400);
    imageEl.src = dog.image;
  
    mainSectionEl.append(imageEl);
  }
  
  
  function renderBioSection(bio) {
    console.log("Inside renderBioSection: ", bio);
  
    const containerEl = document.createElement("div");
    containerEl.className = "main__dog-section__desc";
  
    const headingEl = document.createElement("h3");
    headingEl.innerText = "Bio";
  
    containerEl.append(headingEl);
  
    const paragraphEl = document.createElement("p");
    paragraphEl.innerText = bio;
  
    containerEl.append(paragraphEl);
  
    return containerEl;
  }
  
  function renderBehaviourSection(behaviour) {
    console.log("Inside renderBehaviourSection: ", behaviour);
  
    const containerEl = document.createElement("div");
    containerEl.className = "main__dog-section__btn";
  
    return containerEl;
  }
  
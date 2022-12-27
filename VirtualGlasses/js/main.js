let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
  ];
  
  let loadGlasses = () => {
    let content = "";
    for (const value in dataGlasses) {
      content += `
          <div class="col-4">
          <img src="${dataGlasses[value].src}" class="img-fluid" onclick="changeImg(${value})">
          </div>`;
    }
    document.querySelector("#vglassesList").innerHTML = content;
  };
  loadGlasses();
  
  let changeImg = (id) => {
    let { name, virtualImg, brand, color, price, description } = dataGlasses[id]
    document.querySelector('.vglasses__info').style.display = 'block'
    document.querySelector('#avatar').innerHTML = `<img src="${virtualImg}" alt="" />`
    document.querySelector('#glassesInfo').innerHTML = `<div class="title">
   <h6>${name} - ${brand} (${color})</h6>
   </div>
   <div class="body-Glass">
   <div class="price">
   <span>$ ${price}</span>
   </div>
   </div>
   <div class="footer-Glass">
   <p class="mb-0">${description}</p>
   </div>`
  }
  
  window.changeImg = changeImg
  
  let removeGlasses = (value) => {
    if (document.querySelector("#avatar").innerHTML == "") {
        alert("Please wear glasses")
    }else {
      if (value) {
        document.querySelector("#avatar img").style.display = "block";
        return true;
      }else{
        document.querySelector("#avatar img").style.display = "none";
        return false;
      }
    }
  }
  
  window.removeGlasses = removeGlasses
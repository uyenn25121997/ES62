// import Glass from "./Glass.js";

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


// let glassList = [];

// for(let i = 0; i < dataGlasses.length; i++){
//     let glass = new Glass();
//     glass = dataGlasses[i];
//     glassList.push(glass)
// }
// console.log(glassList);
// console.log(dataGlasses);


const showGlass = (value) => {
    let listGlassHTML = "";
    // for(let i = 0; i < value.length; i++){
    //     let itemGlassHTML = 
    //     `<div class="col-4">
    //         <img src="${value[i].src}" alt="">
    //     </div>`;
    //     listGlassHTML += itemGlassHTML;
    // }
    // value.map(item => {
    //     let itemGlassHTML = 
    //     `<div class="col-4">
    //         <a onclick="showLogHTML('${item.id}', '${item.brand}')" ><img src="${item.src}" alt=""></a>
    //     </div>`;
    //     listGlassHTML += itemGlassHTML;
    // });

    value.map(item => {
        let itemGlassHTML =
            `<div class="col-4">
            <a onclick="showLogHTML('${item.id}')" ><img src="${item.src}" alt=""></a>
        </div>`;
        listGlassHTML += itemGlassHTML;
    });


    $("#vglassesList").html(listGlassHTML);

}

showGlass(dataGlasses);

// showLogHTML = (id, brand) => {
//     let avatarGlass = `<img src="./img/${id.replace("G", "v")}.png" alt="">`;
//     let infoGlass = `<p>${brand}</p>
//                     <p>sdfsf</p>
//                     <p>sdfsf</p>
//                     <p>sdfsf</p>
//                     <p>sdfsf</p>`;
//     $("#avatar").html(avatarGlass);
//     $("#glassesInfo").html(infoGlass);
//     $("#glassesInfo").css("display", "block");

// }

showLogHTML = (id) => {
    for (const item of dataGlasses) {
        if (item.id == id) {

            // Hiển thị kính
            let avatarGlass = `<img  id="glassSelected" src="${item.virtualImg}" alt="">`;
            

            // hiển thị thông tin kính
            let infoGlass = `<span>${item.name} - ${item.brand} (${item.color})</span> <br>
                            <h4>$${item.price}</h4>
                            <p>${item.description}</p>`

        
            $("#avatar").html(avatarGlass);
            $("#glassesInfo").html(infoGlass);
            $("#glassesInfo").css("display", "block");
            
            break;
        }
    }
}

// hàm before after 
removeGlasses = (displayStyle) => {
    $("#glassSelected").css("display", displayStyle);
    $("#glassesInfo").css("display", displayStyle);
}


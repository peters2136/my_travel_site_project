/****************************************************************
 *                                                              *
 *                                                              *
 *                      INDEX - PICTURE ARRAY                   *
 *                                                              *
 *                                                              *
 ***************************************************************/



//see example: https://repl.it/@htovey/createElementTable
// note - event listeners have to be appended when you create the element


var mainSection = {};
var newTbl = {};
var newTblRow = {};
var newTblCol = {};
var newTblP = {};
var newImg = {};
var photoArrayUrls= [];
var photoArrayDesc = [];
var i = 0;
var j = 0;

arPhotoUrls = [
    "simon-migaj-421505-unsplash.jpg",
    "rebe-adelaida-293711-unsplash.jpg",
    "jamie-fenn-276420-unsplash.jpg",
    "ishan-seefromthesky-192925-unsplash.jpg",
    "luca-micheli-422053-unsplash.jpg",
    "linh-nguyen-145766-unsplash.jpg"
]

arPhotoDesc = [
    "Königssee, Schönau am Königssee, Germany",
    "Photo of gondolas on body of water between buildings in Seville",
    "Ricefields tegallang, Indonesia",
    "North Central Province, Maldives",
    "London, United Kingdom",
    "Manarola, Italy"
]

//create table
mainSection = document.getElementById("index-photo-gallery");
newTbl = document.createElement("table");

//add new table row
newTblRow = document.createElement("tr");

//add first header column to new table row
newTblP = document.createElement("p");
newTblP.className = "photo-gallery-content";
newTblP.innerHTML = "Image";
newTblCol = document.createElement("th");
newTblCol.appendChild(newTblP);
newTblRow.appendChild(newTblCol);

// //add first header column to new table row
newTblP = document.createElement("p");
newTblP.className = "photo-gallery-content";
newTblP.innerHTML = "Description";
newTblCol = document.createElement("th");
newTblCol.appendChild(newTblP);
newTblRow.appendChild(newTblCol);

//Append new row to new table
newTbl.appendChild(newTblRow);


//add image and description rows
for (i = 0; i < 6; i++) {
    newTblRow = document.createElement("tr");
    
     // add image and properties
    newTblCol = document.createElement("td");
    newImg = document.createElement("img");
    newImg.src = "images/gallery/" + arPhotoUrls[i];
    newImg.className = "photo-gallery-content";
    newImg.alt = "Alt Text Goes Here";
    newTblCol.appendChild(newImg);
    newTblRow.appendChild(newTblCol);
    
    // //add description    
    newTblCol = document.createElement("td");
    newTblP = document.createElement("p");
    newTblP.className = "photo-gallery-content";
    newTblP.innerHTML = "description";
    newTblCol.appendChild(newTblP);
    newTblRow.appendChild(newTblCol);

    //append table row to table
    newTbl.appendChild(newTblRow);
}

console.log(newTbl);

mainSection.appendChild(newTbl);





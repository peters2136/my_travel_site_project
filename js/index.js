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
var arPhotoPath= [];
var arPhotoDesc = [];
var arPhotoURLs = [];
var i = 0;
var j = 0;


arPhotoPath = [
    "simon-migaj-421505-unsplash.jpg",
    "rebe-adelaida-293711-unsplash.jpg",
    "jamie-fenn-276420-unsplash.jpg",
    "ishan-seefromthesky-192925-unsplash.jpg",
    "luca-micheli-422053-unsplash.jpg",
    "linh-nguyen-145766-unsplash.jpg"
];

arPhotoDesc = [
    "Königssee, Schönau am Königssee, Germany",
    "Photo of gondolas on body of water between buildings in Seville",
    "Ricefields tegallang, Indonesia",
    "North Central Province, Maldives",
    "London, United Kingdom",
    "Manarola, Italy"
];

arPhotoURLs = [
    "https://unsplash.com/photos/Yui5vfKHuzs",
    "https://unsplash.com/photos/zunQwMy5B6M",
    "https://unsplash.com/photos/WdQuEEJe-O0",
    "https://unsplash.com/photos/KgCbvOWYuU0",
    "https://unsplash.com/photos/oyUXVzq-7Po",
    "https://unsplash.com/photos/DNE9iZ1Kqzk"
];

//create new table
mainSection = document.getElementById("index-photo-gallery");
newTbl = document.createElement("table");
newTbl.style.width = "80%";
newTbl.style.margin = "auto";
newTbl.style.border = "thin solid black";


//add new table row
newTblRow = document.createElement("tr");

//add first header column to new table row
newTblP = document.createElement("p");
newTblP.className = "photo-gallery-content";
newTblP.innerHTML = "Image";

newTblCol = document.createElement("th");
newTblCol.style.width = "40%";
newTblCol.appendChild(newTblP);

newTblRow.appendChild(newTblCol);

// //add first header column to new table row
newTblP = document.createElement("p");
newTblP.className = "photo-gallery-content";
newTblP.innerHTML = "Description";

newTblCol = document.createElement("th");
newTblCol.style.width = "60%";
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
    newImg.src = "images/gallery/" + arPhotoPath[i];
    newImg.className = "photo-gallery-content";
    newImg.alt = "Alt Text Goes Here";
    newImg.style.maxWidth = "100%";

    //add event listener to open arPhotoURL href in new window, then
    //automatically close the window using timing set for 3 seconds
    fnOnClickOpenLinkInNewWindow(arPhotoURLs[i]);

    newTblCol.appendChild(newImg);
    newTblRow.appendChild(newTblCol);
    
    // //add description    
    newTblCol = document.createElement("td");
    
    newTblP = document.createElement("p");
    newTblP.className = "photo-gallery-content";
    newTblP.innerHTML = arPhotoDesc[i];
    newTblP.style.textAlign = "center";
    newTblP.style.maxWidth = "100%";
    
    newTblCol.appendChild(newTblP);
    newTblRow.appendChild(newTblCol);

    //append table row to table
    newTbl.appendChild(newTblRow);
}

console.log(newTbl);

mainSection.appendChild(newTbl);

function fnOnClickOpenLinkInNewWindow(strURL) {
    newImg.addEventListener("click",function(event){
        //open the URL in new window
        var wndwTemp = window.open(strURL);

        //start one-shot timer
        var timerID = setTimeout(fnCloseWindowLink,3000);
        
        //function to close the window when timer is complete
        function fnCloseWindowLink(){
            wndwTemp.close();
        }  
    })
}
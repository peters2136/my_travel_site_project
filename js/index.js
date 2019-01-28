/****************************************************************
 *                                                              *
 *                                                              *
 *                      INDEX - PICTURE ARRAY                   *
 *                                                              *
 *                                                              *
 ***************************************************************/

//When page loads, a table is generated with photos, descriptions
//stored within the function arrays (arPhotoPath, arPhotoDesc, arPhotoURLs). 
//For each image, a function is called  to add event listener 
//for each photo image that opens associated arPhotoURL link in new 
//window, then automatically closes the window using timing set for 3 seconds

var mainSection = {};
var newTbl = {};
var newTblRow = {};
var newTblCol = {};
var newTblP = {};
var newImg = {};
var arPhotoPath= [];  //file paths of photos
var arPhotoDesc = []; //descriptions of photos
var arPhotoURLs = []; //URLs for photos
var i = 0;
var j = 0;

//populate array for image files
arPhotoPath = [
    "simon-migaj-421505-unsplash.jpg",
    "rebe-adelaida-293711-unsplash.jpg",
    "jamie-fenn-276420-unsplash.jpg",
    "ishan-seefromthesky-192925-unsplash.jpg",
    "luca-micheli-422053-unsplash.jpg",
    "linh-nguyen-145766-unsplash.jpg"
];

//populate array for image descriptions
arPhotoDesc = [
    "Königssee, Schönau am Königssee, Germany",
    "Photo of gondolas on body of water between buildings in Seville",
    "Ricefields tegallang, Indonesia",
    "North Central Province, Maldives",
    "London, United Kingdom",
    "Manarola, Italy"
];

//populate array for image URLs that will load when image is clicked
arPhotoURLs = [
    "https://unsplash.com/photos/Yui5vfKHuzs",
    "https://unsplash.com/photos/zunQwMy5B6M",
    "https://unsplash.com/photos/WdQuEEJe-O0",
    "https://unsplash.com/photos/KgCbvOWYuU0",
    "https://unsplash.com/photos/oyUXVzq-7Po",
    "https://unsplash.com/photos/DNE9iZ1Kqzk"
];

//create new table to display images
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

    //call function to add event listener for each photo image that
    //opens associated arPhotoURL link in new window, then
    //automatically closes the window using timing set for 3 seconds
    fnOnClickOpenLinkInNewWindow(arPhotoURLs[i],newImg);

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

/******************************************END***************************************/

/****************************************************************
 *                                                              *
 *                                                              *
 *                      IMAGE EVENT LISTENER                    *
 *                                                              *
 * When image (objImg) in the image gallery is clicked, a new   *
 * tab with the URL (strURL) specified for the image object     *
 * will open up for 3 seconds, then close automatically.        *
 *                                                              *                   
 *                                                              *
 *                                                              *
 ***************************************************************/

function fnOnClickOpenLinkInNewWindow(strURL, objImg) {
    objImg.addEventListener("click",function(event){
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
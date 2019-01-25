
var currentPage = window.location.pathname;
var currentURL = window.location.currentURL;
console.log(currentPage);
console.log(currentURL);

//for all pages
/* load: - header
         - nav menu
         - footer

// if index.html
         - load photo gallery


// if registration.html
         - 







/****************************************************************
 *                                                              *
 *                                                              *
 *                      HEADER BLOCK                            *
 *                                                              *
 *                                                              *
 ***************************************************************/
// var headerElement = document.getElementsByTagName("header")[0];
// var headerArrayText = [
//     ["index.html", "Welcome Travel Experts"]
//     ["contact.html", "Contact Us"]
//     ["register.html", "Register Now!"]
// ]

// var headerH1 = document.createElement("h1");
// var headerText = document.createTextNode()
// var strLogoSource = "images/logo.jpg";
// var headerImg = document.createElement("img");
// headerImg.src = 



/****************************************************************
 *                                                              *
 *                                                              *
 *                      NAV BLOCK                               *
 *                                                              *
 *                                                              *
 ***************************************************************/

// Generates the elements for the navigation bar on each page

var menuArray = [
    ["Home", "index.html"],
    ["Contact","contact.html"],
    ["Register", "register.html"]
]

var navElement = document.getElementsByTagName("nav")[0];
var navList = document.createElement("ul");


for (var i = 0; i < menuArray.length; i++) {
    var navListItem = document.createElement("li");  
    var navA = document.createElement("a")
    navA.innerHTML = menuArray[i][0];
    navA.href = menuArray[i][1];
    navListItem.appendChild(navA);
    navList.appendChild(navListItem); 
}
navElement.appendChild(navList);




/****************************************************************
 *                                                              *
 *                                                              *
 *                      FOOTER BLOCK                            *
 *                                                              *
 *                                                              *
 ***************************************************************/

 // This code generates the elements and content for the footer

var footerElement = document.getElementsByTagName("footer")[0];
var footerP = document.createElement("p");
footerP.className = "footer"
footerP.innerHTML = "&copy; TravelCo Inc., 2019"

footerElement.appendChild(footerP);








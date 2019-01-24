/****************************************************************
 *                                                              *
 *                                                              *
 *                      HEADER BLOCK                            *
 *                                                              *
 *                                                              *
 ***************************************************************/
var headerElement = document.getElementsByTagName("header")[0];
var headerArrayText = [
    ["index.html", "Welcome Travel Experts"]
    ["contact.html", "Contact Us"]
    ["register.html", "Register Now!"]
]

var headerH1 = document.createElement("h1");
// var headerText = document.createTextNode()
var strLogoSource = "images/logo.jpg";
var headerImg = document.createElement("img");
headerImg.src = 



/****************************************************************
 *                                                              *
 *                                                              *
 *                      NAV BLOCK                               *
 *                                                              *
 *                                                              *
 ***************************************************************/

var menuArray = [
    ["Home", "index.html"],
    ["Contact","contact.html"],
    ["Register", "register.html"]
]

var navElement = document.getElementsByTagName("nav")[0];
var navList = document.createElement("ul");
navList.className = "navList";


for (var i = 0; i < menuArray.length; i++) {
    var navListItem = document.createElement("li");  
    navListItem.className = "navListItem";
    var navA = document.createElement("a")
    navA.innerHTML = menuArray[i][0];
    navA.href = menuArray[i][1];
    navListItem.appendChild(navA);
    navList.appendChild(navListItem); 
}
console.log(navList);
navElement.appendChild(navList);

//placeholder - addstyles -- how do I do this?????





/****************************************************************
 *                                                              *
 *                                                              *
 *                      FOOTER BLOCK                            *
 *                                                              *
 *                                                              *
 ***************************************************************/

var footerElement = document.getElementsByTagName("footer")[0];
var footerP = document.createElement("p");
footerP.className = "footer"
footerP.innerHTML = "&copy; TravelCo Inc., 2019"

footerElement.appendChild(footerP);











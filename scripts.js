// Build header



//Create nav tag content
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

//placeholder - addstyles


//Build footer


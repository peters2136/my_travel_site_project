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
console.log(navList);
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


/****************************************************************
 *                                                              *
 *                                                              *
 *                 REGISTRATION FORM                            *
 *                                                              *
 *                                                              *
 ***************************************************************/

// Prompt user to confirm they want to submit or reset the registration form

// var regForm = document.getElementById("register-form");
var btnSubmit = document.getElementById("regSubmit");
console.log(btnSubmit)
var btnReset = document.getElementById("regReset");
console.log(btnReset)

btnSubmit.addEventListener('click',function(event){

    //prevent default
    event.preventDefault();
    console.log("step 1")

    var userConfirm = confirm("Confirm - do you want to submit this form?");
    if (userConfirm) {
        console.log("confirm true")
        document.register-form.submit(); // submits the form 
    }
    console.log("step 2");
})




/****************************************************************
 *                                                              *
 *                                                              *
 *                      INDEX - PICTURE ARRAY                   *
 *                                                              *
 *                                                              *
 ***************************************************************/

// var photoArray = [
//     ["url",description],
//     ["url",description],
//     ["url",description],
//     ["url",description],
//     ["url",description],
//     ["url",description],
// ]


//see example: https://repl.it/@htovey/createElementTable
// note - event listeners have to be appended when you create the element
//create table
// var mainContent = getElementsByTagName("main")[0];
// var newTable = document.createElement("table");
// var newTableRow = document.createElement("tr");
// var newTblHeader1 = document.createElement("th");
// var newTblHeader2 = document.createElement("th");

//create and append table header


//create and append picture deatil row

// mainContent.appendChild(newTable)




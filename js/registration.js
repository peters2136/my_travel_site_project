/****************************************************************
 *                                                              *
 *                                                              *
 *                 REGISTRATION FORM                            *
 *                                                              *
 *                                                              *
 ***************************************************************/

// Prompt user to confirm they want to submit or reset the registration form


var btnSubmit = document.getElementById("regSubmit");
var btnReset = document.getElementById("regReset");

// Submit button confirmation
// btnSubmit.addEventListener('click',function(event){
//     event.preventDefault();    //prevent default
//     var userConfirm = confirm("Confirm - do you want to submit this form?");
//     if (userConfirm) {
//         document.infoForm.submit();
//     }
// })

// Reset button confirmation
btnReset.addEventListener('click',function(event){
    event.preventDefault();    //prevent default
    var userConfirm = confirm("Confirm - do you want to reset this form?");
    if (userConfirm) {
        document.infoForm.reset();
    }
})

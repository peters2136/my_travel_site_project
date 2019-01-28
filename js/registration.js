/****************************************************************
 *                                                              *
 *                                                              *
 *                 REGISTRATION FORM                            *
 *                                                              *
 *                                                              *
 ***************************************************************/

var ctrlCollection = {};
var i = 0;
var cntlCurrent = {};
var pInstruction= {};
var btnSubmit = {};    
var btnReset = {};

//set event listener on submit button to call form validation function
//(fnSubmit) when clicked
btnSubmit = document.getElementById("regSubmit");
btnSubmit.addEventListener('click',fnValidate);


//set event listener on reset button to call custom function (fnReset) 
// that prompts user confirmation when clicked
btnReset = document.getElementById("regReset");
btnReset.addEventListener('click',fnReset);
    

//When user sets focus on an input control, evaluate if a "hidden" instruction <p> element exists for
//for that input control.  If an instruction <p> element exists, show the <p> element while the user
//has focus on that control, and hide the instruction when the user leaves the control (blur event)
//This function assumes the instruction <p> tag has an id using the following convention:
//id="controlName" + "Instruct" (i.e. instruction for custName input control would be id="custNameInstruct" 

ctrlCollection = document.getElementsByTagName("input");
for (let i = 0; i < ctrlCollection.length; i++){
    pInstruction = document.getElementById(ctrlCollection[i].name + "Instruct");
    if (pInstruction) {   // check if p instruction element exists with name 
        ctrlCollection[i].addEventListener("focus",function(event){
            pInstruction = document.getElementById(ctrlCollection[i].name + "Instruct");
            pInstruction.style.display = "block";
        })
        ctrlCollection[i].addEventListener("blur",function(event){
            pInstruction = document.getElementById(ctrlCollection[i].name + "Instruct");
            pInstruction.style.display = "none";
        })
    }    
}


//**********************************END ******************************************************/


//********************************************************************* //
//                                                                      //
//                      Form Rest Function                              //
//                                                                      //
// User is prompted to confirm reset before it occurrs.                 //
//                                                                      //
//**********************************************************************//

function fnReset(event) {
    event.preventDefault();    //override default reset action
    var userConfirm = confirm("Confirm - do you want to reset this form?");
    if (userConfirm) {
        document.infoForm.reset();
        //reset field style to default
    }
}

//**********************************END ******************************************************/

//********************************************************************* //
//                                                                      //
//                      Form Submit & Validation Function               //
//                                                                      //
// This function validates the user form, then prompts the              //
// user to confirm they want to submit registration form if all fields  //
// are completed correctly (assumes only text and email fields on       //
// the form. Fields not completed correctly are                         //
// highlighted and a message is displayed at the bottom of the form.    //
// If form is valid, user is prompted to confirm submission before      //
// the submit action occurs.                                            //
//                                                                      //
//**********************************************************************//

function fnValidate(event){
    var objFormControl = {};
    var objFormControlDesc = {};
    var userConfirm = {};
    var blnFormValid = true;
    var blnFormCtrlValid = true;
    var arFieldErrors = [];
    var regEx = new RegExp("");
    var j = 0;
    var strError = ""
    var objFormError = {};

    // reset error message if one exists from previous submit attempt
    objFormError = document.getElementById("formError");
    objFormError.innerHTML = strError;
    objFormError.display = "none";

    //prevent default submit action
    event.preventDefault();

    // start for loop to validate text and email input controls**  //
    j = 0;
    objFormControl = document.getElementsByTagName("input");
    for (j = 0; j < objFormControl.length; j++) {
        blnFormCtrlValid = true;  
        if (objFormControl[j].type == "text" || objFormControl[j].type == "email") {
            if (!objFormControl[j].pattern) {
                // element does not have pattern specified, so validate that control is not empty
                if (objFormControl[j].value === "") {
                    blnFormValid = false;
                    blnFormCtrlValid = false;
                }
            } else {
             // element has pattern specified - get the pattern and test control input
                regEx = RegExp(objFormControl[j].pattern);
                blnFormCtrlValid = regEx.test(objFormControl[j].value);
                if (!blnFormCtrlValid){
                    blnFormValid = false;
                }
            }   

            // check outcome of control validation - if false, add the 
            // label (innerHTML) value of the control to the arFieldErrors array 
            if (!blnFormCtrlValid) {
                // get label name for control and populate it into array
                objFormControlDesc = document.getElementById(objFormControl[j].name + "Label");
                arFieldErrors.push(objFormControlDesc.innerHTML);
            }
        }
    }

    //test is form is valid for submission.
    //If false, create and display error message at bottom of page.
    //If true, prompt user to confirm they want to submit the form.  If user confirms, submit form.
    
    if (!blnFormValid){
        j = 0
        var strError = "There are errors with your registration form.<br>Please check the following fields to ensure they are completed correctly:<br>"
        //enumerate through error array and add items to error string
        for (j = 0; j < arFieldErrors.length; j++){
            strError += arFieldErrors[j] + "<br>";
        }
        //set form error element and display as inline
        objFormError = document.getElementById("formError");
        objFormError.innerHTML = strError;
        objFormError.style.display = "inline";
    } else {
        //if all controls are valid, prompt user to confirm form submission
        userConfirm = confirm("Confirm - do you want to submit this form?");
        if (userConfirm) {
            document.infoForm.submit();
        }
    }   
}

//**********************************END ******************************************************/















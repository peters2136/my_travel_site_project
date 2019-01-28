/****************************************************************
 *                                                              *
 *                                                              *
 *                 REGISTRATION FORM                            *
 *                                                              *
 *                                                              *
 ***************************************************************/


//call functions when registration page loads

//declare all variables used in function
var btnSubmit = {};    

btnSubmit = document.getElementById("regSubmit");
btnSubmit.addEventListener('click',fnValidate);


function fnValidate(event){
    var objFormControl = {};
    var objFormControlDesc = {};
    var userConfirm = {};
    var blnFormValid = true;
    var blnFormCtrlValid = true;
    var arFieldErrors = [];
    var strText = "";
    var regEx = new RegExp("");
    var i = 0;
    var strError = ""
    var objFormError = {};

    // reset error message if one exists from previous submit attempt
    objFormError = document.getElementById("formError");
    objFormError.innerHTML = strError;
    objFormError.display = "none";

    //prevent default submit action
    event.preventDefault();

    // start for loop to validate text and email input controls***************************************  //
    i = 0;
    objFormControl = document.getElementsByTagName("input");
    for (i = 0; i < objFormControl.length; i++) {
        blnFormCtrlValid = true;  
        if (objFormControl[i].type == "text" || objFormControl[i].type == "email") {
            
            if (!objFormControl[i].pattern) {
                // element does not have pattern specified, so validate that control is not empty
                console.log(objFormControl[i].value);
                if (objFormControl[i].value === "") {
                    blnFormValid = false;
                    blnFormCtrlValid = false;
                }
            } 
            else {
             // element has pattern specified - get the pattern and test control input
                console.log(objFormControl[i].type);
                regEx = RegExp(objFormControl[i].pattern);
                console.log(regEx);
                blnFormCtrlValid = regEx.test(objFormControl[i].value);
                
                if (!blnFormCtrlValid){
                    blnFormValid = false;
                    console.log(blnFormCtrlValid + " :: " + blnFormValid);
                }

            }   

            // check outcome of control validation - if false, highlight the textbox and add the 
            // label (innerHTML) value to the arFieldErrors array 
            if (!blnFormCtrlValid) {
                // get label name for control and populate it into array
                objFormControlDesc = document.getElementById(objFormControl[i].name + "Label");
                arFieldErrors.push(objFormControlDesc.innerHTML);
            }
        }
        console.log(arFieldErrors);
        
    }
    //******************** */ end for loop *************************************************************************//
    
    if (!blnFormValid){
        i = 0
        var strError = "There are errors with your registration form.<br>Please check the following fields to ensure they are completed correctly:<br>"
        for (i = 0; i < arFieldErrors.length; i++){
            console.log(arFieldErrors[i]);
            strError += arFieldErrors[i] + "<br>";
        }

        objFormError = document.getElementById("formError");
        objFormError.innerHTML = strError;
        objFormError.style.display = "inline";

    } else {
        console.log(blnFormValid);
        if (blnFormValid) {
            
            //if all controls are valid, prompt user to confirm form submission
            userConfirm = confirm("Confirm - do you want to submit this form?");
            
            //if user confirms, submit form
            if (userConfirm) {
                document.infoForm.submit();
            }
        }
    }   
}


// This function validates the user form, then prompts the 
// user to confirm they want to submit registration form if all fields
// are completed correctly.  
//
// Fields not completed correctly are highlighted and a message is displayed
// at the bottom of the form.


//When user sets focus on an input control, evaluate if a "hidden" instruction <p> element exists for
//for that input control.  If an instruction <p> element exists, show the <p> element while the user
//has focus on that control, and hide the instruction when the user leaves the control (blur event)
//This function assumes the instruction <p> tag has an id using the following convention:
//id="controlName" + "Instruct"
// (i.e. instruction for custName input control would be id="custNameInstruct" 

var ctrlCollection = document.getElementsByTagName("input");
var i = 0;
var cntlCurrent = {};
var pInstruction= {};
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







// When user clicks "reset" button, show prompt to have user confirm they
// want to reset the form fields.

var btnReset = document.getElementById("regReset");
btnReset.addEventListener('click',function(event){
    event.preventDefault();    //override default reset action
    var userConfirm = confirm("Confirm - do you want to reset this form?");
    if (userConfirm) {
        document.infoForm.reset();
        //reset field style to default
    }
})



     // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var choices = [
        "Rock",
        "Paper",
        "Scissors"
        ];
        

        

        
//FUNCTIONS



// DOCUMENT READY FUNCTION
$(document).ready(function () {
        
//make this into a function 
   
   $("#shoot").click(function(){  
        $("#uc").empty();
        $("#cc").empty();
        $("#winner").empty();
//add your inout value into the user choice    
        
        var userchoice = $("#value").val();
        var computerchoice = choices[
        Math.floor( Math.random( ) * choices.length)
        ];
        $("#uc").append (userchoice);
        $("#cc").append(computerchoice);
        
//use an if statement to see who won the game        
        
         if ( (userchoice==="Rock")&&(computerchoice==="Paper") ) {
                 $("#winner").append("Computer Won!!");
         } else if ( (userchoice==="Rock")&&(computerchoice==="Scissors") ) {
                 $("#winner").append("User Won!!");
         }else if ( (userchoice==="Paper")&&(computerchoice==="Scissors") ) {
                 $("#winner").append("Computer Won!!");
         }else if ( (userchoice==="Paper")&&(computerchoice==="Rock") ) {
                 $("#winner").append("User Won!!");
         }else if ( (userchoice==="Scissors")&&(computerchoice==="Rock") ) {
                 $("#winner").append("Computer Won!!");
         }else if ( (userchoice==="Scissors")&&(computerchoice==="Paper") ) {
                 $("#winner").append("User Won!!");
         }else if ( userchoice===computerchoice) {
                 $("#winner").append("Tied");
         }else {
                 $("#winner").append("Invalid Entry");
         }
         
         
});
});
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
        
         if ( (userchoice===("rock" || "Rock"))&&(computerchoice==="Paper") ) {
                 $("#winner").append("Computer Won!!");
         } else if ( (userchoice===("rock" || "Rock"))&&(computerchoice==="Scissors") ) {
                 $("#winner").append("User Won!!");
         }else if ( (userchoice===("paper" || "Paper"))&&(computerchoice==="Scissors") ) {
                 $("#winner").append("Computer Won!!");
         }else if ( (userchoice===("paper" || "Paper"))&&(computerchoice==="Rock") ) {
                 $("#winner").append("User Won!!");
         }else if ( (userchoice===("scissors" || "Scissors"))&&(computerchoice==="Rock") ) {
                 $("#winner").append("Computer Won!!");
         }else if ( (userchoice===("scissors" || "Scissors"))&&(computerchoice==="Paper") ) {
                 $("#winner").append("User Won!!");
         }else if ( userchoice===computerchoice) {
                 $("#winner").append("Tied");
         }else {
                 $("#winner").append("Invalid Entry");
         }
         
         
});
});
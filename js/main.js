
let $rockObject = document.getElementsByClassName("rock-placement");

let score ;

let $scoreText =document.getElementById("score");

let winStatus =document.getElementById("win-status");



let $innerContainer = document.getElementsByClassName("scissor-toggle");


let $paperOuterCircles = document.querySelectorAll('div.paper.selectable-object');


let $scissorsOuterCircles = document.querySelectorAll('div.scissors.selectable-object');
let $outerDarkBlue = document.getElementsByClassName("dark-blue");
let $outerDarkRed = document.getElementsByClassName("dark-red");
let $outerDarkYellow = document.getElementsByClassName("dark-yellow");


let $winContainer = document.getElementsByClassName("win-lose-container");

let scissorContainer = document.getElementsByClassName("scissors-container");

var paperObject = document.getElementsByClassName("paper-placement");

let $scissorObject = document.getElementsByClassName("scissors-placement");

let $playAgain = document.querySelector(".playagain-button");

let $triangleObject = document.getElementsByClassName("triangle-placement");

let $selectedText = document.getElementsByClassName("selected-text");

let scissor = document.getElementsByClassName("scissors");
let paper = document.getElementsByClassName("paper");
let rock= document.getElementsByClassName("rock");




let playAgainStatus = document.getElementsByClassName("playagain-status");



let scissorImage = document.getElementsByClassName("scissor-object-image");
let paperImage = document.getElementsByClassName("paper-object-image");
let rockImage = document.getElementsByClassName("rock-object-image");


let imageUrls = ['./images/icon-rock.svg','./images/icon-paper.svg','./images/icon-scissors.svg'];




score = parseInt(localStorage.getItem('score')) || 0;
  localStorage.setItem('score', score);

  $scoreText.innerText = score;


  window.addEventListener('load', (e) => {

      score = parseInt(localStorage.getItem('score')) || 0;
      $scoreText.innerText = score;
      console.log("reload triggered");


});

document.querySelector('.rules-button').addEventListener('click',()=>{

  document.querySelector('#myModal').style.display = "block";


})

document.querySelector('.close-icon').addEventListener('click',() => {
  document.querySelector('#myModal').style.display = "none";
})


document.getElementById("score").addEventListener("click", onPaperClicked);

for(let i = 0; i < paperObject.length; i++) {

  paperObject[i].addEventListener("click", onPaperClicked);
}

for(let i = 0; i < $scissorObject.length; i++) {

  $scissorObject[i].addEventListener("click", onScissorsClicked);
}

for(let i = 0; i < $rockObject.length; i++) {

  $rockObject[i].addEventListener("click", onRockClicked);
}



  
  $playAgain.addEventListener("click", () =>{

    playAgain()

    
    })

 




// paperObject.addEventListener('click', myFunction);


function onPaperClicked () {
//$playAgain.css('color','#3B4262');

  
  $playAgain.style.color = "#3B4262"


for(let i = 0; i < $outerDarkYellow.length; i++) {
  
  
  $outerDarkYellow[i].style.backgroundColor = "transparent"
}

for(let i = 0; i < $innerContainer.length; i++) {
  
  
  $innerContainer[i].style.display = "none"
}

for(let i = 0; i < $rockObject.length; i++) {
  
  
  $rockObject[i].style.visibility = "hidden"
}


    

toggleTextAndTriangle();

// functionality will be checked here

toggleScissorsObject();


setTimeout(function() {


for(let i = 0; i < $innerContainer.length; i++) {
  
  
  $innerContainer[i].style.display = "block";
}

let houseChoice = getHouseChoice();

let winStatusValue = determineWinner('paper',houseChoice);
if(winStatusValue === "YOU LOSE"){

  for(let i = 0; i < $playAgain.length; i++) {

  
    $playAgain[i].addEventListener("mouseenter", () =>{

      $playAgain[i].style.color ='#DB2E4D';
      })

    $playAgain[i].addEventListener("mouseleave",() =>{
      $playAgain[i].style.color ='#3B4262';
    
    })

  }

// $playAgain.on( "mouseenter", () =>{
// $playAgain.css('color','#DB2E4D')
// } ).on( "mouseleave", () =>{
//   $playAgain.css('color','#3B4262')

// } );

}


setTimeout(
function(){
for(let i = 0; i < playAgainStatus.length; i++) {
  
  
 playAgainStatus[i].style.visibility = "visible"
}
 
    winStatus.innerText = winStatusValue;



 
 




},600
)

}, 1500);

if( window.innerWidth  < 500){
}
toggleButtonsOff()



  


if(window.innerWidth  > 767 && window.innerWidth < 992){
setTimeout(
  function(){
    adjustChosenObject()
      
}
,1800
)

for(let i = 0; i < $winContainer.length; i++) {
  
  
  $winContainer[i].style.zIndex = "9"
 }


//$('.win-lose-container').css('z-index','9');


}else if(window.innerWidth  > 991 && window.innerWidth  < 1201){
setTimeout(
  function(){
    adjustChosenObject()
      
}
,1800
)
// $('.win-lose-container').css('z-index','9');



for(let i = 0; i < $winContainer.length; i++) {
  
  
  $winContainer[i].style.zIndex = "9"
 }
}else if(window.innerWidth  > 1200){
setTimeout(
  function(){
    adjustChosenObject()
      
}
,1800
)


for(let i = 0; i < $winContainer.length; i++) {
  
  
  $winContainer[i].style.zIndex = "9"
 }
}else{

return;
}


}


  function onScissorsClicked () {

    for(let i = 0; i < $innerContainer.length; i++) {
  
  
      $innerContainer[i].style.display = "none"
    }

   // $innerContainer.hide();

   for(let i = 0; i < $outerDarkYellow.length; i++) {
  
  
    $outerDarkYellow[i].style.backgroundColor = "transparent"
  }

  for(let i = 0; i < $outerDarkBlue.length; i++) {
  
  
    $outerDarkBlue[i].style.backgroundColor = "#c76b18"
  }
  

   // $outerDarkYellow.css('background-color','transparent');
 //   $outerDarkBlue.css('background-color','#c76b18');

 for(let i = 0; i < $playAgain.length; i++) {

  
  $playAgain[i].style.color = "#3B4262"
}

for(let i = 0; i < $rockObject.length; i++) {
  
  
  $rockObject[i].style.visibility = "hidden"
}



    //$playAgain.css('color','#3B4262');
//     $rockObject.css(
//       {
//           'visibility':'hidden'

// }
      
//       );
  toggleTextAndTriangle();

  for(let i = 0; i < paperImage.length; i++) {
    
    paperImage[i].src = imageUrls[2];


}


for(let i = 0; i < paper.length; i++) {
    
  paper[i].style.borderColor = '#EB9F0E' 


}

for(let i = 0; i < scissorContainer.length; i++) {
    
  scissorContainer[i].style.visibility = "none"


}


//$('.paper-object-image').attr("src",imageUrls[2])
      // $('.paper').css('border-color','#EB9F0E' );
      // $('.scissors-container').css('visibility', 'hidden');

      toggleScissorsObject();
      setTimeout(function() {
        let houseChoice = getHouseChoice();
  
        let winStatusValue = determineWinner('scissors',houseChoice);
        if(winStatusValue === "YOU LOSE"){

          for(let i = 0; i < $playAgain.length; i++) {

  
            $playAgain[i].addEventListener("mouseenter", () =>{
        
              $playAgain[i].style.color ='#DB2E4D'
              })
        
            $playAgain[i].addEventListener("mouseleave",() =>{
              $playAgain[i].style.color ='#3B4262';
            
            })
        
          }

          // $playAgain.on( "mouseenter", () =>{
          //   $playAgain.css('color','#DB2E4D')
          //     } ).on( "mouseleave", () =>{
          //       $playAgain.css('color','#3B4262')
            
          //     } );
        }
        setTimeout(
  function(){
    for(let i = 0; i < playAgainStatus.length; i++) {
  
  
      playAgainStatus[i].style.visibility = "visible"
     }
      
         winStatus.innerText = winStatusValue;
     
     
     
      


      // $('.win-status').text(winStatus);
      //   $('.playagain-status').css('visibility', 'visible');
        
  },600
        )
      
       }, 1500);

       toggleButtonsOff()

       if(window.innerWidth > 767 && window.innerWidth  < 992){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )

        //$('.win-lose-container').css('z-index','9');
        for(let i = 0; i < $winContainer.length; i++) {
  
  
          $winContainer[i].style.zIndex = "9"
         }
      
      }else if(window.innerWidth  > 991 && window.innerWidth  < 1201){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        for(let i = 0; i < $winContainer.length; i++) {
  
  
          $winContainer[i].style.zIndex = "9"
         }

      //  $('.win-lose-container').css('z-index','9');
      }else if(window.innerWidth  > 1200){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        for(let i = 0; i < $winContainer.length; i++) {
  
  
          $winContainer[i].style.zIndex = "9"
         }

        //$('.win-lose-container').css('z-index','9');
      }else{

        return;
      }
  }











  //Function after rock is clicked 
  function onRockClicked () {

    for(let i = 0; i < $innerContainer.length; i++) {
  
  
      $innerContainer[i].style.display = "none"
    }

    for(let i = 0; i < $outerDarkYellow.length; i++) {
  
  
      $outerDarkYellow[i].style.backgroundColor = "transparent"
    }
  
    for(let i = 0; i < $outerDarkBlue.length; i++) {
    
    
      $outerDarkBlue[i].style.backgroundColor = "#9d1736"
    }
    
  
     // $outerDarkYellow.css('background-color','transparent');
   //   $outerDarkBlue.css('background-color','#c76b18');
  
   for(let i = 0; i < $playAgain.length; i++) {
  
    
    $playAgain[i].style.color = "#3B4262"
  }
  
  for(let i = 0; i < $rockObject.length; i++) {
    
    
    $rockObject[i].style.visibility = "hidden"
  }


   // $playAgain.css('color','#3B4262')
  //  $outerDarkYellow.css('background-color','transparent');
  //  $outerDarkBlue.css('background-color','#9d1736');

//     $rockObject.css(
//       {
//           'visibility':'hidden'

// }
      
     // );

     for(let i = 0; i < $winContainer.length; i++) {
  
  
      $winContainer[i].style.zIndex = "9"
     }

    //  $('.win-lose-container').css('z-index','9');

  toggleTextAndTriangle();

  for(let i = 0; i < paperImage.length; i++) {
    
    paperImage[i].src = imageUrls[0];


}


for(let i = 0; i < paper.length; i++) {
    
  paper[i].style.borderColor = '#DB2E4D' 


}

for(let i = 0; i < scissorContainer.length; i++) {
    
  scissorContainer[i].style.visibility = "none"


}




//$('.paper-object-image').attr("src",imageUrls[0])
     // $('.paper').css('border-color','#DB2E4D' );
      //$('.scissors-container').css('visibility', 'hidden');

      toggleScissorsObject();


      setTimeout(function() {
        let houseChoice = getHouseChoice();
  
        let winStatusValue = determineWinner('rock',houseChoice);
        if(winStatusValue === "YOU LOSE"){
          // $playAgain.on( "mouseenter", () =>{
          //   $playAgain.css('color','#DB2E4D')
          //     } ).on( "mouseleave", () =>{
          //       $playAgain.css('color','#3B4262')
            
          //     } );

              for(let i = 0; i < $playAgain.length; i++) {

  
                $playAgain[i].addEventListener("mouseenter", () =>{
            
                  $playAgain[i].style.color ='#DB2E4D'
                  })
            
                $playAgain[i].addEventListener("mouseleave",() =>{
                  $playAgain[i].style.color ='#3B4262';
                
                })
            
              }
    
        }
        setTimeout(
  function(){
    for(let i = 0; i < playAgainStatus.length; i++) {
  
  
      playAgainStatus[i].style.visibility = "visible"
     }
      
         winStatus.innerText = winStatusValue;
     
     
     



      // $('.win-status').text(winStatus);
      //   $('.playagain-status').css('visibility', 'visible');
        
  },600
        )
      
       }, 1500);

       toggleButtonsOff()

       if(window.innerWidth > 767 && window.innerWidth < 992){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )

        for(let i = 0; i < $winContainer.length; i++) {
  
  
          $winContainer[i].style.zIndex = "9"
         }
      
      }else if(window.innerWidth > 991 && window.innerWidth < 1201){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        for(let i = 0; i < $winContainer.length; i++) {
  
  
          $winContainer[i].style.zIndex = "9"
         }

      }else if(window.innerWidth > 1200){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        

        for(let i = 0; i < $winContainer.length; i++) {
  
  
          $winContainer[i].style.zIndex = "9"
         }    
        
        }else{

        return;
      }
  }









// const toggleScissorsObject = () => {

//     $('.scissors').css('border-color','transparent' );
//     $('.scissors').css('background','rgba(0, 0, 0, 0.1)' );

//     $('.scissor-object-image').attr("src",imageUrls[2]);
//     $('.scissor-object-image').hide();
// }



//   const getHouseChoice = () =>{
//     // $outerDarkYellow.css('background-color','#c76b18');
//     // $outerDarkBlue.css('background-color','#2642bf');
//     // $outerDarkRed.css('background-color','#9d1736');



//     let choice = Math.floor(Math.random()*3);
//     switch(choice){
//       case 0:
//         $('.scissors').css('border-color','#DB2E4D' );
//         $('.scissors').css('background','#DADADA' );
//         $outerDarkYellow.css('background-color','#9d1736');

//         $('.scissor-object-image').attr("src",imageUrls[0])
//         $('.scissor-object-image').slideDown('slow');
//         $innerContainer.show()
//       return 'rock';
     
//       case 1:
// $innerContainer.show();

//         $('.scissors').css('border-color','#4664F4' );
//         $('.scissors').css('background','#DADADA' );
//         $outerDarkYellow.css('background-color','#2642bf');

//         $('.scissor-object-image').attr("src",imageUrls[1])
//         $('.scissor-object-image').slideDown('slow');
//       return 'paper';
      
//       case 2:
//         $($innerContainer).show();
//         $('.scissors').css('border-color','#EB9F0E' );
//         $('.scissors').css('background','#DADADA' );
//         $outerDarkYellow.css('background-color','#c76b18');

//         $('.scissor-object-image').attr("src",imageUrls[2]);
//         $('.scissor-object-image').slideDown('slow');
//       return 'scissors';
      
//     }`
//   }



const toggleScissorsObject = () => {

  for(let i = 0; i < scissor.length; i++) {
  
  
    scissor[i].style.borderColor = "transparent";
    scissor[i].style.background = 'rgba(0, 0, 0, 0.1)'
  }
  
  for(let i = 0; i < scissorImage.length; i++) {
    
        scissorImage[i].src = imageUrls[2];

    scissorImage[i].style.display = "none"

  }

    // $('.scissors').css('border-color','transparent' );
    // $('.scissors').css('background','rgba(0, 0, 0, 0.1)' );

    // $('.scissor-object-image').attr("src",imageUrls[2]);
    // $('.scissor-object-image').hide();
}


const toggleTextAndTriangle = () => {
   

    for(let i = 0; i < $triangleObject.length; i++) {
  
  
      $triangleObject[i].style.visibility = "hidden"
    }
    
    for(let i = 0; i < $selectedText.length; i++) {
      
      
      $selectedText[i].style.display = "block"
    }


}

 const getHouseChoice = () =>{
//     // $outerDarkYellow.css('background-color','#c76b18');
//     // $outerDarkBlue.css('background-color','#2642bf');
//     // $outerDarkRed.css('background-color','#9d1736');



    let choice = Math.floor(Math.random()*3);
    switch(choice){
      case 0:
        for(let i = 0; i < scissor.length; i++) {
  
  
          scissor[i].style.borderColor = "#DB2E4D";
          scissor[i].style.background = '#DADADA'
        }

        for(let i = 0; i < $outerDarkYellow.length; i++) {
  
  
          $outerDarkYellow[i].style.backgroundColor = "#9d1736"
        }

        for(let i = 0; i < scissorImage.length; i++) {
    
          scissorImage[i].src = imageUrls[0]
  
      scissorImage[i].style.display = "block"
  
    }

    for(let i = 0; i < $innerContainer.length; i++) {
  
  
      $innerContainer[i].style.display = "block"
    }

        // $('.scissors').css('border-color','#DB2E4D' );
        // $('.scissors').css('background','#DADADA' );
        // $outerDarkYellow.css('background-color','#9d1736');

        // $('.scissor-object-image').attr("src",imageUrls[0])
        // $('.scissor-object-image').slideDown('slow');
      //  $innerContainer.show()
      return 'rock';
     
      case 1:

for(let i = 0; i < $innerContainer.length; i++) {
  
  
  $innerContainer[i].style.display = "block"
}

for(let i = 0; i < scissor.length; i++) {
  
  
  scissor[i].style.borderColor = "#4664F4";
  scissor[i].style.background = '#DADADA'
}

for(let i = 0; i < $outerDarkYellow.length; i++) {
  
  
  $outerDarkYellow[i].style.backgroundColor = "#2642bf"
}
       // $('.scissors').css('border-color','#4664F4' );
      //  $('.scissors').css('background','#DADADA' );
        //$outerDarkYellow.css('background-color','#2642bf');
        for(let i = 0; i < scissorImage.length; i++) {
    
          scissorImage[i].src = imageUrls[1];
  
      scissorImage[i].style.display = "block";
  
    }
   
      return 'paper';
      
      case 2:
        for(let i = 0; i < $innerContainer.length; i++) {
  
  
          $innerContainer[i].style.display = "block"
        }
        for(let i = 0; i < scissor.length; i++) {
  
  
          scissor[i].style.borderColor = "#EB9F0E";
          scissor[i].style.background = '#DADADA'
        }
        for(let i = 0; i < $outerDarkYellow.length; i++) {
  
  
          $outerDarkYellow[i].style.backgroundColor = "#c76b18"
        }
           
        

        for(let i = 0; i < scissorImage.length; i++) {
    
          scissorImage[i].src = imageUrls[2];
  
      scissorImage[i].style.display = "block";
  
    }
      return 'scissors';
      
    }
  }

    const determineWinner = (userChoice,computerChoice) => {

    if(userChoice === computerChoice){

      for(let i = 0; i < $scissorsOuterCircles.length; i++) {
  
  
        $scissorsOuterCircles[i].classList.add('outer-circles');
      }
     

      // $scissorsOuterCircles.addClass('outer-circles');
      return 'YOU LOSE'
    }
   
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        
      for(let i = 0; i < $scissorsOuterCircles.length; i++) {
  
  
        $scissorsOuterCircles[i].classList.add('outer-circles');
      }
        //$scissorsOuterCircles.addClass('outer-circles');

        return 'YOU LOSE'
      }else{
        score = parseInt(localStorage.getItem('score')) + 1;
        localStorage.setItem('score', score);
        console.log(score);
        $scoreText.innerText = score;

       // $scoreText.text(score);
        for(let i = 0; i < $paperOuterCircles.length; i++) {
  
  
        $paperOuterCircles[i].classList.add('outer-circles');
      }
       // $paperOuterCircles.addClass('outer-circles');

        return 'YOU WON'
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
       // $scissorsOuterCircles.addClass('outer-circles');
   
        for(let i = 0; i < $scissorsOuterCircles.length; i++) {
  
  
          $scissorsOuterCircles[i].classList.add('outer-circles');
        }
        return 'YOU LOSE'
      }else{     
          // $paperOuterCircles.addClass('outer-circles');

           for(let i = 0; i < $paperOuterCircles.length; i++) {
  
  
            $paperOuterCircles[i].classList.add('outer-circles');
          }

        score = parseInt(localStorage.getItem('score'))+ 1;
        localStorage.setItem('score', score);
        $scoreText.innerText = score
                console.log(score);

        

        return 'YOU WIN'
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        for(let i = 0; i < $scissorsOuterCircles.length; i++) {
  
  
          $scissorsOuterCircles[i].classList.add('outer-circles');
        }
        return 'YOU LOSE'
      }else {
        score = parseInt(localStorage.getItem('score'))+ 1;
        localStorage.setItem('score', score);
                console.log(score);

                $scoreText.innerText = score;
        $paperOuterCircles.addClass('outer-circles');   
         for(let i = 0; i < $paperOuterCircles.length; i++) {
  
  
          $paperOuterCircles[i].classList.add('outer-circles');
        }


        return 'YOU WON'
      }
    }
  
  
  }


  const toggleButtonsOff = () => {
    for(let i = 0; i < paperObject.length; i++) {

      paperObject[i].removeEventListener("click", onPaperClicked);
    }
    for(let i = 0; i < $scissorObject.length; i++) {

      $scissorObject[i].removeEventListener("click", onScissorsClicked);
    }
    for(let i = 0; i < $rockObject.length; i++) {

      $rockObject[i].removeEventListener("click", onRockClicked);
    }
    
  }

  const toggleButtonsOn = () => {
    for(let i = 0; i < paperObject.length; i++) {

      paperObject[i].addEventListener("click", onPaperClicked);
    }
    for(let i = 0; i < $scissorObject.length; i++) {

      $scissorObject[i].addEventListener("click", onScissorsClicked);
    }
    for(let i = 0; i < $rockObject.length; i++) {

      $rockObject[i].addEventListener("click", onRockClicked);
    }

  }
  
    const adjustChosenObject = () =>{

    if(window.innerWidth  > 991 && window.innerWidth  < 1201){

      
for(let i = 0; i < paperObject.length; i++) {

  paperObject[i].style.left = "25%"
  paperObject[i].style.top = "-40px"

}

for(let i = 0; i < $scissorObject.length; i++) {

  $scissorObject[i].style.right = "25%";
  $scissorObject[i].style.top = "-40px";
}
      // paperObject.animate({
      //   'left':'25%',
      //   'top':'-40px'
      // });
      // $scissorObject.animate({
      //   'right':'25%',
      //   'top':'-40px'
      // });
    }else if(window.innerWidth  > 1201){

      for(let i = 0; i < paperObject.length; i++) {

        paperObject[i].style.left = "26%"
        paperObject[i].style.top = "-40px"
      
      }
      for(let i = 0; i < $scissorObject.length; i++) {

        $scissorObject[i].style.right = "26%";
        $scissorObject[i].style.top = "-40px";
      }

      // $paperObject.animate({
      //   'left':'26%',
      //   'top':'-40px'
      // });
      // $scissorObject.animate({
      //   'right':'26%',
      //   'top':'-40px'
      // });
    }else{
      for(let i = 0; i < $scissorObject.length; i++) {

        $scissorObject[i].right = "17%";
        $scissorObject[i].top = "-40px";
      }
      for(let i = 0; i < paperObject.length; i++) {

        paperObject[i].style.left = "17%"
        paperObject[i].style.top = "-40px"
      
      }
      
      //  $paperObject.animate({
      //     'left':'17%',
      //     'top':'-40px'
      //   });
        // $scissorObject.animate({
        //   'right':'17%',
        //   'top':'-40px'
        // }); 
    }
  }


  



const playAgain = () => {
  restoreDefaultColors()
  removeOuterCircles()
  // $('.win-lose-container').css(
  //   'z-index', 2
  // );

  for(let i = 0; i < $winContainer.length; i++) {
  
  
    $winContainer[i].style.zIndex = "2"
   }
  toggleButtonsOn();
  for(let i = 0; i < playAgainStatus.length; i++) {
  
  
    playAgainStatus[i].style.visibility = "hidden"
   }
 // $('.playagain-status').css('visibility', 'hidden');
 for(let i = 0; i < $rockObject.length; i++) {
  
  
  $rockObject[i].style.visibility = "visible";
}

for(let i = 0; i < $triangleObject.length; i++) {
  
  
  $triangleObject[i].style.visibility = "visible";
}

for(let i = 0; i < $selectedText.length; i++) {
  
  
  $selectedText[i].style.display= "none";
}


 // $rockObject.css('visibility','visible');
 // $triangleObject.css('visibility','visible');
  //$selectedText.hide();
  for(let i = 0; i < paperImage.length; i++) {
    
    paperImage[i].src = imageUrls[1];


}


for(let i = 0; i < paper.length; i++) {
    
  paper[i].style.borderColor = '#4664F4' 


}
//  $('.paper').css('border-color','#4664F4' );
 // $('.paper-object-image').attr("src",imageUrls[1]);
 for(let i = 0; i < scissor.length; i++) {
  
  
  scissor[i].style.borderColor = "#EB9F0E";
  scissor[i].style.background = '#DADADA';
}

for(let i = 0; i < scissorImage.length; i++) {
  
      scissorImage[i].src = imageUrls[2];

  scissorImage[i].style.display = "block";

}
  // $('.scissors').css('border-color','#EB9F0E' );
  // $('.scissors').css('background','#DADADA' );
  // $('.scissor-object-image').attr("src",imageUrls[2]);
  // $('.scissor-object-image').show();

  if(window.innerWidth > 767 && window.innerWidth < 992){
    // paperObject.css({
    //   'left':'25%',
    //   'top':'-40px'
    // });
    for(let i = 0; i < paperObject.length; i++) {

      paperObject[i].style.left = "25%"
      paperObject[i].style.top = "-40px"
    
    }

    for(let i = 0; i < $scissorObject.length; i++) {

      $scissorObject[i].style.right = "25%";
      $scissorObject[i].style.top = "-40px";
    }
    // $scissorObject.css({
    //   'right':'25%',
    //   'top':'-40px'
    // }
    // )
   // $('.win-lose-container').css('z-index','1');
   for(let i = 0; i < $winContainer.length; i++) {
  
  
    $winContainer[i].style.zIndex = "1"
   }

  }else if(window.innerWidth > 991 && window.innerWidth < 1201){
    // paperObject.css({
    //   'left':'33%',
    //   'top':'-40px'
    // });
    // $scissorObject.css({
    //   'right':'33%',
    //   'top':'-40px'
    // }
    // )
    for(let i = 0; i < paperObject.length; i++) {

      paperObject[i].style.left = "33%"
      paperObject[i].style.top = "-40px"
    
    }

    for(let i = 0; i < $scissorObject.length; i++) {

      $scissorObject[i].style.right = "33%";
      $scissorObject[i].style.top = "-40px";
    }

    for(let i = 0; i < $winContainer.length; i++) {
  
  
      $winContainer[i].style.zIndex = "1"
     }
   // $('.win-lose-container').css('z-index','1');

  }else if(window.innerWidth > 1201){
    // paperObject.css({
    //   'left':'34%',
    //   'top':'-40px'
    // });
    // $scissorObject.css({
    //   'right':'34%',
    //   'top':'-40px'
    // }
    // )


  //  $('.win-lose-container').css('z-index','1');
  for(let i = 0; i < paperObject.length; i++) {

    paperObject[i].style.left = "34%"
    paperObject[i].style.top = "-40px"
    paperObject[i].style.zIndex = "4"

  
  }

  for(let i = 0; i < $scissorObject.length; i++) {

    $scissorObject[i].style.right = "34%";
    $scissorObject[i].style.top = "-40px";
    $scissorObject[i].style.zIndex = "4"

  }
  for(let i = 0; i < $winContainer.length; i++) {
  
  
    $winContainer[i].style.zIndex = "1"
   }
  }


}



  const restoreDefaultColors =()=>{
    for(let i = 0; i < $outerDarkYellow.length; i++) {
  
  
      $outerDarkYellow[i].style.backgroundColor = "#c76b18";
    }

    for(let i = 0; i < $outerDarkBlue.length; i++) {
  
  
      $outerDarkBlue[i].style.backgroundColor = "#2642bf";
    }

    for(let i = 0; i < $outerDarkRed.length; i++) {
  
  
      $outerDarkRed[i].style.backgroundColor = "#9d1736";
    }

    // $outerDarkYellow.css('background-color','#c76b18');
    // $outerDarkBlue.css('background-color','#2642bf');
    // $outerDarkRed.css('background-color','#9d1736');

  }


    const removeOuterCircles = () => {
      for(let i = 0; i < $paperOuterCircles.length; i++) {
  
  
        $paperOuterCircles[i].classList.remove('outer-circles');
      }

      for(let i = 0; i < $scissorsOuterCircles.length; i++) {
  
  
        $scissorsOuterCircles[i].classList.remove('outer-circles');
      }
    // $paperOuterCircles.removeClass('outer-circles');
    // $scissorsOuterCircles.removeClass('outer-circles');

  }





















  //Jequery Implementation

  // let $rockObject = $('.rock-placement');

  // let score ;

  // let $scoreText =$('#score');


  // let $innerContainer = $('.scissor-toggle')


  // let $paperOuterCircles = $('div.paper.selectable-object');


  // let $scissorsOuterCircles = $('div.scissors.selectable-object');
  
  // let $outerDarkBlue = $('.dark-blue');
  // let $outerDarkRed = $('.dark-red');
  // let $outerDarkYellow = $('.dark-yellow');



  // let $paperObject = $('.paper-placement');

  // let $scissorObject = $('.scissors-placement');

  // let $playAgain = $('.playagain-button');

  // let $triangleObject = $('.triangle-placement');

  // let $selectedText = $('.selected-text');

  // let imageUrls = ['./images/icon-rock.svg','./images/icon-paper.svg','./images/icon-scissors.svg']

// $(document).ready(()=>{


 



//   score = parseInt(localStorage.getItem('score')) || 0;
//   localStorage.setItem('score', score);

//   $scoreText.text(score);


//   $(window).on('load', function(){

//       score = parseInt(localStorage.getItem('score')) || 0;
//       $scoreText.text(score);


// });









    // $('.rules-button').on('click',()=>{

    //     $('#myModal').show();


    // })

    // $('.close-icon').on('click',() => {
    //     $('#myModal').hide();
    // })



  

//     //Paper Onclick

    // $paperObject.on('click',onPaperClicked)

//     //rock on click
   
//     $rockObject.on('click',onRockClicked)

//     //Sciccors on click

//     $scissorObject.on('click',onScissorsClicked)


//     $playAgain.on('click',()=>{
//       playAgain()
//     })



// })



// const toggleTextAndTriangle = () => {
//     $triangleObject.css('visibility', 'hidden');
//     $selectedText.show();


// }

// const playAgain = () => {
//   restoreDefaultColors()
//   removeOuterCircles()
//   $('.win-lose-container').css(
//     'z-index', 2
//   );
//   toggleButtonsOn();
//   $('.playagain-status').css('visibility', 'hidden');
//   $rockObject.css('visibility','visible');
//   $triangleObject.css('visibility','visible');
//   $selectedText.hide();
//   $('.paper').css('border-color','#4664F4' );
//   $('.paper-object-image').attr("src",imageUrls[1]);
//   $('.scissors').css('border-color','#EB9F0E' );
//   $('.scissors').css('background','#DADADA' );
//   $('.scissor-object-image').attr("src",imageUrls[2]);
//   $('.scissor-object-image').show();

//   if($(window).width() > 767 && $(window).width() < 992){
//     $paperObject.css({
//       'left':'25%',
//       'top':'-40px'
//     });
//     $scissorObject.css({
//       'right':'25%',
//       'top':'-40px'
//     }
//     )
//     $('.win-lose-container').css('z-index','1');

//   }else if($(window).width() > 991 && $(window).width() < 1201){
//     $paperObject.css({
//       'left':'33%',
//       'top':'-40px'
//     });
//     $scissorObject.css({
//       'right':'33%',
//       'top':'-40px'
//     }
//     )
//     $('.win-lose-container').css('z-index','1');

//   }else if($(window).width() > 1201){
//     $paperObject.css({
//       'left':'34%',
//       'top':'-40px'
//     });
//     $scissorObject.css({
//       'right':'34%',
//       'top':'-40px'
//     }
//     )
//     $('.win-lose-container').css('z-index','1');

//   }


// }

// const toggleScissorsObject = () => {

//     $('.scissors').css('border-color','transparent' );
//     $('.scissors').css('background','rgba(0, 0, 0, 0.1)' );

//     $('.scissor-object-image').attr("src",imageUrls[2]);
//     $('.scissor-object-image').hide();
// }



//   const getHouseChoice = () =>{
//     // $outerDarkYellow.css('background-color','#c76b18');
//     // $outerDarkBlue.css('background-color','#2642bf');
//     // $outerDarkRed.css('background-color','#9d1736');



//     let choice = Math.floor(Math.random()*3);
//     switch(choice){
//       case 0:
//         $('.scissors').css('border-color','#DB2E4D' );
//         $('.scissors').css('background','#DADADA' );
//         $outerDarkYellow.css('background-color','#9d1736');

//         $('.scissor-object-image').attr("src",imageUrls[0])
//         $('.scissor-object-image').slideDown('slow');
//         $innerContainer.show()
//       return 'rock';
     
//       case 1:
// $innerContainer.show();

//         $('.scissors').css('border-color','#4664F4' );
//         $('.scissors').css('background','#DADADA' );
//         $outerDarkYellow.css('background-color','#2642bf');

//         $('.scissor-object-image').attr("src",imageUrls[1])
//         $('.scissor-object-image').slideDown('slow');
//       return 'paper';
      
//       case 2:
//         $($innerContainer).show();
//         $('.scissors').css('border-color','#EB9F0E' );
//         $('.scissors').css('background','#DADADA' );
//         $outerDarkYellow.css('background-color','#c76b18');

//         $('.scissor-object-image').attr("src",imageUrls[2]);
//         $('.scissor-object-image').slideDown('slow');
//       return 'scissors';
      
//     }
//   }


//   const toggleButtonsOff = () => {
//     $paperObject.off('click');
//     $scissorObject.off('click');
//     $rockObject.off('click');
//   }

//   const toggleButtonsOn = () => {
//     $paperObject.on('click',onPaperClicked);
//     $scissorObject.on('click',onScissorsClicked);
//     $rockObject.on('click',onRockClicked);
//   }









//   const onPaperClicked = () => {
//     $playAgain.css('color','#3B4262');
//     $outerDarkYellow.css('background-color','transparent');
//    $innerContainer.hide();


//     $rockObject.css(
//       {
//                       'visibility':'hidden'

//       }
      
//       );

      
  
//   toggleTextAndTriangle();

// // functionality will be checked here

// toggleScissorsObject();


// setTimeout(function() {
//   $innerContainer.show();

// let houseChoice = getHouseChoice();

// let winStatus = determineWinner('paper',houseChoice);
// if(winStatus === "YOU LOSE"){
//   console.log(winStatus)

//   $playAgain.on( "mouseenter", () =>{
// $playAgain.css('color','#DB2E4D')
//   } ).on( "mouseleave", () =>{
//     $playAgain.css('color','#3B4262')

//   } );

// }

// setTimeout(
// function(){
// $('.win-status').text(winStatus);
// $('.playagain-status').css('visibility', 'visible');

// },600
// )

// }, 1500);

// toggleButtonsOff()

// if($(window).width() > 767 && $(window).width() < 992){
//   setTimeout(
//     function(){
//       adjustChosenObject()
        
//   }
// ,1800
//   )

//   $('.win-lose-container').css('z-index','9');


// }else if($(window).width() > 991 && $(window).width() < 1201){
//   setTimeout(
//     function(){
//       adjustChosenObject()
        
//   }
// ,1800
//   )
//   $('.win-lose-container').css('z-index','9');


//   $('.win-lose-container').css('z-index','9');
// }else if($(window).width() > 1200){
//   setTimeout(
//     function(){
//       adjustChosenObject()
        
//   }
// ,1800
//   )
  

//   $('.win-lose-container').css('z-index','9');
// }else{

//   return;
// }


//   }





//   //Function after scissors is clicked 

//   const onScissorsClicked = () => {

//     $innerContainer.hide();

//     $outerDarkYellow.css('background-color','transparent');
//     $outerDarkBlue.css('background-color','#c76b18');

//     $playAgain.css('color','#3B4262');
//     $rockObject.css(
//       {
//           'visibility':'hidden'

// }
      
//       );
//   toggleTextAndTriangle();
// $('.paper-object-image').attr("src",imageUrls[2])
//       $('.paper').css('border-color','#EB9F0E' );
//       $('.scissors-container').css('visibility', 'hidden');

//       toggleScissorsObject();
//       setTimeout(function() {
//         let houseChoice = getHouseChoice();
  
//         let winStatus = determineWinner('scissors',houseChoice);
//         if(winStatus === "YOU LOSE"){
//           $playAgain.on( "mouseenter", () =>{
//             $playAgain.css('color','#DB2E4D')
//               } ).on( "mouseleave", () =>{
//                 $playAgain.css('color','#3B4262')
            
//               } );
//         }
//         setTimeout(
//   function(){
//       $('.win-status').text(winStatus);
//         $('.playagain-status').css('visibility', 'visible');
        
//   },600
//         )
      
//        }, 1500);

//        toggleButtonsOff()

//        if($(window).width() > 767 && $(window).width() < 992){
//         setTimeout(
//           function(){
//             adjustChosenObject()
              
//         }
//   ,1800
//         )

//         $('.win-lose-container').css('z-index','9');

      
//       }else if($(window).width() > 991 && $(window).width() < 1201){
//         setTimeout(
//           function(){
//             adjustChosenObject()
              
//         }
//   ,1800
//         )
//         $('.win-lose-container').css('z-index','9');


//         $('.win-lose-container').css('z-index','9');
//       }else if($(window).width() > 1200){
//         setTimeout(
//           function(){
//             adjustChosenObject()
              
//         }
//   ,1800
//         )
        

//         $('.win-lose-container').css('z-index','9');
//       }else{

//         return;
//       }
//   }







//   //Function after rock is clicked 
//   const onRockClicked = () => {
//     $innerContainer.hide();

//     $playAgain.css('color','#3B4262')
//     $outerDarkYellow.css('background-color','transparent');
//     $outerDarkBlue.css('background-color','#9d1736');

//     $rockObject.css(
//       {
//           'visibility':'hidden'

// }
      
//       );

//       $('.win-lose-container').css('z-index','9');

//   toggleTextAndTriangle();
// $('.paper-object-image').attr("src",imageUrls[0])
//       $('.paper').css('border-color','#DB2E4D' );
//       $('.scissors-container').css('visibility', 'hidden');

//       toggleScissorsObject();


//       setTimeout(function() {
//         let houseChoice = getHouseChoice();
  
//         let winStatus = determineWinner('rock',houseChoice);
//         if(winStatus === "YOU LOSE"){
//           $playAgain.on( "mouseenter", () =>{
//             $playAgain.css('color','#DB2E4D')
//               } ).on( "mouseleave", () =>{
//                 $playAgain.css('color','#3B4262')
            
//               } );
//         }
//         setTimeout(
//   function(){
//       $('.win-status').text(winStatus);
//         $('.playagain-status').css('visibility', 'visible');
        
//   },600
//         )
      
//        }, 1500);

//        toggleButtonsOff()

//        if($(window).width() > 767 && $(window).width() < 992){
//         setTimeout(
//           function(){
//             adjustChosenObject()
              
//         }
//   ,1800
//         )

//         $('.win-lose-container').css('z-index','9');

      
//       }else if($(window).width() > 991 && $(window).width() < 1201){
//         setTimeout(
//           function(){
//             adjustChosenObject()
              
//         }
//   ,1800
//         )
//         $('.win-lose-container').css('z-index','9');


//         $('.win-lose-container').css('z-index','9');
//       }else if($(window).width() > 1200){
//         setTimeout(
//           function(){
//             adjustChosenObject()
              
//         }
//   ,1800
//         )
        

//         $('.win-lose-container').css('z-index','9');
//       }else{

//         return;
//       }
//   }


//   const adjustChosenObject = () =>{

//     if($(window).width() > 991 && $(window).width() < 1201){
//       $paperObject.animate({
//         'left':'25%',
//         'top':'-40px'
//       });
//       $scissorObject.animate({
//         'right':'25%',
//         'top':'-40px'
//       });
//     }else if($(window).width() > 1201){
//       $paperObject.animate({
//         'left':'26%',
//         'top':'-40px'
//       });
//       $scissorObject.animate({
//         'right':'26%',
//         'top':'-40px'
//       });
//     }else{
//        $paperObject.animate({
//           'left':'17%',
//           'top':'-40px'
//         });
//         $scissorObject.animate({
//           'right':'17%',
//           'top':'-40px'
//         }); 
//     }


//   }

//   const removeOuterCircles = () => {
//     $paperOuterCircles.removeClass('outer-circles');
//     $scissorsOuterCircles.removeClass('outer-circles');

//   }


//   //Function to determine winner

//   const determineWinner = (userChoice,computerChoice) => {

//     if(userChoice === computerChoice){
//       $scissorsOuterCircles.addClass('outer-circles');
//       return 'YOU LOSE'
//     }
   
//     if(userChoice === 'rock'){
//       if(computerChoice === 'paper'){
//         $scissorsOuterCircles.addClass('outer-circles');

//         return 'YOU LOSE'
//       }else{
//         score = parseInt(localStorage.getItem('score')) + 1;
//         localStorage.setItem('score', score);
//         console.log(score);
//         $scoreText.text(score);
//         $paperOuterCircles.addClass('outer-circles');

//         return 'YOU WON'
//       }
//     }
//     if(userChoice === 'paper'){
//       if(computerChoice === 'scissors'){
//         $scissorsOuterCircles.addClass('outer-circles');

//         return 'YOU LOSE'
//       }else{     
//            $paperOuterCircles.addClass('outer-circles');

//         score = parseInt(localStorage.getItem('score'))+ 1;
//         localStorage.setItem('score', score);
//                 console.log(score);

//         $scoreText.text(score);
        

//         return 'YOU WON'
//       }
//     }
  
//     if(userChoice === 'scissors'){
//       if(computerChoice === 'rock'){
//         $scissorsOuterCircles.addClass('outer-circles');

//         return 'YOU LOSE'
//       }else {
//         score = parseInt(localStorage.getItem('score'))+ 1;
//         localStorage.setItem('score', score);
//                 console.log(score);

//         $scoreText.text(score);
//         $paperOuterCircles.addClass('outer-circles');

//         return 'YOU WON'
//       }
//     }
  
  
//   }

//   const restoreDefaultColors =()=>{
//     $outerDarkYellow.css('background-color','#c76b18');
//     $outerDarkBlue.css('background-color','#2642bf');
//     $outerDarkRed.css('background-color','#9d1736');

//   }


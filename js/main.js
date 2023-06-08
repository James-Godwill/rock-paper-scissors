
  let $rockObject = $('.rock-placement');

  let score ;

  let $scoreText =$('#score');


  let $innerContainer = $('.scissor-toggle')


  let $paperOuterCircles = $('div.paper.selectable-object');


  let $scissorsOuterCircles = $('div.scissors.selectable-object');
  
  let $outerDarkBlue = $('.dark-blue');
  let $outerDarkRed = $('.dark-red');
  let $outerDarkYellow = $('.dark-yellow');



  let $paperObject = $('.paper-placement');

  let $scissorObject = $('.scissors-placement');

  let $playAgain = $('.playagain-button');

  let $triangleObject = $('.triangle-placement');

  let $selectedText = $('.selected-text');

  let imageUrls = ['./images/icon-rock.svg','./images/icon-paper.svg','./images/icon-scissors.svg']

$(document).ready(()=>{


 



  score = parseInt(localStorage.getItem('score')) || 0;
  localStorage.setItem('score', score);

  $scoreText.text(score);


  $(window).on('load', function(){

      score = parseInt(localStorage.getItem('score')) || 0;
      $scoreText.text(score);


});









    $('.rules-button').on('click',()=>{

        $('#myModal').show();


    })

    $('.close-icon').on('click',() => {
        $('#myModal').hide();
    })



  

    //Paper Onclick

    $paperObject.on('click',onPaperClicked)

    //rock on click
   
    $rockObject.on('click',onRockClicked)

    //Sciccors on click

    $scissorObject.on('click',onScissorsClicked)


    $playAgain.on('click',()=>{
      playAgain()
    })



})



const toggleTextAndTriangle = () => {
    $triangleObject.css('visibility', 'hidden');
    $selectedText.show();


}

const playAgain = () => {
  restoreDefaultColors()
  removeOuterCircles()
  $('.win-lose-container').css(
    'z-index', 2
  );
  toggleButtonsOn();
  $('.playagain-status').css('visibility', 'hidden');
  $rockObject.css('visibility','visible');
  $triangleObject.css('visibility','visible');
  $selectedText.hide();
  $('.paper').css('border-color','#4664F4' );
  $('.paper-object-image').attr("src",imageUrls[1]);
  $('.scissors').css('border-color','#EB9F0E' );
  $('.scissors').css('background','#DADADA' );
  $('.scissor-object-image').attr("src",imageUrls[2]);
  $('.scissor-object-image').show();

  if($(window).width() > 767 && $(window).width() < 992){
    $paperObject.css({
      'left':'25%',
      'top':'-40px'
    });
    $scissorObject.css({
      'right':'25%',
      'top':'-40px'
    }
    )
    $('.win-lose-container').css('z-index','1');

  }else if($(window).width() > 991 && $(window).width() < 1201){
    $paperObject.css({
      'left':'33%',
      'top':'-40px'
    });
    $scissorObject.css({
      'right':'33%',
      'top':'-40px'
    }
    )
    $('.win-lose-container').css('z-index','1');

  }else if($(window).width() > 1201){
    $paperObject.css({
      'left':'34%',
      'top':'-40px'
    });
    $scissorObject.css({
      'right':'34%',
      'top':'-40px'
    }
    )
    $('.win-lose-container').css('z-index','1');

  }


}

const toggleScissorsObject = () => {

    $('.scissors').css('border-color','transparent' );
    $('.scissors').css('background','rgba(0, 0, 0, 0.1)' );

    $('.scissor-object-image').attr("src",imageUrls[2]);
    $('.scissor-object-image').hide();
}



  const getHouseChoice = () =>{
    // $outerDarkYellow.css('background-color','#c76b18');
    // $outerDarkBlue.css('background-color','#2642bf');
    // $outerDarkRed.css('background-color','#9d1736');



    let choice = Math.floor(Math.random()*3);
    switch(choice){
      case 0:
        $('.scissors').css('border-color','#DB2E4D' );
        $('.scissors').css('background','#DADADA' );
        $outerDarkYellow.css('background-color','#9d1736');

        $('.scissor-object-image').attr("src",imageUrls[0])
        $('.scissor-object-image').slideDown('slow');
        $innerContainer.show()
      return 'rock';
     
      case 1:
$innerContainer.show();

        $('.scissors').css('border-color','#4664F4' );
        $('.scissors').css('background','#DADADA' );
        $outerDarkYellow.css('background-color','#2642bf');

        $('.scissor-object-image').attr("src",imageUrls[1])
        $('.scissor-object-image').slideDown('slow');
      return 'paper';
      
      case 2:
        $($innerContainer).show();
        $('.scissors').css('border-color','#EB9F0E' );
        $('.scissors').css('background','#DADADA' );
        $outerDarkYellow.css('background-color','#c76b18');

        $('.scissor-object-image').attr("src",imageUrls[2]);
        $('.scissor-object-image').slideDown('slow');
      return 'scissors';
      
    }
  }


  const toggleButtonsOff = () => {
    $paperObject.off('click');
    $scissorObject.off('click');
    $rockObject.off('click');
  }

  const toggleButtonsOn = () => {
    $paperObject.on('click',onPaperClicked);
    $scissorObject.on('click',onScissorsClicked);
    $rockObject.on('click',onRockClicked);
  }









  const onPaperClicked = () => {
    $playAgain.css('color','#3B4262');
    $outerDarkYellow.css('background-color','transparent');
   $innerContainer.hide();


    $rockObject.css(
      {
                      'visibility':'hidden'

      }
      
      );

      
  
  toggleTextAndTriangle();

// functionality will be checked here

toggleScissorsObject();


setTimeout(function() {
  $innerContainer.show();

let houseChoice = getHouseChoice();

let winStatus = determineWinner('paper',houseChoice);
if(winStatus === "YOU LOSE"){
  console.log(winStatus)

  $playAgain.on( "mouseenter", () =>{
$playAgain.css('color','#DB2E4D')
  } ).on( "mouseleave", () =>{
    $playAgain.css('color','#3B4262')

  } );

}

setTimeout(
function(){
$('.win-status').text(winStatus);
$('.playagain-status').css('visibility', 'visible');

},600
)

}, 1500);

toggleButtonsOff()

if($(window).width() > 767 && $(window).width() < 992){
  setTimeout(
    function(){
      adjustChosenObject()
        
  }
,1800
  )

  $('.win-lose-container').css('z-index','9');


}else if($(window).width() > 991 && $(window).width() < 1201){
  setTimeout(
    function(){
      adjustChosenObject()
        
  }
,1800
  )
  $('.win-lose-container').css('z-index','9');


  $('.win-lose-container').css('z-index','9');
}else if($(window).width() > 1200){
  setTimeout(
    function(){
      adjustChosenObject()
        
  }
,1800
  )
  

  $('.win-lose-container').css('z-index','9');
}else{

  return;
}


  }





  //Function after scissors is clicked 

  const onScissorsClicked = () => {

    $innerContainer.hide();

    $outerDarkYellow.css('background-color','transparent');
    $outerDarkBlue.css('background-color','#c76b18');

    $playAgain.css('color','#3B4262');
    $rockObject.css(
      {
          'visibility':'hidden'

}
      
      );
  toggleTextAndTriangle();
$('.paper-object-image').attr("src",imageUrls[2])
      $('.paper').css('border-color','#EB9F0E' );
      $('.scissors-container').css('visibility', 'hidden');

      toggleScissorsObject();
      setTimeout(function() {
        let houseChoice = getHouseChoice();
  
        let winStatus = determineWinner('scissors',houseChoice);
        if(winStatus === "YOU LOSE"){
          $playAgain.on( "mouseenter", () =>{
            $playAgain.css('color','#DB2E4D')
              } ).on( "mouseleave", () =>{
                $playAgain.css('color','#3B4262')
            
              } );
        }
        setTimeout(
  function(){
      $('.win-status').text(winStatus);
        $('.playagain-status').css('visibility', 'visible');
        
  },600
        )
      
       }, 1500);

       toggleButtonsOff()

       if($(window).width() > 767 && $(window).width() < 992){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )

        $('.win-lose-container').css('z-index','9');

      
      }else if($(window).width() > 991 && $(window).width() < 1201){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        $('.win-lose-container').css('z-index','9');


        $('.win-lose-container').css('z-index','9');
      }else if($(window).width() > 1200){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        

        $('.win-lose-container').css('z-index','9');
      }else{

        return;
      }
  }







  //Function after rock is clicked 
  const onRockClicked = () => {
    $innerContainer.hide();

    $playAgain.css('color','#3B4262')
    $outerDarkYellow.css('background-color','transparent');
    $outerDarkBlue.css('background-color','#9d1736');

    $rockObject.css(
      {
          'visibility':'hidden'

}
      
      );

      $('.win-lose-container').css('z-index','9');

  toggleTextAndTriangle();
$('.paper-object-image').attr("src",imageUrls[0])
      $('.paper').css('border-color','#DB2E4D' );
      $('.scissors-container').css('visibility', 'hidden');

      toggleScissorsObject();


      setTimeout(function() {
        let houseChoice = getHouseChoice();
  
        let winStatus = determineWinner('rock',houseChoice);
        if(winStatus === "YOU LOSE"){
          $playAgain.on( "mouseenter", () =>{
            $playAgain.css('color','#DB2E4D')
              } ).on( "mouseleave", () =>{
                $playAgain.css('color','#3B4262')
            
              } );
        }
        setTimeout(
  function(){
      $('.win-status').text(winStatus);
        $('.playagain-status').css('visibility', 'visible');
        
  },600
        )
      
       }, 1500);

       toggleButtonsOff()

       if($(window).width() > 767 && $(window).width() < 992){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )

        $('.win-lose-container').css('z-index','9');

      
      }else if($(window).width() > 991 && $(window).width() < 1201){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        $('.win-lose-container').css('z-index','9');


        $('.win-lose-container').css('z-index','9');
      }else if($(window).width() > 1200){
        setTimeout(
          function(){
            adjustChosenObject()
              
        }
  ,1800
        )
        

        $('.win-lose-container').css('z-index','9');
      }else{

        return;
      }
  }


  const adjustChosenObject = () =>{

    if($(window).width() > 991 && $(window).width() < 1201){
      $paperObject.animate({
        'left':'25%',
        'top':'-40px'
      });
      $scissorObject.animate({
        'right':'25%',
        'top':'-40px'
      });
    }else if($(window).width() > 1201){
      $paperObject.animate({
        'left':'26%',
        'top':'-40px'
      });
      $scissorObject.animate({
        'right':'26%',
        'top':'-40px'
      });
    }else{
       $paperObject.animate({
          'left':'17%',
          'top':'-40px'
        });
        $scissorObject.animate({
          'right':'17%',
          'top':'-40px'
        }); 
    }


  }

  const removeOuterCircles = () => {
    $paperOuterCircles.removeClass('outer-circles');
    $scissorsOuterCircles.removeClass('outer-circles');

  }


  //Function to determine winner

  const determineWinner = (userChoice,computerChoice) => {

    if(userChoice === computerChoice){
      $scissorsOuterCircles.addClass('outer-circles');
      return 'YOU LOSE'
    }
   
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        $scissorsOuterCircles.addClass('outer-circles');

        return 'YOU LOSE'
      }else{
        score = parseInt(localStorage.getItem('score')) + 1;
        localStorage.setItem('score', score);
        console.log(score);
        $scoreText.text(score);
        $paperOuterCircles.addClass('outer-circles');

        return 'YOU WON'
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        $scissorsOuterCircles.addClass('outer-circles');

        return 'YOU LOSE'
      }else{     
           $paperOuterCircles.addClass('outer-circles');

        score = parseInt(localStorage.getItem('score'))+ 1;
        localStorage.setItem('score', score);
                console.log(score);

        $scoreText.text(score);
        

        return 'YOU WON'
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        $scissorsOuterCircles.addClass('outer-circles');

        return 'YOU LOSE'
      }else {
        score = parseInt(localStorage.getItem('score'))+ 1;
        localStorage.setItem('score', score);
                console.log(score);

        $scoreText.text(score);
        $paperOuterCircles.addClass('outer-circles');

        return 'YOU WON'
      }
    }
  
  
  }

  const restoreDefaultColors =()=>{
    $outerDarkYellow.css('background-color','#c76b18');
    $outerDarkBlue.css('background-color','#2642bf');
    $outerDarkRed.css('background-color','#9d1736');

  }


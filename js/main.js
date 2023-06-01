
  let $rockObject = $('.rock-placement');

  let score  ;

  let $scoreText =$('#score');

  let $paperObject = $('.paper-placement');

  let $scissorObject = $('.scissors-placement');

  let $triangleObject = $('.triangle-placement');

  let $selectedText = $('.selected-text');

  let imageUrls = ['./images/icon-rock.svg','./images/icon-paper.svg','./images/icon-scissors.svg']

$(document).ready(()=>{
  score = parseInt(localStorage.getItem('score')) || 0;
  localStorage.setItem('score', score);

  $scoreText.text(score);

//   $(window).on('beforeunload', function(){
//     score = parseInt(localStorage.getItem('score')) || 0;
//       $scoreText.text(0);
      
    
// });


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

    $paperObject.on('click',() => {
      console.log('Hello')

        $rockObject.css(
            {
                            'visibility':'hidden'

            }
            
            );
        
        toggleTextAndTriangle();

    // functionality will be checked here

    toggleScissorsObject();


    setTimeout(function() {
      let houseChoice = getHouseChoice();

      let winStatus = determineWinner('paper',houseChoice);

      setTimeout(
function(){
    $('.win-status').text(winStatus);
      $('.playagain-status').css('visibility', 'visible');
      
},600
      )
    
     }, 1500);


    })





    //rock on click
   
    $rockObject.on('click',() => {
      console.log('Hello')

        $rockObject.css(
            {
                'visibility':'hidden'

}
            
            );
        toggleTextAndTriangle();
$('.paper-object-image').attr("src",imageUrls[0])
            $('.paper').css('border-color','#DB2E4D' );
            $('.scissors-container').css('visibility', 'hidden');

            toggleScissorsObject();


            setTimeout(function() {
              let houseChoice = getHouseChoice();
        
              let winStatus = determineWinner('rock',houseChoice);
        
              setTimeout(
        function(){
            $('.win-status').text(winStatus);
              $('.playagain-status').css('visibility', 'visible');
              
        },600
              )
            
             }, 1500);

    })






    //Sciccors on click

    $scissorObject.on('click',() => {
      console.log('Hello')
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
        
              setTimeout(
        function(){
            $('.win-status').text(winStatus);
              $('.playagain-status').css('visibility', 'visible');
              
        },600
              )
            
             }, 1500);

    })





})

const toggleTextAndTriangle = () => {
    $triangleObject.css('visibility', 'hidden');
    $selectedText.show()


}

const toggleScissorsObject = () => {

    $('.scissors').css('border-color','transparent' );
    $('.scissors').css('background','rgba(0, 0, 0, 0.1)' );

    $('.scissor-object-image').attr("src",imageUrls[2])
    $('.scissor-object-image').hide();
}



  const getHouseChoice = () =>{
    let choice = Math.floor(Math.random()*3);
    switch(choice){
      case 0:
        $('.scissors').css('border-color','#DB2E4D' );
        $('.scissors').css('background','#DADADA' );
        $('.scissor-object-image').attr("src",imageUrls[0])
        $('.scissor-object-image').slideDown('slow');
      return 'rock';
     
      case 1:
        $('.scissors').css('border-color','#4664F4' );
        $('.scissors').css('background','#DADADA' );
        $('.scissor-object-image').attr("src",imageUrls[1])
        $('.scissor-object-image').slideDown('slow');
      return 'paper';
      
      case 2:
        $('.scissors').css('border-color','#EB9F0E' );
        $('.scissors').css('background','#DADADA' );
        $('.scissor-object-image').attr("src",imageUrls[2]);
        $('.scissor-object-image').slideDown('slow');
      return 'scissors';
      
    }
  }

  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
      return 'YOU LOSE'
    }
   
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'YOU LOSE'
      }else{
        score = parseInt(localStorage.getItem('score')) + 1;
        localStorage.setItem('score', score);
        $scoreText.text(score);
        return 'YOU WON'
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'YOU LOSE'
      }else{
        score = parseInt(localStorage.getItem('score'))+ 1;
        localStorage.setItem('score', score);
        $scoreText.text(score);

        return 'YOU WON'
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'YOU LOSE'
      }else {
        score = parseInt(localStorage.getItem('score'))+ 1;
        localStorage.setItem('score', score);
        $scoreText.text(score);
        return 'YOU WON'
      }
    }
  
  
  }


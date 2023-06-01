
  let $rockObject = $('.rock-placement');

  let $paperObject = $('.paper-placement');

  let $scissorObject = $('.scissors-placement');

  let $triangleObject = $('.triangle-placement');

  let $selectedText = $('.selected-text');

  let imageUrls = ['./images/icon-rock.svg','./images/icon-paper.svg','./images/icon-scissors.svg']

$(document).ready(()=>{


    $('.rules-button').on('click',()=>{

        $('#myModal').show();


    })

    $('.close-icon').on('click',() => {
        $('#myModal').hide();
    })

    //Paper Onclick

    $paperObject.on('click',() => {
        $rockObject.css(
            {
                            'visibility':'hidden'

            }
            
            );
        
        toggleTextAndTriangle();

    // functionality will be checked here

    toggleScissorsObject();
    



    })





    //Paper on click
    $rockObject.on('click',() => {
        $rockObject.css(
            {
                'visibility':'hidden'

}
            
            );
        toggleTextAndTriangle();
$('.rock-object-image').attr("src",imageUrls[0])
            $('.paper').css('border-color','#DB2E4D' );
            $('.scissors-container').css('visibility', 'hidden');

            toggleScissorsObject();

            setTimeout(
                checkAnswer(),
                5000);
            
    })






    //Sciccors on click

    $scissorObject.on('click',() => {
        $rockObject.css(
            {
                'visibility':'hidden'

}
            
            );
        toggleTextAndTriangle();
$('.rock-object-image').attr("src",imageUrls[2])
            $('.paper').css('border-color','#EB9F0E' );
            $('.scissors-container').css('visibility', 'hidden');

            toggleScissorsObject();

    })




})

const toggleTextAndTriangle = () => {
    $triangleObject.css('visibility', 'hidden');
    $selectedText.show()


}

const toggleScissorsObject = () => {

    $('.scissors').css('border-color','transparent' );
    $('.scissors').css('background','rgba(0, 0, 0, 0.1)' );
    $('.scissor-object-image').hide();
}



  const getHouseChoice = () =>{
    let choice = Math.floor(Math.random()*3);
    switch(choice){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'scissors';
      break;
      case 2:
      return 'paper';
      break;
    }
  }

  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice){
      return 'Game was a tie'
    }
   
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'computer Won'
      }else{
        return 'user Won'
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer Won'
      }else{
        return 'user Won'
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer Won'
      }else {
        return 'user Won'
      }
    }
  
  
  }


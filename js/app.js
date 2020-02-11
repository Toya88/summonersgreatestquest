/*
*Create a start or enter screen style.visiblity.hidden
    hide game behind background image
    add enter button
    onclick of the button show game

Need to input story text to screen
Need story text to change based on where the player is in the story / save text to a variable that can be changed
Store game text in an object so it can be called easyly
*Make text load in small sections


*Option to enter hero name
*Option to pick geneder or ask their geneder/ story text will explain who they are now
*Once player dies, game will restart with opposite gender, game will remember first charaters name

Need to input text on buttons
Need first two buttons to receive new text options with each scene
Need event listener on buttons 


Need a way to pick 4 item choices - hidden buttons? dom generatored buttons that dissapear after
Need a place to store the choices - array
After receiving the list of items to collect, inventory system will appear to the left of the screen- on canvas? or beside it
As each item is aquired, the name of the item on the list will change color indicating the receipt of the item - arr.push

Need a game flow/

Can
*add cell phone easter egg
*add a 'Hmmm' with no context in the area where the phone is
*/
// canvas

// function one () {
//     see();
// };
//global variables
var counterOuter = 0;
var counterInner = 0;
var kitchenOuterCounter = 0;
var kitchenInnerCounter = 0;
var outsideOuterCounter = 0;
var outsideInnerCounter = 0;
var leftOuterCounter = 0;
var leftInnerCounter = 0;
var rightOuterCounter = 0;
var rightInnerCounter = 0;
var deathInnerCounter = 0;
var deathOuterCounter = 0;
var hasGlovesCounter = 0;
var potionInnerCounter = 0;
var potionOuterCounter = 0;
var noPotionInnerCounter = 0;
var noPotionOuterCounter = 0;

var rightPathCounter = 0;
var knifeInnerCounter = 0;
var knifeOuterCounter = 0;
var noKnifeInnerCounter = 0;
var noKnifeOuterCounter = 0;
var smallCounter = 0;
var bigCounter = 0;
var wrongCounter = 0;
// var wrongInnerCounter = 0;
var rightCounter = 0;
// var rightOuterCounter = 0;

//write function to hide and reveal buttons

var questItems = [];

function enter() {

    var enterButn = document.createElement("button");
    enterButn.setAttribute('class', 'enterBtn');
    enterButn.id = 'enter';
    var getWindow = document.getElementById('window');
    getWindow.appendChild(enterButn);
    enterButn.innerText = 'Start';
    enterButn.addEventListener('click', see)
      
}
enter();
//buttons need to be gobal? 
for (let i = 0; i < 6; i++) {
    var button = document.createElement('button');
    button.className = 'buttons';
    button.id = 'butn' + i;
    let getWindow = document.getElementById('window');
    getWindow.appendChild(button);
    $('.buttons').css('visibility','hidden');
    
}
function see() {
    
    var enterButn = document.getElementById('enter');
    enterButn.style.visibility = 'hidden';

        let getWindow = document.getElementById('window');
        getWindow.setAttribute('class', 'window');
        getWindow.appendChild(button);
        $('.buttons').css('visibility','hidden');
    

    $('#butn0').css('visibility','visible');
    var next = document.getElementById('butn0');
    next.innerText = 'Continue';
    // var newButn = document.createElement('button');
    // newButn.id = 'newButn';
    // newButn.className = 'enterBtn';
    // let getWindow = document.getElementById('window');
    // getWindow.setAttribute('class', 'window');

    // getWindow.appendChild(newButn);
    // newButn.innerText = "continue1";

    var gameScript = document.getElementById('gameScript');
    
    gameScript.innerText = storyStart[0][0];
    var img = document.getElementById('img');
    img.src = images[0];
    console.log(storyStart[0]);
    
   
    // need a way to switch out story arrays in click counter - constructor or switch funtion 
    //clickcounter needs to take an array as a paramoter - textArr
    //if outercounter == 2 textArr == 
    //.bind
    next.addEventListener('click', clickCounter, false);
    
    function clickCounter(textArr) {
       // write a function to change the array's - use varible set to true or false for each one
      
       var startText = false;
       
       if (startText !== true) {
        textArr = storyStart;
        
    } 

        if (counterInner < textArr[counterOuter].length - 1) {
            counterInner++;
            gameScript.innerText = textArr[counterOuter][counterInner];
            console.log(counterOuter); 
            console.log(counterInner);
            
        } else if (counterInner >= textArr[counterOuter].length - 1){
            counterOuter++;
            counterInner = 0;
            
            console.log(counterOuter); 
            console.log(counterInner);
            gameScript.innerText = textArr[counterOuter][counterInner];
            img.src = images[counterOuter];
             
        } 
        
        //remove so clickcounter can bd called anywhere - turn eventlisiten with 
        if (textArr[counterOuter][counterInner] === 'Choose 3 items') {
            $('#append').css('visibility','visible');
            next.removeEventListener('click', clickCounter, false);
            next.addEventListener('click', nextEvent, false);
        }
    }
    function nextEvent() {
        questItems.length = 0;
        
        var knife = $("#knife").is(':checked');
        var gloves = $("#gloves").is(':checked');
        var shirt = $("#shirt").is(':checked');
        var axe = $("#axe").is(':checked');
        var coins = $("#3coins").is(':checked');
        
        if (knife) {
            questItems.push('knife');
        }
        if (gloves) {
            questItems.push('gloves');
        }
        if (shirt) {
            questItems.push('shirt');
        }
        if (axe) {
            questItems.push('axe');
        }
        if (coins) {
            questItems.push('3coins');
        }
        var click = false;
        if (questItems.length === 3) {
            click = true;
        } else {
           alert('Must choose 3 items') 
        }
        if (click) {
            
            $('#append').css('visibility','hidden');
            next.removeEventListener('click', nextEvent, false);
            firstDecision()
            // next.addEventListener('click', clickCounter, false);
            // if (gameScript.innerText === 'Should I check the kitchen or go outside?') {
                    
            //     firstDecision();
            // } 

        }
    }

    function firstDecision() {
        var img = document.getElementById('img');
        img.src = fimages[0];
        
    let getWindow = document.getElementById('window');
    getWindow.setAttribute('class', 'window');
    gameScript.innerText = 'Should I check the kitchen or go outside?';
    $('#butn0').css('visibility','hidden');
    $('#butn1').css('visibility','visible');
    
    var secondButn = document.getElementById('butn1');
    secondButn.innerText = 'Leave Castle';
    getWindow.appendChild(secondButn);
    
    $('#butn2').css('visibility','visible');
    var thirdButn = document.getElementById('butn2');
    thirdButn.innerText = 'Go to Kitchen';
    getWindow.appendChild(thirdButn);  
    secondButn.addEventListener('click', clickOutside);
    thirdButn.addEventListener('click', clickKitchen);
    }
 function clickKitchen(){
    var img = document.getElementById('img');
    img.src = fimages[1];
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    // gameScript.innerText = kitchen[kitchenOuterCounter][kitchenInnerCounter];
    // kitchenInnerCounter++;
     next.addEventListener('click', clickKitchen2);
    }
    function clickKitchen2() {
        if(kitchenInnerCounter < kitchen[kitchenOuterCounter].length){        
            gameScript.innerText = kitchen[kitchenOuterCounter][kitchenInnerCounter];
            kitchenInnerCounter++;
        }
        else {    
            kitchenOuterCounter ++;
            kitchenInnerCounter = 0;
         if(kitchenOuterCounter < kitchen.length){
            gameScript.innerText = kitchen[kitchenOuterCounter][kitchenInnerCounter];
            img.src = fimages[kitchenOuterCounter];
        //image here if you want it
        questItems.push('candy');
        $('#butn0').css('visibility','hidden');
        $('#butn1').css('visibility','visible');
        next.removeEventListener('click', clickKitchen2);
        }
    }  
    }

 function clickOutside(){
       $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    var remove = document.getElementById('butn2');
    remove.removeEventListener('click', clickOutside);

    var next = document.getElementById('butn0');
    next.addEventListener('click', clickOutside);
    var haveCandy = questItems.indexOf("candy");

    var img = document.getElementById('img');
    img.src = oimages[0];
if(haveCandy > -1){

    if(outsideInnerCounter <= outside[outsideOuterCounter].length-1){        
        gameScript.innerText = outside[outsideOuterCounter][outsideInnerCounter];
        outsideInnerCounter++;
     }
     else{
         outsideOuterCounter ++;
         outsideInnerCounter = 0;
         

         if(outsideOuterCounter < outside.length -1){
         gameScript.innerText = outside[outsideOuterCounter][outsideInnerCounter];
         outsideInnerCounter++;
         img.src = oimages[outsideOuterCounter];
        }
        else{
            

            gameScript.innerText = outside[outsideOuterCounter][outsideInnerCounter];
            $('#butn0').css('visibility','hidden');
            $('#butn1').css('visibility','visible');
            $('#butn2').css('visibility','visible');
            var secondButn = document.getElementById('butn1');
            secondButn.innerText = 'Go Left';
            var thirdButn = document.getElementById('butn2');
            thirdButn.innerText = 'Go Right';
            secondButn.removeEventListener('click', clickOutside);
            thirdButn.removeEventListener('click', clickKitchen);
            secondButn.addEventListener('click', leftSide);
            thirdButn.addEventListener('click', rightSide);
        }
     }
    }else{
        var img = document.getElementById('img');
            img.src = wimages[0];
        if(outsideInnerCounter < outsideWrong[outsideOuterCounter].length -1){        
            gameScript.innerText = outsideWrong[outsideOuterCounter][outsideInnerCounter];
            outsideInnerCounter++;
         }
         else{
             outsideOuterCounter ++;
             outsideInnerCounter=0;
             if(outsideOuterCounter < outsideWrong.length -1){
             gameScript.innerText = outsideWrong[outsideOuterCounter][outsideInnerCounter];
             outsideInnerCounter++;
             img.src = wimages[outsideOuterCounter];
            }
                 else{
                //next step
                // gameScript.innerText = outsideWrong[outsideOuterCounter][outsideInnerCounter];
                $('#butn0').css('visibility','hidden');
                $('#butn1').css('visibility','visible');
                $('#butn2').css('visibility','visible');
                var secondButn = document.getElementById('butn1');
                secondButn.innerText = 'Go Left';
                var thirdButn = document.getElementById('butn2');
                thirdButn.innerText = 'Go Right';
                secondButn.removeEventListener('click', clickOutside);
                thirdButn.removeEventListener('click', clickKitchen);
                secondButn.addEventListener('click', leftSide);
                thirdButn.addEventListener('click', rightSide);
            }
         }
    }
 }
 function leftSide(){
    //  alert("leftSide")
    var img = document.getElementById('img');
    img.src = limages[0];
    
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    var next = document.getElementById('butn0');
    next.removeEventListener('click', gloves);
    
    var remove = document.getElementById('butn2');
    remove.removeEventListener('click', bigFairy);


    var haveGloves = questItems.indexOf('gloves');
    next.removeEventListener('click', clickOutside);
    next.addEventListener('click', leftSide);

    //leftPath
    if (haveGloves > -1) {
        if (leftInnerCounter < leftPath[leftOuterCounter].length -1) {
            gameScript.innerText = leftPath[leftOuterCounter][leftInnerCounter];
            leftInnerCounter++;
            img.src = limages[leftOuterCounter];
        }else{
            
            $('#butn0').css('visibility','hidden');
            $('#butn1').css('visibility','visible');
            $('#butn2').css('visibility','visible');

            var secondButn = document.getElementById('butn1');
            secondButn.removeEventListener('click', leftSide);
            secondButn.innerText = 'Use hands';
            secondButn.addEventListener('click', death);

            var thirdButn = document.getElementById('butn2');
            thirdButn.innerText = 'Use gloves';
            thirdButn.removeEventListener('click', rightSide);
            thirdButn.addEventListener('click', gloves);
            console.log(leftInnerCounter);

        }

        
    } else {
        img.src = limages[leftOuterCounter];
    $('#butn0').css('visibility','hidden');
    $('#butn1').css('visibility','visible');
    $('#butn2').css('visibility','visible');
    
        
        var secondButn = document.getElementById('butn1');
        secondButn.innerText = 'Use hands';
        thirdButn.removeEventListener('click', rightSide);
        secondButn.addEventListener('click', death);
    
        var thirdButn = document.getElementById('butn2');
        thirdButn.innerText = 'No gloves';
        thirdButn.removeEventListener('click', rightSide);
        thirdButn.addEventListener('click', death);
        
        };
   
    console.log(questItems);
        
    };

 
function death() {
    var img = document.getElementById('img');
    img.src = dimages[0];
    
    // event.preventDefault();
    $('#butn0').css('visibility','hidden');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');

    $('#butn3').css('visibility','visible');
    var dead = document.getElementById('butn3');
    dead.innerText = 'Continue';

    next.removeEventListener('click', leftSide);
    dead.addEventListener('click', death);
    // deathOuterCounter > bitchYouDead[deathOuterCounter].length
    if (deathOuterCounter < bitchYouDead[deathOuterCounter].length -1) {
        gameScript.innerText = bitchYouDead[deathOuterCounter];
        deathOuterCounter++;   
        img.src = dimages[deathOuterCounter];    
    } 
    if(gameScript.innerText == 'I\'m Burning!!!! WWWHHHHYYYYY!!'){
        window.location.reload(false);
        // setTimeout(function(){ window.location.reload(false) }, 1000);        
    } ;
    
};
function gloves() {
    
    
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    $('#butn3').css('visibility','hidden');

    var next = document.getElementById('butn0');
    next.removeEventListener('click', leftSide);
    next.addEventListener('click', gloves);


    var img = document.getElementById('img');
    img.src = gimages[0];
        if (hasGlovesCounter <= hasGloves[hasGlovesCounter].length) {
            gameScript.innerText = hasGloves[hasGlovesCounter];
            hasGlovesCounter++;
            img.src = gimages[hasGlovesCounter];
            console.log('here');

            if (gameScript.innerText == 'Should I go foward or back up the hill?' ) {
                console.log('Right');
                $('#butn0').css('visibility','hidden');
                $('#butn1').css('visibility','visible');
                $('#butn2').css('visibility','visible');

                questItems.push('sunBakedSponge');

                var goFoward = document.getElementById('butn1');
                var backUpHill = document.getElementById('butn2');
                goFoward.innerText = 'Go Foward';
                backUpHill.innerText = 'Go Back the Hill';
                goFoward.removeEventListener('click', clickOutside);
                backUpHill.removeEventListener('click', death);
                goFoward.addEventListener('click', forest);
                backUpHill.addEventListener('click', clickOutside);
                // next.removeEventListener('click', useGloves);
                
            }
        } 
    
}
function forest() {
    // event.preventDefault();
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    $('#butn3').css('visibility','hidden');
    // questItems.push('potion');

    var dead = document.getElementById('butn3');
    var next = document.getElementById('butn0');
    dead.removeEventListener('click', death);
    next.removeEventListener('click', gloves);
    next.addEventListener('click', forest);

    var hasShirt = questItems.indexOf('shirt');

    var img = document.getElementById('img');
    // img.src = pimages[0];
    if (hasShirt > -1) {
        var img = document.getElementById('img');
         img.src = pimages[0];
        if (potionInnerCounter < potion[potionOuterCounter].length) {
            gameScript.innerText = potion[potionOuterCounter][potionInnerCounter];
            potionInnerCounter++;
        } else {
            potionOuterCounter++;
            img.src = pimages[potionOuterCounter];
            potionInnerCounter = 0;
            if (potionOuterCounter < potion.length) {
                gameScript.innerText = potion[potionOuterCounter][potionInnerCounter];
                potionInnerCounter++;
            } else if (questItems.length <= 6){
                questItems.push('potion');
                $('#butn0').css('visibility','hidden');
                $('#butn2').css('visibility','visible'); 
                
                var right = document.getElementById('butn2');
                right.innerText = 'Go Right';
                right.removeEventListener('click', clickOutside);       
                right.addEventListener('click', rightSide);
            } else {
                // alert('ending')
                //ending
                right.removeEventListener('click', clickOutside);       
                right.addEventListener('click', ending);
            }
        }
        
    } else {
        var img = document.getElementById('img');
         img.src = nimages[0];
        if (noPotionInnerCounter < noPotion[noPotionOuterCounter].length) {
            gameScript.innerText = noPotion[noPotionOuterCounter][noPotionInnerCounter];
            noPotionInnerCounter++;
        } else {
            noPotionOuterCounter++;
            noPotionInnerCounter = 0;
            if (noPotionOuterCounter < noPotion.length) {
                gameScript.innerText = noPotion[noPotionOuterCounter][noPotionInnerCounter];
                noPotionInnerCounter++;
                img.src = nimages[noPotionOuterCounter];
            } else if (questItems.length <= 6) {
                console.log(questItems);
                
                $('#butn0').css('visibility','hidden');
                $('#butn2').css('visibility','visible'); 
                
                var right = document.getElementById('butn2');
                right.innerText = 'Go Right';
                right.removeEventListener('click', clickOutside);       
                right.addEventListener('click', rightSide);
            } else {
                alert('ending')
                //ending
                right.removeEventListener('click', clickOutside);       
                right.addEventListener('click', ending);
            }
        }
    }
}

 function rightSide(){
    
    
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    $('#butn3').css('visibility','hidden');
    //clickOutside
    var right = document.getElementById('butn2');
    var next = document.getElementById('butn0');
    var third = document.getElementById('butn3');
    right.addEventListener('click', rightSide);
    right.removeEventListener('click', clickOutside);
    next.removeEventListener('click', forest);
    third.removeEventListener('click', gloves);
    next.addEventListener('click', rightSide);
    var hasKnife = questItems.indexOf('knife');

    var img = document.getElementById('img');
    img.src = kimages[0];
    //run knife else, run n knife
    if (hasKnife > -1) {
        if (knifeInnerCounter < knife[knifeOuterCounter].length) {
            gameScript.innerText = knife[knifeOuterCounter][knifeInnerCounter];
            knifeInnerCounter++;
        } else {
            knifeOuterCounter++;
            knifeInnerCounter = 0;
            if (knifeOuterCounter < knife.length) {
                gameScript.innerText = knife[knifeOuterCounter][knifeInnerCounter];
                knifeInnerCounter++;
                img.src = kimages[knifeOuterCounter];
            } else {
                questItems.push('lettuce');
                $('#butn0').css('visibility','hidden');
                $('#butn2').css('visibility','visible');
                $('#butn3').css('visibility','visible'); 
                
                var big = document.getElementById('butn2');
                var small = document.getElementById('butn3');
                small.removeEventListener('click', rightSide);
                big.removeEventListener('click', forest);
                big.addEventListener('click', bigFairy);
                big.innerText = 'Choose Big Fairy Table';
                small.addEventListener('click', smallFairy);
                small.innerText = 'Choose Small Fairy Table';
            }
        }
        
    } else {
        var img = document.getElementById('img');
        img.src = knimages[0];
        if (noKnifeInnerCounter < noKnife[noKnifeOuterCounter].length) {
            gameScript.innerText = noKnife[noKnifeOuterCounter][noKnifeInnerCounter];
            noKnifeInnerCounter++;
        } else {
            noKnifeOuterCounter++;
            noKnifeInnerCounter = 0;
            if (noKnifeOuterCounter < noKnife.length) {
                gameScript.innerText = noKnife[noKnifeOuterCounter][noKnifeInnerCounter];
                noKnifeInnerCounter++;
                img.src = knimages[noKnifeOuterCounter];
            } else {
                $('#butn0').css('visibility','hidden');
                $('#butn2').css('visibility','visible');
                $('#butn3').css('visibility','visible'); 
                
                var big = document.getElementById('butn2');
                var small = document.getElementById('butn3');
                small.removeEventListener('click', rightSide);
                big.removeEventListener('click', forest);
                big.addEventListener('click', bigFairy);
                big.innerText = 'Choose Big Fairy Table';
                small.addEventListener('click', smallFairy);
                small.innerText = 'Choose Small Fairy Table';
            }
        }
    }
    
 };
 //need right to call left at end / or check and trigger ending - check the array for amount
//rightEnding - wrongEnding

//move where items are pushed
 function smallFairy() {
    var img = document.getElementById('img');
    img.src = simages[0];
    
    questItems.push('smallTable');
        $('#butn2').css('visibility','hidden');
        $('#butn3').css('visibility','visible');
        var small = document.getElementById('butn3');
    
        small.removeEventListener('click', smallFairy);
        small.addEventListener('click', smallFairy);
        
        small.innerText = 'continue';

        var smallTable = questItems.indexOf('smallTable');
        if(smallTable > -1){
            if(smallCounter < smallT[smallCounter].length) {
                gameScript.innerText = smallT[smallCounter];
                smallCounter++; 
                img.src = simages[smallOuterCounter];
                if (gameScript.innerText == 'I\'ll take the small one.') {
                    if (questItems.length <= 6){
                        var left = document.getElementById('butn3');
                        left.removeEventListener('click', smallFairy);
                        left.addEventListener('click', leftSide);
                        left.innerText = 'Go Left';
                    } else {
                        //ending
                        var ending = document.getElementById('butn3');
                        ending.removeEventListener('click', smallFairy);
                        ending.addEventListener('click', ending);
                    }
                  
                }
            // } else {
            //     //left side
            //     if (questItems.length <= 6){
            //     var left = document.getElementById('butn3');
            //     left.removeEventListener('click', smallFairy);
            //     left.addEventListener('click', leftSide);
            //     left.innerText = 'Go Left';
            // } else {
            //     //ending
            //     var ending = document.getElementById('butn3');
            //     ending.removeEventListener('click', smallFairy);
            //     ending.addEventListener('click', ending);
            // }
        
        }
    }
 }
    function bigFairy() {
        var img = document.getElementById('img');
    img.src = bimages[0];
    
        questItems.push('bigTable');
        $('#butn0').css('visibility','hidden');
        $('#butn2').css('visibility','visible');
        $('#butn3').css('visibility','hidden');
    
        var big = document.getElementById('butn2');
        big.removeEventListener('click', bigFairy);
        big.addEventListener('click', bigFairy);

        big.innerText = 'continue';

        var bigTable = questItems.indexOf('bigTable');
        if(bigTable > -1){
            if(bigCounter < bigT[bigCounter].length) {
                gameScript.innerText = bigT[bigCounter];
                img.src = bimages[bigCounter];     
                bigCounter++;  
                if (gameScript.innerText == 'I\'ll take the big one.'){
                    if (questItems.length <= 6){
                        $('#butn0').css('visibility','hidden');
                        $('#butn3').css('visibility','hidden');
                        var remove = document.getElementById('butn3');
                        remove = removeEventListener('click', death);
                        var big = document.getElementById('butn2');
                        big.removeEventListener('click', bigFairy);
                        big.addEventListener('click', leftSide);
                    } else {
                        //ending
                        $('#butn0').css('visibility','hidden');
                        $('#butn3').css('visibility','hidden');
                        var remove = document.getElementById('butn3');
                        remove = removeEventListener('click', death);
                        var big = document.getElementById('butn2');
                        big.removeEventListener('click', bigFairy);
                        big.addEventListener('click', ending);
                    }
                }
        //     } else {
        //         //left side
            //     if (questItems.length <= 6){
            //     var big = document.getElementById('butn2');
            //     big.removeEventListener('click', bigFairy);
            //     big.addEventListener('click', leftSide);
            // } else {
            //     //ending
            //     var big = document.getElementById('butn2');
            //     big.removeEventListener('click', bigFairy);
            //     big.addEventListener('click', ending);
            // }
    
        // }
         }
    }
}
function ending() {
    
    
    $('#butn0').css('visibility','hidden');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    $('#butn3').css('visibility','visible');

    
    var big = document.getElementById('butn2');
    big.removeEventListener('click', bigFairy);
    var end = document.getElementById('butn3');
    end.removeEventListener('click', smallFairy);
    end.addEventListener('click', ending);
    end.innerText = 'continue';

    if(questItems.includes('sunBakedSponge') && questItems.includes('potion') && questItems.includes('lettuce') && questItems.includes('bigTable') && questItems.includes('candy')) {
        var img = document.getElementById('img');
         img.src = reimages[0];
        //wrong
        if(rightCounter < rightEnding[rightCounter].length ) {
            gameScript.innerText = rightEnding[rightCounter];
            rightCounter++;
            img.src = reimages[rightCounter];
            if (gameScript.innerText == 'Thanks for all your help. You may return now') {
                window.location.reload(false);
            }
        }
        
        } else {
            var img = document.getElementById('img');
            img.src = weimages[0];
        if(wrongCounter < wrongEnding[wrongCounter].length) {
            gameScript.innerText = wrongEnding[wrongCounter];
            wrongCounter++;
            img.src = weimages[wrongCounter];
            if (gameScript.innerText == 'You punishment is death!!') {
                window.location.reload(false);
            }
        }
    }
}



};

// need to check if they have all the items in ending/ else restart and a function for picking to small
// one ending - if all items right array else wrong
// need a new eventlistener that creates 2 buttons, switch arrays based on click
// add buttons to newButn eventlistener, but hide them until needed - 4 buttons - contuine, return, choice1, choice2
var images = [
    'media/bedroom.jpg',
    'media/firstcloud.jpg',
    'media/swirlcloud.jpg',
    'media/women.jpg',
    'media/items.jpg',
    'media/kitchenoutside.jpg',
    'media/kitchenoutside.jpg'
]

var storyStart = 
     [
         [
        'Today starts off like any other.',
        'You wake up, shower, get dressed, and head to school.',
        'While walking you notice a gray cloud in the sky.'
         ],
         [
        'You think to yourself, Maybe I\'ll get to see that weird phenomon where it only rains in one spot.',
        'You put your phone in your hand and stare at the cloud in enticaption of the rain.', 
        'After a few minutes you give up and keep waking, periodically you turn to check the cloud.', 
        'You begin to notice something strange. You ask yourself, is that cloud following me?',
        'The cloud is definitly following you. And it is getting closer.'
         ],
         [
        'You turn around and right then the cloud launches a gray funnel at you.',
        'Before you have time to run, you are sucked up into the cloud.', 
        'The exterme force of the spinning causes you to pass out.'
         ],
         [
            'You awaken to a strange women standing in front of you. Before you can ask questions she begins to talk', 
            'Welcome Hero! We are glad you arrived here safely. Sorry but there is not much time to explain.',
            'Here is a list of items you must retrieve. All of the items can be found within a 20 meter perimeter of this castle.',
            'Here is a bag to hold all of the items for your quest. You may choose 3 of these 5 objects to take with you. Choose wisely!'
         ],
         [
             'Choose 3 items'
         ],
         [
            'OK. Well should I check the kitchen or go outside?'
         ]
    ]

// will i need am image array for each section
var kitchen = [
    [
        "You look on the table and see small round balls in colorful wrapping"
    ],
    [
        
        'You smell them. They smell sweet',
        'You think "Wow candy from another world! and put a few in your pocket."',
        'There does not seem to be any thing else here. Time to go outside'
    ]
    
]
var fimages = [
    'media/kitchen.jpg',
    'media/candy.jpg'
    
]
var outside = [
    [
        'You step outside and see two paths. As you get closer you notice a little boy a the junction of the path.',
        'The little boy speaks to you.',
        'Eric: Hi, my name is Eric.',
        'Eric: Look what I got. OOOHHHH NOOOO!',
        'Eric: I thought it was candy, but this is...',
        'You look at the items in the boys hand and recognize them from the picture',
        'They\'re reaper pepper\'s!',
        'Eric: I thought these were candy. I can\'t eat this.'
    ],
    [
        'You: I have candy. I\'ll trade you for the peppers. ',
        'Eric: Yes, I love candy.',
        'You give Eric the candy and he give\'s you the peppers!'
    ],
    [
        'Should I go down the right path or left path?'
    ]
]
var oimages = [
    'media/boy.jpg',+
    'media/peppers.jpg',
    'media/field.jpg'
    
]
var outsideWrong = [
    [
        'Hmmm, I can see a little boy playing.',
        'He seems to be holding something in his hand',
        'I\'m in a hurry. No time to talk to him'
    ],
    [
        'Should I go down the right path or left path?'
    ]
]
var wimages = [
    'media/boy.jpg',
    'media/field.jpg',
    'media/field.jpg'
]

var leftPath = [
    [
        'You look ahead and see a forest.',
        'As you walk foward into the forest you see something strangely familiar',
        'I see the Sun Baked Sponge. This kinda look\'s like... No it couldn\'t be.',
        'Look\'s so soft. Should I just grab it or use something?'
    ]
]
var limages = [
    'media/forest.jpg',
    'media/forest.jpg'
    
]
var bitchYouDead = [

    'Ouch it burns. It\'s getting hotter!!',
    'Oh My **** &%$!! My hands are are on fire.',
    'I can\'t put them out!!! My clothes are on fire!! Why Can\'t I put it out!!',
    'I\'m Burning!!!! WWWHHHHYYYYY!!',
    'DEAD',
    'Start Over'
    
]
var dimages = [
    'media/firedeath.jpg',
    'media/firedeath.jpg',
    'media/firedeath.jpg',
    'media/firedeath.jpg',
    'media/firedeath.jpg',
    'media/firedeath.jpg'
]
var hasGloves = [
    'I\'ll put the gloves on the grab the Sponge',
    'I got the Sun Soaked Sponge',
    'I\'ll put in my bag.',
    'Look\'s like there might be something ahead.',
    'Should I go foward or back up the hill?'
]
var gimages = [
    'media/bread.jpg',
    'media/bread.jpg',
    'media/bread.jpg',
    'media/bread.jpg',
    'media/bread.jpg',
    'media/bread.jpg'
]

var potion = [
    [
        'You walk down a path into the lush forest',
        'Near the middle of the path you see a strange women standing stairing at a tree',
        'As you apporach, you speak to the old women'

    ],
    [
        'You: Hello, how are you today?',
        'Bloodtide: My my my, What a beautiful creature you are.',
        'You: Umm thank you. Do you know where I could get a Witch\'s Potion',
        'Bloodtide: Why yes I do. I have one. ',
        'You: Awesome! Can I a have it?',
        'Bloodtide: But it\'s not free you know',
        'Bloodtide: My what a wonderful and exotic top you have on',
        'You: This old thing. Well ...',
        'Bloodtide: Give it to me, Give it to me and I will give you the Witch\'s Potion',
        'You: You want my shirt?',
        'Bloodtide: Yes, yes, yes what a wonderful garment. OH and it smells soooooo gooooooood!'
    ],
    [
        'You: Ok, Here you go',
        'Bloodtide: Here Take it',
        'Blood tide throws the Witch\'s Potion at you',
        'Bloodtide: Now Go away!!'
    ]
    
]
var pimages = [
    'media/path.jpg',
    'media/witch.jpg',
    'media/potion.jpg',
    'media/potion.jpg'
]
var noPotion = [
    [
        'You walk down a path into the lush forest',
        'Near the middle of the path you see a strange women standing stairing at a tree',
        'As you apporach, you speak to the old women'

    ],
    [
        'You: Hello, how are you today?',
        'Bloodtide: My my my, What a beautiful creature you are.',
        'You: Umm thank you. Do you know where I could get a Witch\'s Potion',
        'Bloodtide: Why yes I do ',
        'You: Awesome! Can I a have it?',
        'Bloodtide: But it\'s not free you know',
        'Bloodtide: My what a wonderful and exotic top you have on',
        'You: This old thing. Well ...',
        'Bloodtide: Give it to me, Give it to me and I will give you the Witch\'s Potion',
        'You: You want my shirt?',
        'Bloodtide: Yes, yes, yes what a wonderful garment. OH and it smells soooooo gooooooood!'
    ],
    [
        'You: This is my only shirt.',
        'Bloodtide: Well if I can\'t have it then you can\'t the potion',
        'Bloodtide: Now Go away!!'
    ]
        
]
var nimages = [
    'media/path.jpg',
    'media/witch.jpg',
    'media/field.jpg',
    'media/field.jpg'
]
var knife = [
    ['Wow this field is beautiful.',
    ' Wait is this the Honey Sweet hair of the land?',
    'It is! The stock is pretty thick.',
    'Hmm, it\'s really tough. I think I should cut it with something.'],
    ['I\'ll use my knife.',
    'So glad I picked it.',
    'Yes, I got it.',
    'One more item checked of the list.'],
    ['You walk futher into the field',
    'After a few minutes of walking to notice something small and colorful',
    'When you get closer you see several fairies tables.',
    'There are two different sizes. A small set and a big set',
    'You: Should grab a small one or a big one?'
    ]
]
var kimages = [
    'media/lettucefield.jpg',
    'media/lettuce.jpg',
    'media/lettuce.jpg',
    'media/lettuce.jpg',
    'media/tables.jpg',
    'media/tables.jpg'
]
var noKnife = [
    ['Wow this field is beautiful.',
    ' Wait is this the Honey Sweet hair of the land?',
    'It is! The stock is pretty thick.',
    'Hmm, to tough. I think I should cut it with something.'],
    ['Darn, I don\'t have anything sharp enough to cut it',
    'No way to get it with out something to cut it with'],
    [
    'You walk futher into the field',
    'After a few minutes of walking to notice something small and colorful',
    'When you get closer you see several of the fairies tables',
    'There are two different sizes. A small set and a big set',
    'You: Should grab a small one or a big one?'
    ]
]
var knimages = [
    'media/lettucefield.jpg',
    'media/lettuce.jpg',
    'media/tables.jpg',
    'media/tables.jpg'
]

var smallT = [
    'I guess it does not matter which one I get',
    'I\'ll take the small one.'
]
var simages = [
    'media/smalltable.jpg',
    'media/smalltable.jpg'
    
]
var bigT = [
    'I guess it does not matter which one I get',
    'I\'ll take the big one.'
]
var bimages = [
    'media/bigtable.jpg',
    'media/bigtable.jpg'
    
]
var wrongEnding = [
    'You choose the wrong fairy table.',
    'You tried to kill the Queen',
    'You punishment is death!!'
    
]
var weimages = [
    'media/dead.jpg',
    'media/dead.jpg'

]
var rightEnding = [
   
    'I see you have returned',
    'Give me your bag. I\'ll check to see if you brought everything',
    'You have everything I need to create.....',
    'The queens favorite sandwhich',
    'So glad you did. That witch give\'s me the creeps',
    'Thanks for all your help. You may return now'
]
var reimages = [
    'media/women.jpg',
    'media/women.jpg',
    'media/bag.jpg',
    'media/questitems.jpg',
    'media/sandwhich.jpg',
    'media/sandwhich.jpg',
    'media/sandwhich.jpg'

]
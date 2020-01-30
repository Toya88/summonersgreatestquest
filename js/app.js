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
var forestInnerCounter = 0;
var forestOuterCounter = 0;
var potionCounter = 0;

var questItems = [];

function enter() {

    var enterButn = document.createElement("button");
    enterButn.setAttribute('class', 'enterBtn');
    enterButn.id = 'enter';
    var getWindow = document.getElementById('window');
    getWindow.appendChild(enterButn);
    enterButn.innerText = 'Start';
    enterButn.addEventListener('click', see)
    
    
    // console.log(enterButn);   
}
enter();
//buttons need to be gobal? 
for (let i = 0; i < 4; i++) {
    var button = document.createElement('button');
    button.className = 'buttons';
    button.id = 'butn' + i;
    let getWindow = document.getElementById('window');
    getWindow.appendChild(button);
    $('.buttons').css('visibility','hidden');
    // console.log(button);
    
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
            img.src = images[counterOuter]
            
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
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    // gameScript.innerText = kitchen[kitchenOuterCounter][kitchenInnerCounter];
    // kitchenInnerCounter++;
     next.addEventListener('click', clickKitchen2);
    }
    function clickKitchen2() {
        if(kitchenInnerCounter < kitchen[kitchenOuterCounter].length - 1){        
            gameScript.innerText = kitchen[kitchenOuterCounter][kitchenInnerCounter];
            kitchenInnerCounter++;
        }
        else {    
            gameScript.innerText = kitchen[kitchenOuterCounter][kitchenInnerCounter];
        //image here if you want it
        questItems.push('candy');
        $('#butn0').css('visibility','hidden');
        $('#butn1').css('visibility','visible');
        next.removeEventListener('click', clickKitchen2);
        }
        
    }

 function clickOutside(){
       $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    next.addEventListener('click', clickOutside);
    var haveCandy = questItems.indexOf("candy");

if(haveCandy > -1){
    if(outsideInnerCounter <= outside[outsideOuterCounter].length - 1){        
        gameScript.innerText = outside[outsideOuterCounter][outsideInnerCounter];
        outsideInnerCounter++;
     }
     else{
         outsideOuterCounter ++;
         outsideInnerCounter = 0;
         if(outsideOuterCounter < outside.length - 1){
         gameScript.innerText = outside[outsideOuterCounter][outsideInnerCounter];
         outsideInnerCounter++;
        }
        else{
            //next step
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
    }
    else{
        if(outsideInnerCounter <= outsideWrong[outsideOuterCounter].length - 1){        
            gameScript.innerText = outsideWrong[outsideOuterCounter][outsideInnerCounter];
            outsideInnerCounter++;
         }
         else{
             outsideOuterCounter ++;
             outsideInnerCounter=0;
             if(outsideOuterCounter < outsideWrong.length - 1){
             gameScript.innerText = outsideWrong[outsideOuterCounter][outsideInnerCounter];
             outsideInnerCounter++;
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
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    haveGloves = questItems.indexOf('gloves');
    next.removeEventListener('click', clickOutside);
    next.addEventListener('click', leftSide);

    //leftPath
    if (haveGloves > -1) {
        if (leftInnerCounter < leftPath[leftOuterCounter].length) {
            gameScript.innerText = leftPath[leftOuterCounter][leftInnerCounter];
            leftInnerCounter++;
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
    //bitchyoudead
    event.preventDefault();
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');

    next.removeEventListener('click', leftSide);
    next.addEventListener('click', death);
    // deathOuterCounter > bitchYouDead[deathOuterCounter].length
    if (deathOuterCounter < bitchYouDead[deathOuterCounter].length) {
        gameScript.innerText = bitchYouDead[deathOuterCounter];
        deathOuterCounter++;       
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

    next.removeEventListener('click', death);
    next.addEventListener('click', gloves);
    questItems.push('sunBakedSponge');

    // function useGloves() {

        if (hasGlovesCounter <= hasGloves[hasGlovesCounter].length) {
            gameScript.innerText = hasGloves[hasGlovesCounter];
            hasGlovesCounter++;
            console.log('here');

            if (gameScript.innerText == 'Should I go foward or back up the hill?' ) {
                console.log('Right');
                $('#butn0').css('visibility','hidden');
                $('#butn1').css('visibility','visible');
                $('#butn2').css('visibility','visible');
                
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
        
    // }

}
function forest() {
    
    $('#butn0').css('visibility','visible');
    $('#butn1').css('visibility','hidden');
    $('#butn2').css('visibility','hidden');
    // questItems.push('potion');

    next.removeEventListener('click', gloves);
    next.addEventListener('click', forest);

    hasShirt = questItems.indexOf('shirt');

    if (hasShirt > -1) {
        if (forestInnerCounter < witch[forestOuterCounter].length - 1) {
            gameScript.innerText = witch[forestOuterCounter][forestInnerCounter];
            forestInnerCounter++;
        } else {
            forestOuterCounter++;
            forestInnerCounter = 0;
            if (forestOuterCounter < witch.length -1) {
                gameScript.innerText = witch[forestOuterCounter][forestInnerCounter];
                forestInnerCounter++;
            } else {
                $('#butn0').css('visibility','hidden');
                $('#butn2').css('visibility','visible'); 
                
                var right = document.getElementById('butn2');
                right.innerText = 'Go Right';
                right.removeEventListener('click', clickOutside);       
                right.addEventListener('click', rightSide);
            }
        }
        
    } else {
        questItems.push('witch potion');
        if (forestInnerCounter < potion[forestOuterCounter].length - 1) {
            gameScript.innerText = potion[forestOuterCounter][forestInnerCounter];
            forestInnerCounter++;
        } else {
            forestOuterCounter++;
            forestInnerCounter = 0;
            if (forestOuterCounter < potion.length -1) {
                gameScript.innerText = potion[forestOuterCounter][forestInnerCounter];
                forestInnerCounter++;
            } else {
                $('#butn0').css('visibility','hidden');
                $('#butn2').css('visibility','visible'); 
                
                var right = document.getElementById('butn2');
                right.innerText = 'Go Right';
                right.removeEventListener('click', clickOutside);       
                right.addEventListener('click', rightSide);
            }
        }
    }


    

}

 function rightSide(){
     alert('rightSide')
 }

};
// need a new eventlistener that creates 2 buttons, switch arrays based on click
// add buttons to newButn eventlistener, but hide them until needed - 4 buttons - contuine, return, choice1, choice2

var storyStart = 
     [
         [
        'Today starts off like any other.',
        'You wake you, shower, get dressed, and head to school.',
        'While walking after you notice a gray cloud in the sky.',
        'You think to yourself, Maybe I\'ll get to see that weird phenomon where it only rains in one spot.',
        'You put your phone in your hand and stare at the cloud in enticaption of the rain.', 
        'After a few minutes you give up and keep waking, but you turn to check the cloud ever few minutes.', 
        'You begin to notice something strange. You ask yourself, is that cloud following me?',
        'The cloud is definitly following you. And it is getting closer.',
        'You turn and stair and right then the cloud launches a gray funnel at you.',
        'Before you have time to run, you are sucked up into the cloud.', 
        'The exterme force of the spinning causes you to pass out.',
        
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
            'Should I check the kitchen or go outside?'
         ]
    ]

var images = [
    'media/gameFonts.png',
    'media/gameFonts.png',
    'media/gameFonts.png',
    'media/gameFonts.png',
]
// will i need am image array for each section
var kitchen = [
    //kitchen
    [
        "You look on the table and see small round balls in colorful wrapping",
        'You smell them and they smell sweet',
        'You think "Wow candy from another world! and put a few in your pocket"',
        'There does not seem to be any thing else here. Time to go outside'
    ]
]
var outside = [
    [
        'You step outside and see two paths. As you get closer you notice a little boy a the junction of the path.',
        'The little boy speaks to you.',
        'Hi, my name is Eric.',
        'Look what I got. OOOHHHH NOOOO!',
        'I thought it was candy, but this is...',
        'You look at the items in the boys hand and recognize them from the picture',
        'They\'re reaper pepper\'s!',
        'Eric: I thought these were candy. I can\'t eat this.'
    ],
    [
        'You say to Eric: I have candy. I\'ll trade you for the peppers. ',
        'Yes, I love candy.',
        'You give Eric the candy and he give\'s you the peppers!'
    ],
    [
        'Should I go down the right path or left path?'
    ]
]

var outsideWrong = [
    [
        'Waste of time'
    ]
]

var leftPath = [
    [
        'Wow this field is beautiful. Wait is this the Honey Sweet hair of the land?',
        'It is! The stock is pretty thick. Don\'t think I use my hands to get it.',
        'Hmm, to tough. I think I should cut it with something.',
        'Yes, I got it.',
        'That\'s a pretty steep hill. I wonder what\'s at the end of this field.',
        'There\'s nothing here. Darn I wasted 20 minutes getting here.',
        'I made it to the top of the hill',
        'I see the Sun Baked Sponge. This kinda look\'s like... No it couldn\'t be.',
        'Look\'s so soft. Should I just grab it or use something?'
    ]
]

var bitchYouDead = [

    'Ouch it burns. It\'s getting hotter!!',
    'Oh My **** &%$!! My hands are are on fire.',
    'I can\'t put them out!!! My clothes are on fire!! Why Can\'t I put it out!!',
    'I\'m Burning!!!! WWWHHHHYYYYY!!',
    'DEAD',
    'Start Over'
    
]
var hasGloves = [
    'I\'ll put the gloves on the grab the Sponge',
    'I got the Sun Soaked Sponge',
    'I\'ll put in my bag.',
    'Look\'s like there might be something ahead.',
    'Should I go foward or back up the hill?'
]

var witch = [
    [
        'You walk down a path into a lush forest',
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
        'Bloodtide: Yes, yes, yes what a wonderful garment. OH and it smells soooooo gooooooood!',
        'Should I give her my shirt?'
    ],
    [
        'You: This is my only shirt.',
        'Bloodtide: Well if I can\'t have it then you can\'t the potion',
        'Bloodtide: Now Go away!!'
    ]
    
]

var potion = [
        'You: Ok, Here you go',
        'Bloodtide: Here Take them',
        'Blood tide throws the Witch\'s Potion at you',
        'Bloodtide: Now Go away!!'
]

var rightPath = [

]




//     },
//     rightPath = {
//         forestPath: 'What I wonderful forest. So many plants I\'ve never seen before',
//         forestRock: 'There is a rock in front of the Super Rare Blue Fairies-Table. I should search over there where those rocks are.',
//         forestFind: 'Jackpot! I found 2 Fairies-Tables. One seems to be bigger then the other. Which one should I take?',
//         smallTable: 'Guess I\'ll take the smaller one.',
//         bigTable: 'Definitely taking the big table.',
        
//     },
//     castleEnd = {
//         returnToCastleI : 'I think it\'s time to '
//     },
//     returnAfterDeath = {
//         returnOne: 'Did I die?',
//         returnBoy: 'Am I a boy?',
//         returnGirl: 'Am I a girl?',
//         returnName: 'Wait why does she already know my name?',

//     },

/*
*Create a start or enter screen 
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

*/
// canvas
var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 300;


var questItems = [];

// buttons
var firstButn = document.querySelector('[data-butn="firstButn"]');
var secondButn = document.querySelector('[data-butn="secoundButn"]');
var returnButn = document.querySelector('[data-butn="return"]');


var buttonEventsOne = [
    'Continue',
    'Leave Castle',
    'Take Item',
];

var buttonEventsTwo = [
    'Check Out the Kitchen',
    'Return to other room',
];

firstButn.innerText = buttonEventsOne[0];
secondButn.innerText = buttonEventsTwo[0];

// story 
var gameScript = document.getElementById('gameScript');
var storyText = {
    beginning : {
        alstaffLineOne: 'Welcome Hero! We are glad you arrived here safely. Sorry but there is not much time to explain. Here is a list of items you must retrieve. All of the items can be found within a 20 meter perimeter of this castle.',
        alstaffLineTwo: 'Here is a bag to hold all of the items for your quest. You may choose 3 of these 5 objects to take with you. Choose wisely!',
        alstaffLineThree: 'You are now ready for your quest. Once you have collected all the items on the list, return at once to this castle! Here is your list - now go and return quickly!!',
        alstaffLineFour: '',
        fifth: 'Would you',

    },
    littleBoy : {
        ericLineOne: '',
        ericLineOne: '',
        ericLineOne: '',
        ericLineOne: '',
        ericLineOne: '',
        ericLineOne: '',
        ericLineOne: '',
        ericLineOne: '',
        ericLineOne: '',
    },
    witch : {
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
        bloodtideLineOne: '',
    },
    ruler : {
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
        rulerLineOne: '',
    }
    
};

var heroText = {
    castleStart : {
        heroLineOne: 'Should I check the kitchen or go outside?',
        heroLineTwo: 'This candy looks good! Should I take it with me or eat it?',
        heroLineThree: 'Nothing left here. Time to go.',
        heroLineFour: 'Where to start, Right or Left',

    },
    leftPath : {
        
    },
    rightPath : {
        
    }
    
}

// game flow
gameScript.innerText = storyText.beginning.second;


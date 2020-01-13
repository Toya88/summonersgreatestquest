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

var questItems = [];

// buttons
var firstButn = document.querySelector('[data-butn="firstButn"]');
var secondButn = document.querySelector('[data-butn="secoundButn"]');
var returnButn = document.querySelector('[data-butn="return"]');


var buttonEventsOne = {
    optionOne: 'Leave Castle',
    optionTwo: 'Take Item',
    optionThree: '',
    optionFour: '',
    optionFive: '',
    optionSix: '',
    optionSeven: '',
    optionEight: '',
    optionNine: '',
    optionTen: '',
    optionEleven: '',
    optionTweleve: '',
};
var buttonEventsTwo = {
    optionOne: 'Check Out Kitchen',
    optionTwo: 'Return to other room',
    optionThree: '',
    optionFour: '',
    optionFive: '',
    optionSix: '',
    optionSeven: '',
    optionEight: '',
    optionNine: '',
    optionTen: '',
    optionEleven: '',
    optionTweleve: '',

};

firstButn.innerText = 'Right';
secondButn.innerText = 'Left';

// story 
var gameScript = document.getElementById('gameScript');
var storyText = {
    beginning : {
        first: 'Welcome Hero! We are glad you arrived here safely. Sorry but there is not much time to explain. Here is a list of items you must retrieve. All of the items can be found within a 20 meter perimeter of this castle.',
        second: 'Here is a bag to hold all of the items for your quest. You may choose 3 of these 5 objects to take with you. Choose wisely!',
        third: 'You are now ready for your quest. Once you have collected all the items on the list, return at once to this castle! Here is your list - now go and return quickly!!',
        fourth: '',
        fifth: 'Would you',

    },
    
};

var heroText = {
    castleStart : {
        first: 'Should I check the kitchen or go outside?',
        second: 'This candy looks good! Should I take it with me or eat it?',
        third: 'Nothing left here. Time to go.',
        fourth: 'Where to start, Right or Left',

    },
    leftPath : {
        
    },
    rightPath : {
        
    }
    
}

// game flow
gameText.innerText = storyText.beginning.second;

// canvas
var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 300;
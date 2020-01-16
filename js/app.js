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
    'Use Hand\'s',
    'Go up Hill',
    'Walk further up the trail',
    'Take Big Table',

];

var buttonEventsTwo = [
    'Check Out the Kitchen',
    'Return',
    'Use Knife',
    'Go to edge of field',
    'Put on gloves',
    'Take Small Table',
];

firstButn.innerText = buttonEventsOne[0];
secondButn.innerText = buttonEventsTwo[0];

// story 
var gameScript = document.getElementById('gameScript');
var storyText = {
    beginning : {
        alstaffWelcomeLine: 'Welcome Hero! We are glad you arrived here safely. Sorry but there is not much time to explain. Here is a list of items you must retrieve. All of the items can be found within a 20 meter perimeter of this castle.',
        alstaffBagLine: 'Here is a bag to hold all of the items for your quest. You may choose 3 of these 5 objects to take with you. Choose wisely!',
        alstaffPictureLine: 'Here are pictures of the items to help you identify them.',
        alstaffReadyLine: 'You are now ready for your quest. Once you have collected all the items on the list, return at once to this castle! Here is your list - now go and return quickly!!',
        fifth: 'Would you',

    },
    littleBoy : {
        ericHiLine: 'Hi there.',
        eric: 'I thought I was grabbing candy but these are Super Hot Reaper Peppers',
        eric: 'I really want some candy',
        eric: 'Yes, Yes, Yes!',
        eric: 'Here you go.',
        eric: 'Ummmm, this is so good',
        eric: 'I hope my mom does not find out I took those peppers',
        eric: '',
        eric: '',
    },
    witch : {
        bloodtide: 'My my my, What a beautiful creature you are.',
        bloodtide: 'Why yes I do ',
        bloodtide: 'But it\'s not free you know',
        bloodtide: 'My what a wonderful and exotic top you have on',
        bloodtide: 'Give it to me, Give it to me and I will give you the ___',
        bloodtide: 'Yes, yes, yes what a wonderful garment. OH and it smells soooooo gooooooood!',
        bloodtide: 'Go away now!!',
        bloodtide: '',
        bloodtide: '',
        bloodtide: '',
        bloodtide: '',
    },
    ruler : {
        ruler: '',
        ruler: '',
        ruler: '',
        ruler: '',
        ruler: '',
        ruler: '',
        ruler: '',
        ruler: '',
        ruler: '',
        ruler: '',
    },
    end : {

    }
    
};

var heroText = {
    castleStart : {
        heroCastleOne: 'Should I check the kitchen or go outside?',
        heroCastleTwo: 'This candy looks good! Should I take it with me or eat it?',
        heroCastleThree: 'Nothing left here. Time to go.',
        heroCastleFour: 'Where to start, Right or Left',

    },

    leftPath : {
        lPathOne: 'Wow this field is beautiful. Wait is this the Honey Sweet hair of the land?',
        lPathTwo: 'It is! The stock is pretty thick. Don\'t think I use my hands to get it.',
        lPathThree: 'Hmm, to tough. I think I should cut it with something.',
        lPathFour: 'Yes, I got it.',
        lPathFive: 'That\'s a pretty steep hill. I wonder what\'s at the end of this field.',
        search: {
            fieldEnd: 'There\'s nothing here. Darn I wasted 20 minutes getting here.',
            hillTop: 'I made it to the top of the hill',
            hillFind: 'I see the Sun Baked Sponge. This kinda look\'s like... No I couldn\'t be.',
            hillGrab: 'Look\'s so soft. Should I just grab it or use something?',
            hillHand: 'Ouch it burns. It\'s getting hotter!! Oh My **** &%$!! My hands are are on fire. I can\'t put them out!!! My clothes are on fire!! Why Can\'t I put it out!! WWWHHHHYYYYY!!',
            hillGloves: 'Now I have the Sun Baked Sponge',
        },

    },
    rightPath : {
        forestPath: 'What I wonderful forest. So many plants I\'ve never seen before',
        forestRock: 'There is a rock in front of the Super Rare Blue Fairies-Table. I should search over there where those rocks are.',
        forestFind: 'Jackpot! I found 2 Fairies-Tables. One seems to be bigger then the other. Which one should I take?',
        smallTable: 'Guess I\'ll take the smaller one.',
        bigTable: 'Definitely taking the big table.',
        
    },
    castleEnd : {
        returnToCastleI : 'I think it\'s time to '
    },
    returnAfterDeath : {
        returnOne: 'Did I die?',
        returnBoy: 'Am I a boy?',
        returnGirl: 'Am I a girl?',
        returnName: 'Wait why does she already know my name?',

    }
    
}

// game flow
gameScript.innerText = storyText.beginning.alstaffWelcomeLine;


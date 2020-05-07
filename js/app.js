const sectionGreeting = document.querySelector('.greeting');
const sectionGameField = document.querySelector('.game-field');
const sectionCongratulation = document.querySelector('.congratulation');
const buttonPlay = document.querySelector('.play');
const buttonBack = document.querySelector('.back');
const buttonRestart = document.querySelector('.restart');
const cards = document.querySelector('.cards');
const openCardImage = [
	'white url("images/фехтаванне1.png") no-repeat',
	'white url("images/стральба з лука1.png") no-repeat',
	'white url("images/амерыканскі футбол1.png") no-repeat',
	'white url("images/біатлон1.png") no-repeat',
	'white url("images/валейбол1.png") no-repeat',
	'white url("images/воднае поло1.png") no-repeat',
	'white url("images/гімнастыка1.png") no-repeat',
	'white url("images/грэбля1.png") no-repeat',
	'white url("images/мастацкая гімнастыка1.png") no-repeat',
	'white url("images/плаванне1.png") no-repeat',
	'white url("images/спартыўная гімнастыка1.png") no-repeat',
	'white url("images/цяжкая атлетыка1.png") no-repeat'
]
let firstOpen;

let secondOpen;

let openCardsName;


buttonPlay.addEventListener('click', function () {
	sectionGreeting.style.display = 'none';
	sectionGameField.style.display = 'block';
});

let start = function(){
	openCardsName = [];
	cards.innerHTML = '';
	
	let arrayId = fillArray();
	
	for(let i=0;i<12;i++){
		const card = document.createElement('li');
		card.classList.add('card','shirt-color-1');
		card.setAttribute('id',arrayId[i]);
		cards.appendChild(card);
	}
};

buttonPlay.addEventListener('click', start);

buttonBack.addEventListener('click', function () {
	sectionGreeting.style.display = 'block';
	sectionGameField.style.display = 'none';
});

buttonRestart.addEventListener('click', function () {
	sectionGreeting.style.display = 'none';
	sectionGameField.style.display = 'block';
});

let compareCheckCards = function(firstOpen,secondOpen) {
	if(openCardsName.length === 2 && openCardsName[0] === openCardsName[1]){
		firstOpen.classList.add('disappearance');
		secondOpen.classList.add('disappearance');
		openCardsName = [];
		firstOpen = 0;
	}
	else if(openCardsName.length === 2 && openCardsName[0] !== openCardsName[1]){
		setTimeout(function(){
			
		firstOpen.removeAttribute("style");
		secondOpen.removeAttribute("style");
		
		}, 1000)
	};
	
	
};

let displayCard=function(e){
if (e.target.tagName !== "LI") return;
	e.target.style.background = openCardImage[e.target.id];
	e.target.style.backgroundSize = 'cover';
	e.target.classList.add('rotation-effect');
	
	openCardsName.push(e.target.getAttribute("id")); console.log(openCardsName);
	
	if(!firstOpen) {
	firstOpen = e.target; console.log(firstOpen);
	
	}
	else {
		secondOpen = e.target; console.log(secondOpen);
	};
	compareCheckCards(firstOpen,secondOpen);
	
	
};

cards.addEventListener('click', displayCard);


let fillArray = function(){
	let array = [];
	for (i = 1; i < 13; i++) {
	array.push((i%6)+1);

	}
	
	function compareNumeric() {
		return (Math.random()-0.5);
}
	array.sort(compareNumeric);
	
	return array;
	
};

console.log(fillArray());
const sectionGreeting = document.querySelector('.greeting');
const sectionGameField = document.querySelector('.game-field');
const sectionCongratulation = document.querySelector('.congratulation');
const buttonPlay = document.querySelector('.play');
const buttonBack = document.querySelector('.back');
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
let start = function(){
	for(let i=0;i<12;i++){
		const card = document.createElement('li');
		card.classList.add('card','shirt-color-1');
		card.setAttribute('id',i);
		cards.appendChild(card);
	}
}
buttonPlay.addEventListener('click', function () {
	sectionGreeting.style.display = 'none';
	sectionGameField.style.display = 'block';
});
buttonPlay.addEventListener('click', start);

let displayCard=function(e){
	e.target.slyle.background = 'white url("images/фехтаванне1.png") no-repeat';
	e.target.slyle.backgroundSize = 'cover';
}

cards.addEventListener('click', displayCard);

buttonBack.addEventListener('click', function () {
	sectionGreeting.style.display = 'block';
	sectionGameField.style.display = 'none';
});
let fillArray = function(){
	let array = [];
	for(let i=1;i<13;i++){
		array.push((i%6)+1);
	}
	array.sort(function(){return(Math.random()-0.5)});
	return array;
}
console.log(fillArray());
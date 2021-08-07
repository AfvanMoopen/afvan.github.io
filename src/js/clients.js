import {TimelineMax} from 'gsap';

const texts = [
'4 years.',
'1,460 days.',
'35040 hours.',
'2.102e+6 mins.',
'1.261e+8 sec.',
'fun.',
'ages!']


function ChangeDurationText(){
	const tl = new TimelineMax();
	const durationTxt = document.querySelector('.clients__header__duration');

	// Take the new element and move it to the end of the array
	const newTxt = texts.shift();
	texts.push(newTxt);

	durationTxt.innerText = newTxt;

	setTimeout(()=>{
		ChangeDurationText();
	},2000)
}



ChangeDurationText();








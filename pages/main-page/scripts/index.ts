import ForestrySlider from "./module/ForestrySlider"
import { Forestry } from "./module/typeForestry"

window.onload = () => {
	const back = document.querySelector('#forestry-slider-back')!;
	const future = document.querySelector('#forestry-slider-future')!;
	const sliderFor = document.querySelector('.forestry')!;
	const dd : Array<Forestry>= [
		{
			name : 'Волмянское лесничество',
			description : 'Волмянское лесничество Государственного лесохозяйственного учреждения "Минский лесхоз" расположено в западной его части на территории Дзержинского района Минской области.',
			bg : 'pages/main-page/img/card__background.png',
		},
		{
			name : 'qwq лесничество',
			description : 'Волмянское лесничество Государственного лесохозяйственного учреждения "Минский лесхоз" расположено в западной его части на территории Дзержинского района Минской области.',
			bg : 'pages/main-page/img/card__background.png',
		},
		{
			name : 'qwq лесничество',
			description : 'Волмянское лесничество Государственного лесохозяйственного учреждения "Минский лесхоз" расположено в западной его части на территории Дзержинского района Минской области.',
			bg : 'pages/main-page/img/card__background',
		},

	]
	const slider = new ForestrySlider(dd, back, future, sliderFor);
}
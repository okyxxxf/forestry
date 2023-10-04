import Slider from "./Slider";

class ForestrySlider extends Slider {
  public slider : HTMLElement;

  constructor (slides : Array<object>, prevSlideButton : HTMLElement, nextSlideButton : HTMLElement, slider : HTMLElement) {
    super(slides, prevSlideButton, nextSlideButton);
    this.slider = slider;
  }

  changeSlide () : void {
    
    this.slider.innerHTML = `
    <div class="forestry">
      <div class="forestry__info">
        <h3 class="forestry__h3 h3 bold"></h3>
        <p class="p forestry__p regular">Волмянское лесничество Государственного лесохозяйственного учреждения "Минский лесхоз" расположено в западной его части на территории Дзержинского района Минской области.</p                <div class="button-wrapper">
        <button class="button forestry__button p" type="button">Подробнее</button>
      </div>
    </div>
    `
  }
}
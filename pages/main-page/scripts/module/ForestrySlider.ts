import Slider from "./Slider";
import { Forestry } from "./typeForestry";

class ForestrySlider extends Slider {
  public slider : Element;

  constructor (slides : Array<Forestry>, prevSlideButton : Element, nextSlideButton : Element, slider : Element) {
    super(slides, prevSlideButton, nextSlideButton);
    this.slider = slider;
    this.prevSlideButton.addEventListener('click', () => this.changeSlide());
    this.nextSlideButton.addEventListener('click', () => this.changeSlide());
  }

  private changeSlide () : void {
    const {name, description, bg} = this.slides[this.currentSlide];
    this.slider.innerHTML = `
    <div class="forestry" style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${bg}), lightgray 50%/cover no-repeat;">
      <div class="forestry__info">
        <h3 class="forestry__h3 h3 bold">${name}</h3>
        <p class="p forestry__p regular">${description}</p>
        <div class="button-wrapper">
          <button class="button forestry__button p" type="button">Подробнее</button>
        </div>
      </div>
    </div>
    `
  }
}

export default ForestrySlider;
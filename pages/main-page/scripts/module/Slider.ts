import { Forestry } from "./typeForestry";

abstract class Slider {
  protected slides : Array<Forestry>;
  protected currentSlide : number = 0;
  protected prevSlideButton : Element;
  protected nextSlideButton : Element;

  constructor (slides : Array<Forestry>, prevSlideButton : Element, nextSlideButton : Element) {
    this.slides = slides;
    this.prevSlideButton = prevSlideButton;
    this.nextSlideButton = nextSlideButton;
    this.configButtons();
  }

  protected nextSlide () : number {
    if (this.currentSlide === this.slides.length - 1) {
      this.currentSlide = 0;
      return 0;
    }
    return this.currentSlide++;
  }

  protected prevSlide () : number {
    if (this.currentSlide === 0 ) return this.currentSlide = this.slides.length - 1;
    return this.currentSlide--;
  }

  private configButtons () : void {
    this.prevSlideButton.addEventListener('click', () => this.prevSlide());
    this.nextSlideButton.addEventListener('click', () => this.nextSlide());
  }
}

export default Slider;
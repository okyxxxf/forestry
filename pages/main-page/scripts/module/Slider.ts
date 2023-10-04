abstract class Slider {
  private slides : Array<object>;
  public currentSlide : number = 0;
  private prevSlideButton : HTMLElement;
  private nextSlideButton : HTMLElement;

  constructor (slides : Array<object>, prevSlideButton : HTMLElement, nextSlideButton : HTMLElement) {
    this.slides = slides;
    this.prevSlideButton = prevSlideButton;
    this.nextSlideButton = nextSlideButton;
    this.configButtons();
  }

  private nextSlide () : number {
    if (this.currentSlide === this.slides.length) return this.currentSlide = 0;
    return this.currentSlide++;
  }

  private prevSlide () : number {
    if (this.currentSlide === 0 ) return this.currentSlide = this.slides.length - 1;
    return this.currentSlide--;
  }

  private configButtons () : void {
    this.prevSlideButton.addEventListener('click', () => this.prevSlide());
    this.nextSlideButton.addEventListener('click', () => this.nextSlide())
  }
}

export default Slider;
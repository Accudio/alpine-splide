import SplideLib from "@splidejs/splide";

export function Splide( opts = {} ) {
  return {
    config: {
      options: {},
      buildMarkup: false,
      ...opts,
    },
    splide: null,

    get index() {
      return this.splide ? this.splide.index : 0
    },

    init() {
      this.splideInit();
    },

    splideInit() {
      let el = this.$root;

      // if there's a ref of 'slider' then use that instead of root el
      if ( this.$refs.slider ) {
        el = this.$refs.slider;
      }

      // construct markup if specified
      if ( this.config.buildMarkup ) {
        this.buildMarkup( el );
      }

      // initialise splide
      this.splide = new SplideLib( el, this.config.options );

      // mount
      this.splide.mount();
    },

    buildMarkup( el ) {
      // add class to parent element
      el.classList.add( 'splide' );

      // add classes to slides
      const slides = [ ...el.children ];
      slides.forEach( slide => {
        slide.classList.add( 'splide__slide' );
      } );

      // get HTML of parent element so we can wrap it with new elements
      const originalHtml = el.innerHTML;

      // check if we should use ul or div
      const usesLi = el.firstElementChild.tagName === 'LI';
      const listEl = usesLi ? 'ul' : 'div';

      el.innerHTML = `<div class="splide__track"><${listEl} class="splide__list">${originalHtml}</${listEl}></div>`;
    },
  };
}

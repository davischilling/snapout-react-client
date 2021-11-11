import jQuery from 'jquery';

jQuery(document).ready(function ($) {
  'use strict';

  // MASTER SLIDER START
  VolcannoInclude.masterSliderInit("masterslider-band");

  // INCLUDE LATEST PORTFOLIO CAROUSEL
  VolcannoInclude.owlCarouselInit('latest-portfolio-carousel');

  // INCLUDE LATEST POSTS CAROUSEL
  VolcannoInclude.owlCarouselInit('latest-posts-carousel-03');

  // FOOTER NEWSLETTER
  VolcannoInclude.magnificPopupInit('newsletter-popup');

  // AUDIO POPUP
  VolcannoInclude.magnificPopupInit('audio-popup');
});
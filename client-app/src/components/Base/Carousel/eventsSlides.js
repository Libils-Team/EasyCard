/* eslint-disable no-unused-vars */
export const eventsSlides = function () {
  const mousedown = (e) => {
    console.log("Mousedown on slide", e);
  };

  const mousemove = () => {};

  const mouseup = (e) => {
    console.log("Mouseup on slide", e);
  };

  const ungenerateSlideEvent = (slide, eventName, callback) => {
    slide.removeEventListener(eventName, callback);
  };

  const generateSlideEvent = (slide, eventName, callback) => {
    slide.addEventListener(eventName, callback);
  };

  const deserve = () => {
    this.sliders.forEach((slide) => {
      ungenerateSlideEvent(slide, "mouseup", mouseup);
      ungenerateSlideEvent(slide, "mousedown", mousedown);
      ungenerateSlideEvent(slide, "mousemove", mousemove);
    });
  };

  const init = () => {
    this.sliders.forEach((slide) => {
      generateSlideEvent(slide, "mouseup", mouseup);
      generateSlideEvent(slide, "mousedown", mousedown);
      generateSlideEvent(slide, "mousemove", mousemove);
    });
  };
};

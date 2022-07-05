var controller = new ScrollMagic.Controller();

jQuery(".project").each(function () {
  var ourScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    duration: "100%",
    triggerHook: 0.8,
  })
    .setClassToggle(this, "fade-in")
    .addTo(controller);
});

jQuery(".project-left").each(function () {
  var ourScenedos = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
  })
    .setClassToggle(this, "fade-left")
    .addTo(controller);
});
jQuery(".project-down").each(function () {
  var ourScenedos = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
  })
    .setClassToggle(this, "fade-up")
    .addTo(controller);
});

jQuery(".project-right").each(function () {
  var ourScenetres = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    triggerHook: 0.65,
  })
    .setClassToggle(this, "fade-right")
    .addTo(controller);
});

jQuery(".project-zoom").each(function () {
  var ourScenezoom = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
  })
    .setClassToggle(this, "zoom-in")
    .addTo(controller);
});

jQuery(".project-zoom_dos").each(function () {
  var ourScenezoomdos = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
    delay: 0.5,
  })
    .setClassToggle(this, "zoom-in")
    .addTo(controller);
});

jQuery(".project-zoom_tres").each(function () {
  var ourScenezoomtres = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
    duration: "0%",
  })
    .setClassToggle(this, "zoom-in")
    .addTo(controller);
});

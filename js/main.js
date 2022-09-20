var controller = new ScrollMagic.Controller();

const proyectosCajaButton = document.querySelectorAll(
  ".main__proyectoscolumnas-caja__leermas button"
);

const proyectosCaja = document.querySelectorAll(
  ".main__proyectoscolumnas-caja__overlay"
);
const modalProyectos = document.querySelectorAll(
  ".main__proyectoscolumnas-caja__modalleermas"
);

const buttonCerrarProyecto = document.querySelectorAll(
  ".main__proyectoscolumnas-caja__modalleermas-botoncerrar"
);

const buttoresponsive = document.getElementById("menuResponsive");
const headermovil = document.querySelector("body .header__menu");

buttoresponsive.addEventListener("click", () => {
    headermovil.classList.toggle("activo");
})

proyectosCaja.forEach((proyecto) => {
  proyecto.addEventListener("click", () => {
    modalProyectos.forEach((modalproyecto) => {
      if (proyecto.dataset.proyectos === modalproyecto.dataset.proyectos) {
        modalproyecto.classList.add("activo");
      }
    });
  });
  buttonCerrarProyecto.forEach((cerrarProyecto) => {
    cerrarProyecto.addEventListener("click", (e) => {
      modalProyectos.forEach((modalproyecto) => {
        if (proyecto.dataset.proyectos === modalproyecto.dataset.proyectos) {
          modalproyecto.classList.remove("activo");
        }
      });
    });
  });
});

proyectosCajaButton.forEach((proyecto) => {
  proyecto.addEventListener("click", () => {
    modalProyectos.forEach((modalproyecto) => {
      if (proyecto.dataset.proyectos === modalproyecto.dataset.proyectos) {
        modalproyecto.classList.add("activo");
      }
    });
  });
});
// SCROLL PARALLAX

jQuery(".project").each(function () {
  var ourScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    duration: "100%",
    triggerHook: 0.8,
  })
    .setClassToggle(this, "fade-in")
    .addTo(controller);
});

jQuery(".bcg-parallax").each(function () {
  var parallaxTl = new TimelineMax();
  parallaxTl.from(
    this.children[0],
    0.5,
    { y: "-50%", ease: Power0.easeNone },
    0
  );

  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
    duration: "200%",
  })
    .setTween(parallaxTl)
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

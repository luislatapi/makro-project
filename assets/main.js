// ⚙️ Cambia este número por el WhatsApp de Makro Project (código de país + número, sin espacios ni "+")
const WHATSAPP = "520000000000";

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Botones "Cotizar X" preseleccionan el servicio en el formulario
const select = document.querySelector('[data-contact] select[name="servicio"]');
document.querySelectorAll("[data-service]").forEach((btn) =>
  btn.addEventListener("click", () => {
    if (select) select.value = btn.dataset.service;
  })
);

// Formulario → WhatsApp
document.querySelectorAll("[data-contact]").forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const msg =
      `Hola Makro Project, soy ${d.get("nombre")}.\n` +
      (d.get("servicio") ? `Me interesa: ${d.get("servicio")}.\n` : "") +
      `\n${d.get("mensaje")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  })
);

// Año en el footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Animación de aparición
if ("IntersectionObserver" in window) {
  const els = document.querySelectorAll(".cat, .svc, .steps li, .detail-in > *, .sec-head");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.12 }
  );
  els.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

const menuButton = document.querySelector("nav button");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("hide");
});

function handleResize() {
    if (window.innerWidth >= 1000) {
        navList.classList.remove("hide");
    } else {
        if (!navList.classList.contains("hide")) {
            navList.classList.add("hide");
        }
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<dialog class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </dialog>`;
}

function viewHandler(event) {
    const clickedImage = event.target.closest('img');
    if (!clickedImage) return;

    const src = clickedImage.src;
    const newSrc = src.split('-')[0] + '-full.jpeg';

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, clickedImage.alt));
    
    const dialog = document.querySelector('.viewer');
    dialog.showModal();

    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", () => {
        dialog.close();
        dialog.remove();
    });

    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close();
            dialog.remove();
        }
    });
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
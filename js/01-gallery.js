import { galleryItems } from "./gallery-items.js"
// Change code below this line

const gallery = document.querySelector(".gallery")

const markup = galleryItems
  .map(
    (image) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
            data-source="${image.original}"
            />
        </a>
        </div>`
  )
  .join("")

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return
  }

  event.preventDefault()

  const modalBox = basicLightbox.create(
    `<div class="modal"><img src="${event.target.dataset.source}" width="800" height="600"></div>`
  )

  modalBox.show()

  const closeModalBox = function (event) {
    if (event.key !== "Escape") {
      return
    }

    modalBox.close(document.removeEventListener("keydown", closeModalBox))
  }

  document.addEventListener("keydown", closeModalBox)
}

gallery.insertAdjacentHTML("afterbegin", markup)
gallery.addEventListener("click", selectImage)

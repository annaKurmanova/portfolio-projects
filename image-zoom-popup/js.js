let imageModal = document.querySelector(".image-modal");
let imageInModal = document.querySelector(".image-in-modal").src;
let imageInModalLinkToImage = document.querySelector(".main-image");
let imageModalInnerContent = document.querySelector(
    ".image-modal-inner-content"
);
let imageModalClose = document.querySelector(".image-modal-close");
let documentBody = document.body;

imageInModalLinkToImage.addEventListener("click", openImageModal);
imageModalClose.addEventListener("click", closeImageModal);
imageModal.addEventListener("click", closeImageModal);

function openImageModal() {
    documentBody.classList.add("image-modal-open");

    imageModal.classList.add("active-image-modal");
    imageModalInnerContent.style.backgroundImage = `url(${imageInModal})`;
    imageModalInnerContent.style.backgroundRepeat = "no-repeat";
    imageModalInnerContent.style.backgroundSize = "contain";
    imageModalInnerContent.style.backgroundPosition = "center";
}

function closeImageModal(e) {
    if (e.target != imageModalInnerContent) {
        imageModal.classList.remove("active-image-modal");
        documentBody.classList.remove("image-modal-open");
    }
}

const imagePreviewContainer = document.querySelector(
  '#image-preview-container'
);

export const preview = () => {
  const inputImageFile = document.querySelector('#input-image-file');

  if (inputImageFile) {
    imagePreviewer(inputImageFile);
  }
};

function imagePreviewer(element) {
  element.addEventListener('change', (e) => {
    const file = e.currentTarget.files[0];

    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        imagePreviewContainer.hidden = false;
        const preview = document.querySelector('#image-preview');
        preview.src = e.currentTarget.result;
      });
      reader.readAsDataURL(file);
    } else {
      imagePreviewContainer.hidden = true;
    }
  });
}

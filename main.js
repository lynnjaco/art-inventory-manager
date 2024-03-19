// ADD NEW PRODUCT FORM
const addProductForm = document.querySelector("#add-product-form");

// form inputs
const productName = addProductForm.productName;
const productImage = addProductForm.productImage;
const basePrice = addProductForm.addProductForm;

// option selections
const canvasOptions = document.querySelector("#canvas-sizes");
const canvasCheck = document.querySelector("#canvasOptionCheck");
const canvasSelection = document.querySelector("#canvas-selction");
const smallCanvasOption = addProductForm.canvasSmall;
const mediumCanvasOption = addProductForm.canvasMedium;
const largeCanvasOption = addProductForm.canvasLarge;

const originalEditionOption = addProductForm.theOriginal;
const originalCheck = document.querySelector("#originalOptionCheck");

const photoOptions = document.querySelector("#photo-sizes");
const photoCheck = document.querySelector("#photoOptionCheck");
const smallPhotoOption = addProductForm.photoSmall;
const mediumPhotoOption = addProductForm.photoMedium;
const largePhotoOption = addProductForm.photoLarge;

const productDescription = addProductForm.productDescription;

// form submit button
const submitButton = document.querySelector("#add-product-button");

// NEW PRODUCT PREVIEW
const previewListingName = document.querySelector("#listing-name");
const previewProductImage = document.querySelector("#image-preview");
const previewProductDesc = document.querySelector("#listing-description");

// option price preview parent containers
const canvasOptionPreview = document.querySelector("#canvas-inventory-preview");
const originalOptionPreview = document.querySelector("#original-inventory-preview");
const photoOptionPreview = document.querySelector("#photo-inventory-preview");

// option price previews
const smallCanvasPreview = document.querySelector("#sc-preview");
const mediumCanvasPreview = document.querySelector("#mc-preview");
const largeCanvasPreview = document.querySelector("#lc-preview");

const originalPreview = document.querySelector("#original-price");

const smallPhotoPreview = document.querySelector("#sp-preview");
const mediumPhotoPreview = document.querySelector("#mp-preview");
const largePhotoPreview = document.querySelector("#lp-preview");

// TOTAL INVENTORY VALUE
const totalInventoryValue = document.querySelector("#total-value");
const productInventoryTemplate = document.querySelector("#product-inventory-div").content;
const productTemplateCopy = document.importNode(productInventoryTemplate, true);

// live transferring form data to preview data
productName.addEventListener('input', (e) => {
    previewListingName.innerHTML = `"${e.target.value}"`;
    e.preventDefault();
}) 

productImage.addEventListener('input', (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    previewProductImage.style.backgroundImage = "url(" + url + ")";
    e.preventDefault();
}) 

productDescription.addEventListener('input', (e) => {
    previewProductDesc.innerHTML = e.target.value;
    e.preventDefault();
}) 

// engage product option checkbox to display inventory inputs and preview
canvasCheck.addEventListener("input", (e) => {
    canvasOptionCheck();
    e.preventDefault();
})
function canvasOptionCheck() {
    if (canvasCheck.checked === true) {
        canvasOptionPreview.style.display = "block";
        canvasOptions.style.display = "flex";
    } else {
        canvasOptionPreview.style.display = "none";
        canvasOptions.style.display = "none";
    }
}

photoCheck.addEventListener("input", () => {
    photoOptionCheck();
    e.preventDefault();
})
function photoOptionCheck() {
    if (photoCheck.checked === true) {
        photoOptionPreview.style.display = "block";
        photoOptions.style.display = "flex";
    } else {
        photoOptionPreview.style.display = "none";
        photoOptions.style.display = "none";
    }
}

originalCheck.addEventListener("input", () => {
    originalOptionCheck();
    e.preventDefault();
})
function originalOptionCheck() {
    if (originalCheck.checked === true) {
        originalOptionPreview.style.display = "block";
    } else {
        originalOptionPreview.style.display = "none";
    }
}


// transfer inventory amount inputs to the preview screen
originalEditionOption.addEventListener("input", (e) => {
    let ogVal = originalPreview.value;
    if(originalEditionOption.checked) {
        ogVal = `$${basePrice.value * 110}`;
        originalPreview.innerText = `${ogVal}`;
        originalPreview.style.display = "flex";
    } else {
        ogVal = 0;
        originalPreview.innerText = "";
        originalPreview.style.display = "none";
    } 
    e.preventDefault();
})

smallCanvasOption.addEventListener("input", (e) => {
    let scVal = smallCanvasPreview.value;
    if(e.target.value > 0) {
        scVal = basePrice.value * 20;
        smallCanvasPreview.textContent = `12 x 16 | $${scVal}`;
        smallCanvasPreview.style.display = "flex";
    } else {
        scVal = 0;
        smallCanvasPreview.innerHTML = "";
        smallCanvasPreview.style.display = "none";
    }
    e.preventDefault();
})

mediumCanvasOption.addEventListener("input", (e) => {
    let mcVal = mediumCanvasPreview.value;
    if(e.target.value > 0) {
        mcVal = basePrice.value * 40;
        mediumCanvasPreview.textContent = `24 x 32 | $${mcVal}`;
        mediumCanvasPreview.style.display = "flex";
    } else {
        mcVal = 0;
        mediumCanvasPreview.innerHTML = "";
        mediumCanvasPreview.style.display = "none";
    }
    e.preventDefault();
})

largeCanvasOption.addEventListener("input", (e) => {
    let lcVal = largeCanvasPreview.value;
    if(e.target.value > 0) {
        lcVal = basePrice.value * 60;
        largeCanvasPreview.textContent = `36 x 48 | $${lcVal}`;
        largeCanvasPreview.style.display = "flex";
    } else {
        lcVal = 0;
        largeCanvasPreview.innerHTML = "";
        largeCanvasPreview.style.display = "none";
    }
    e.preventDefault();
})




smallPhotoOption.addEventListener("input", (e) => {
    let spVal = smallPhotoPreview.value;
    if(e.target.value > 0) {
        spVal = basePrice.value * 10;
        smallPhotoPreview.textContent = `12 x 16 | $${spVal}`;
        smallPhotoPreview.style.display = "flex";
    } else {
        spVal = 0;
        smallPhotoPreview.innerHTML = "";
        smallPhotoPreview.style.display = "none";
    }
    e.preventDefault();
})

mediumPhotoOption.addEventListener("input", (e) => {
    let mpVal = mediumPhotoPreview.value;
    if(e.target.value > 0) {
        mpVal = basePrice.value * 20;
        mediumPhotoPreview.textContent = `24 x 32 | $${mpVal}`;
        mediumPhotoPreview.style.display = "flex";
    } else {
        mpVal = 0;
        mediumPhotoPreview.innerHTML = "";
        mediumPhotoPreview.style.display = "none";
    }
    e.preventDefault();
})

largePhotoOption.addEventListener("input", (e) => {
    let lpVal = largePhotoPreview.value;
    if(e.target.value > 0) {
        lpVal = basePrice.value * 30;
        largePhotoPreview.textContent = `36 x 48 | $${lpVal}`;
        largePhotoPreview.style.display = "flex";
    } else {
        lpVal = 0;
        largePhotoPreview.innerHTML = "";
        largePhotoPreview.style.display = "none";
    }
    e.preventDefault();
})

// calculate total inventory value

// add product button > adds product inventory card

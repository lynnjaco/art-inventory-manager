// ADD NEW PRODUCT FORM
const addProductForm = document.querySelector("#add-product-form");

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

// FORM INPUTS AND EVENTS

// transfers input values to product specification preview box
const productName = addProductForm.productName;
productName.addEventListener('input', (e) => {
    previewListingName.innerHTML = `"${e.target.value}"`;
    e.preventDefault();
}) 

const productImage = addProductForm.productImage;
productImage.addEventListener('input', (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    previewProductImage.setAttribute("src", url);
    e.preventDefault();
}) 

const productDescription = addProductForm.productDescription;
productDescription.addEventListener('input', (e) => {
    previewProductDesc.innerHTML = e.target.value;
    e.preventDefault();
})

const basePrice = addProductForm.addProductForm;

// product option selections

// engage product option checkbox to display inventory inputs and preview
const canvasOptions = document.querySelector("#canvas-sizes");
const canvasCheck = document.querySelector("#canvasOptionCheck");
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

const photoOptions = document.querySelector("#photo-sizes");
const photoCheck = document.querySelector("#photoOptionCheck");
photoCheck.addEventListener("input", (e) => {
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

const originalEditionOption = addProductForm.theOriginal;
const originalCheck = document.querySelector("#originalOptionCheck");
originalCheck.addEventListener("input", (e) => {
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

const smallCanvasOption = addProductForm.canvasSmall;
const mediumCanvasOption = addProductForm.canvasMedium;
const largeCanvasOption = addProductForm.canvasLarge;
// displays canvas inventory inputs and ppus to preview
let scVal = smallCanvasPreview.value;
smallCanvasOption.addEventListener("input", (e) => {
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
let mcVal = mediumCanvasPreview.value;
mediumCanvasOption.addEventListener("input", (e) => {
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
let lcVal = largeCanvasPreview.value;
largeCanvasOption.addEventListener("input", (e) => {
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

// displays original product price in preview
let ogVal = originalPreview.value;
originalEditionOption.addEventListener("input", (e) => {
    if(originalEditionOption.checked) {
        ogVal = basePrice.value * 110;
        originalPreview.innerText = `$${ogVal}`;
        originalPreview.style.display = "flex";
    } else {
        ogVal = 0;
        originalPreview.innerText = "";
        originalPreview.style.display = "none";
    } 
    e.preventDefault();
})

const smallPhotoOption = addProductForm.photoSmall;
const mediumPhotoOption = addProductForm.photoMedium;
const largePhotoOption = addProductForm.photoLarge;
// displays photo inventory inputs and ppus to preview
let spVal = smallPhotoPreview.value;
smallPhotoOption.addEventListener("input", (e) => {
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
let mpVal = mediumPhotoPreview.value;
mediumPhotoOption.addEventListener("input", (e) => {
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
let lpVal = largePhotoPreview.value;
largePhotoOption.addEventListener("input", (e) => {
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

// form submit button
const inventoryContainer = document.querySelector(".inventory-container");
const submitButton = document.querySelector("#add-product-button");

addProductForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const productInventoryTemplate = document.querySelector("[name='product-inventory-div']").content;
    const productTemplateCopy = document.importNode(productInventoryTemplate, true);

    productTemplateCopy.querySelector(".ic-product-name").textContent = productName.value;
    previewListingName.innerText = "";

    const date = new Date();
    productTemplateCopy.querySelector(".ic-base-price").textContent = date.toDateString();

    let url = URL.createObjectURL(productImage.files[0]);
    
    productTemplateCopy.querySelector(".ic-image-preview").setAttribute("src", url);
    productTemplateCopy.querySelector(".ic-product-description").textContent = productDescription.value;
    previewProductImage.setAttribute("src", "URL('assets/artstorelogo.png')");
    
    productTemplateCopy.querySelector(".ic-small-canvas-quantity").textContent = smallCanvasOption.value;
    productTemplateCopy.querySelector(".ic-sc-ppu").textContent = `$${scVal}`;
    smallCanvasPreview.innerText = "";

    productTemplateCopy.querySelector(".ic-medium-canvas-quantity").textContent = mediumCanvasOption.value;
    productTemplateCopy.querySelector(".ic-mc-ppu").textContent = `$${mcVal}`;
    mediumCanvasPreview.innerText = "";

    productTemplateCopy.querySelector(".ic-large-canvas-quantity").textContent = largeCanvasOption.value;
    productTemplateCopy.querySelector(".ic-lc-ppu").textContent = `$${lcVal}`;
    largeCanvasPreview.innerText = "";

    productTemplateCopy.querySelector(".ic-og-price").textContent = `$${ogVal}`;
    originalOptionCheck.checked === true ? productTemplateCopy.querySelector(".og-quantity").textContent = "1" : "0";
    originalPreview.innerText = "";

    productTemplateCopy.querySelector(".ic-small-photo-quantity").textContent = smallPhotoOption.value;
    productTemplateCopy.querySelector(".ic-sp-ppu").textContent = `$${spVal}`;
    smallPhotoPreview.innerText = "";

    productTemplateCopy.querySelector(".ic-medium-photo-quantity").textContent = mediumPhotoOption.value;
    productTemplateCopy.querySelector(".ic-mp-ppu").textContent = `$${mpVal}`;
    mediumPhotoPreview.innerText = "";

    productTemplateCopy.querySelector(".ic-large-photo-quantity").textContent = largePhotoOption.value;
    productTemplateCopy.querySelector(".ic-lp-ppu").textContent = `$${lpVal}`;
    largePhotoPreview.innerText = "";

    inventoryContainer.appendChild(productTemplateCopy);
    addProductForm.reset();
})

// reset add product form
const resetFormButton = document.querySelector("#reset-form-button");
resetFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    addProductForm.reset();
})

// delete product listing button
const deleteButtons = document.querySelectorAll("[name='deleteProduct']");
for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        e.currentTarget.parentNode.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode.parentNode);
    })
}

// calculate total inventory val
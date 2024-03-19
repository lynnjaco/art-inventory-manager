// ADD NEW PRODUCT FORM
const addProductForm = document.querySelector("#add-product-form");

// form inputs
const productName = addProductForm.productName.value;
const productImage = addProductForm.productImage.value;
const basePrice = addProductForm.addProductForm.value;

// option selections
const canvasOptions = document.querySelector("#canvas-sizes");
const smallCanvasOption = addProductForm.canvas-small.value;
const mediumCanvasOption = addProductForm.canvas-medium.value;
const largeCanvasOption = addProductForm.canvas-large.value;

const originalEditionOption = addProductForm.the-original.value;

const photoOptions = document.querySelector("#photo-sizes");
const smallPhotoOption = addProductForm.photo-small.value;
const mediumPhotoOption = addProductForm.photo-medium.value;
const largePhotoOption = addProductForm.canvas-large.value;

const productDescription = addProductForm.product-description.value;

// form submit button
const submitButton = document.querySelector("#add-product-button");

// NEW PRODUCT PREVIEW
const previewListingName = document.querySelector("#listing-name");
const previewProductImage = document.querySelector("#image-preview");
const previewProductDesc = document.querySelector("#listing-description");

// option price pewview parent containers
const canvasOptionPreview = document.querySelector("#canvas-inventory-preview");
const originalOptionPreview = document.querySelector("#original-inventory-preview");
const photoOptionPreview = document.querySelector("#photo-inventory-preview");

// option price previews
const smallCanvasPreview = document.querySelector("#sc-preview");
const mediumCanvasPreview = document.querySelector("#mc-preview");
const largerCanvasPreview = document.querySelector("#lc-preview");

const originalPreview = document.querySelector("#original-price");

const smallPhotoPreview = document.querySelector("#sp-preview");
const mediumPhotoPreview = document.querySelector("#mp-preview");
const largerPhotoPreview = document.querySelector("#lp-preview");

// TOTAL INVENTORY VALUE
const totalInventoryValue = document.querySelector("#total-value")

const productInventoryTemplate = document.querySelector("#product-inventory-div").content;

const productTemplateCopy = document.importNode(productInventoryTemplate, true);
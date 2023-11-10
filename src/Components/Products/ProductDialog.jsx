import React, { useRef } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function ProductDialog({
  productDialog,
  setProductDialog,
  productDialogFooter,
  handleChange,
  validationErrors,
  handleImageChange,
  productImage,
  setProductImage,
  product,
}) {
  const imageRef = useRef();
  return (
    <Dialog
      visible={productDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Product Details"
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={() => {
        setProductImage();
        setProductDialog(false);
      }}
    >
      {productImage ? (
        <div>
          <img
            src={productImage}
            alt="category name"
            onClick={() => {
              imageRef.current.click();
            }}
            className="product-image block m-auto pb-3"
          />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
            ref={imageRef}
          />
        </div>
      ) : (
        <div className="card flex flex-col mx-auto w-1/3">
          <div>
            <img
              src="https://imgs.search.brave.com/D6uLs2bMq2JG4aN-CnAUnrkCdOtHlp0GNyyTTPSJx28/rs:fit:860:0:0/g:ce/aHR0cHM6Ly95b3Vy/aW1hZ2VzaGFyZS5j/b20vaW1hZ2VzL3Nl/Y3Rpb25zL3VwbG9h/ZC5zdmc.svg"
              className="w-full"
              alt=""
              onClick={() => {
                imageRef.current.click();
              }}
            />
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
              ref={imageRef}
            />
          </div>
        </div>
      )}
      <div className="field">
        <label htmlFor="name" className="font-bold p-3">
          Name
        </label>
        <InputText
          id="name"
          name="name"
          value={product ? product.name : ""}
          onChange={handleChange}
          required
          autoFocus
          className="p-3"
        />
        {validationErrors.name && (
          <div className="text-red-500">{validationErrors.name}</div>
        )}
      </div>
      <div className="field">
        <label htmlFor="description" className="font-bold p-3">
          Description
        </label>
        <InputTextarea
          id="description"
          value={product ? product.description : ""}
          name="description"
          className="p-3"
          onChange={handleChange}
          required
          rows={3}
          cols={20}
        />
        {validationErrors.description && (
          <div className="text-red-500">{validationErrors.description}</div>
        )}
      </div>
      <div className="field">
        <label htmlFor="category" className="font-bold p-3">
          Category
        </label>
        <InputText
          id="category"
          name="category"
          value={product ? product.category : ""}
          onChange={handleChange}
          required
          autoFocus
          className="p-3"
        />
        {validationErrors.category && (
          <div className="text-red-500">{validationErrors.category}</div>
        )}
      </div>
      <div className="field">
        <label htmlFor="price" className="font-bold p-3">
          Price
        </label>
        <InputText
          id="price"
          name="price"
          value={product ? product.price : ""}
          onChange={handleChange}
          required
          autoFocus
          className="p-3"
        />
        {validationErrors.price && (
          <div className="text-red-500">{validationErrors.price}</div>
        )}
      </div>
    </Dialog>
  );
}

export default ProductDialog;

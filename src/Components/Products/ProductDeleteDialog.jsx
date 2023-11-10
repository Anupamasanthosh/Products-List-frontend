import { Dialog } from "primereact/dialog";
import React from "react";

function ProductDeleteDialog({
  deleteDialog,
  setDeleteDialog,
  product,
  deleteProductDialogFooter,
}) {
  return (
    <Dialog
      visible={deleteDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Confirm"
      modal
      footer={deleteProductDialogFooter}
      onHide={() => setDeleteDialog(false)}
    >
      <div className="confirmation-content">
        <i
          className="pi pi-exclamation-triangle mr-3 "
          style={{ fontSize: "2rem", color: "red" }}
        />
        {product && (
          <span className="">Are you sure you want to delete the product</span>
        )}
      </div>
    </Dialog>
  );
}

export default ProductDeleteDialog;

import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function Table({ actionBodyTemplate, products, imageBodytemplate }) {
  return (
    <div className="border h-[400px] overflow-y-auto">
      <DataTable
        value={products}
        dataKey="id"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 15, 20]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      >
        <Column
          field="name"
          header="Name"
          sortable
          style={{ minWidth: "16rem" }}
        ></Column>
        <Column
          field="description"
          header="Description"
          sortable
          style={{ minWidth: "16rem" }}
        ></Column>
        <Column
          body={imageBodytemplate}
          header="Image"
          style={{ minWidth: "16rem" }}
        ></Column>
        <Column
          field="category"
          header="Category"
          sortable
          style={{ minWidth: "16rem" }}
        ></Column>
        <Column
          field="price"
          header="Price"
          sortable
          style={{ minWidth: "16rem" }}
        ></Column>
        <Column
          header="Action"
          body={actionBodyTemplate}
          style={{ minWidth: "16rem" }}
        ></Column>
      </DataTable>
    </div>
  );
}

export default Table;

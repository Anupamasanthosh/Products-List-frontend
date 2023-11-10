import React from "react";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
function Header({ openNav }) {
  const leftTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          style={{ color: "black", margin: "3px" }}
          onClick={openNav}
        />
      </div>
    );
  };
  return (
    <Toolbar
      className="mb-4"
      left={leftTemplate}
    ></Toolbar>
  );
}

export default Header;

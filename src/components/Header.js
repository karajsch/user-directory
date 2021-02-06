import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title mt-5">
        <i class="fa fa-id-badge" aria-hidden="true"></i> Employee Directory
      </h1>
      <p className="font-weight-bold">
        Use the categories in the columns to filter or narrow your search
        results by searching by name.
      </p>
    </div>
  );
}
export default Header;

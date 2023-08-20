import React from "react";
import { Helmet } from "react-helmet";

function BreadCrumbs(props) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <ol class="breadcrumb my-4">
        <li class="breadcrumb-item text-theme-light">Dashboard</li>
        <li class="breadcrumb-item active">{props.title}</li>
      </ol>
    </>
  );
}

export default BreadCrumbs;

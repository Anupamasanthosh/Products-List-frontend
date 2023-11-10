import React, { useEffect,useState } from "react";
import Header from "./Header";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Table from "./Table";
import { Button } from "primereact/button";
import ProductDialog from "./ProductDialog";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../Utils/axios";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../../Utils/Constants";
import { setProductss } from "../../Redux/ProductReducer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showErrorToast, showToast } from "../../Utils/toast";
import ProductDeleteDialog from "./ProductDeleteDialog";
import { setCategory } from "../../Redux/CategoryReducer";

function ProductView() {
  const [productDialog, setProductDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [product, setProduct] = useState();
  const [productImage, setProductImage] = useState();
  const [file, setFile] = useState();
  const [validationErrors, setValidationErrors] = useState({});

  const products = useSelector((state) => state.Products.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(getProducts)
      .then((res) => {
        if (res.data.products) {
          dispatch(setProductss(res.data.products));
          dispatch(setCategory(res.data.categories));
        }
      })
      .catch((err) => {
        showErrorToast(res.data.err)
      });
  }, [dispatch, products]);

  const openNav = () => {
    setProductDialog(true);
  };
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const validateInput = () => {
    const errors = {};
    if (!product.name) {
      errors.name = "Name is required";
    }
    if (!product.description) {
      errors.description = "Description is required";
    }
    if (!product.category) {
      errors.category = "category needed";
    }
    if (!product.price) {
      errors.price = "Price is required";
    } else if (isNaN(product.price)) {
      errors.price = "Price must be a number";
    }
    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFile(file);
      setProductImage(URL.createObjectURL(file));
    }
  };
  const handleSubmit = () => {
    if (validateInput()) {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("image", file);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("id", product._id);

      const submitUrl = product._id ? editProduct : addProduct;
      axios
        .post(submitUrl, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.product) {
            showToast(res.data.message);
            setProductDialog(false);
            setProductImage();
            setProduct();
          } else {
            showErrorToast(res.data.message);
          }
        });
    }
  };

  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancel"
        icon="pi pi-times"
        style={{ margin: "5px" }}
        outlined
        onClick={() => {
          setProductDialog(false);
          setProductImage();
        }}
      />
      <Button
        label="Save"
        style={{ margin: "5px" }}
        outlined
        icon="pi pi-check"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </React.Fragment>
  );
  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => {
            openNav(true);
            setProduct(rowData);
            setProductImage(rowData.image);
          }}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => {
            setProduct(rowData);
            setDeleteDialog(true);
          }}
        />
      </React.Fragment>
    );
  };
  const deleteProducts = () => {
    axios
      .post(deleteProduct, product, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data.product) {
          setDeleteDialog(false);
          showErrorToast(res.data.message);
        }
      });
  };
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        style={{ color: "black", margin: "3px" }}
        onClick={() => setDeleteDialog(false)}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        style={{ color: "red", margin: "3px" }}
        onClick={deleteProducts}
      />
    </React.Fragment>
  );
  const imageBodytemplate = (rowData) => {
    const imageUrl = rowData.image;
    return (
      <LazyLoadImage
        src={imageUrl}
        style={{ width: "100px", height: "auto" }}
        placeholderSrc={imageUrl}
        effect="blur"
        threshold={100}
      />
    );
  };
  return (
    <div className="card mt-5 me-5 ms-5">
      <Header openNav={openNav} />
      <ToastContainer />
      <Table
        products={products}
        actionBodyTemplate={actionBodyTemplate}
        imageBodytemplate={imageBodytemplate}
      />
      <ProductDialog
        productDialog={productDialog}
        setProductDialog={setProductDialog}
        productDialogFooter={productDialogFooter}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        validationErrors={validationErrors}
        productImage={productImage}
        product={product}
        setProductImage={setProductImage}
      />
      <ProductDeleteDialog
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
        product={product}
        deleteProductDialogFooter={deleteProductDialogFooter}
      />
    </div>
  );
}

export default ProductView;

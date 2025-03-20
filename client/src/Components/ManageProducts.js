import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";
import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchemaValidation } from "../Validations/ProductValidations";

import { UseSelector, useDispatch } from "react-redux";

//import useSelector and useDispatch

//Import the addProduct, deleteProduct and updateProduct reducers from the ProductSlice file.
import { addProduct } from "../Features/ProductSlice";
//Import the Link component from react-router-dom

const ManageProdutcs = () => {
  //Declare a variable and retrieve the value of the products from the store

  //Declare a variable for the useDispatch.
  const dispatch = useDispatch();

  //Create the state variables
  const [id, setid] = useState(0);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [images, setimages] = useState("");
  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  // Handle form submission
  const onSubmit = (data) => {
    var totalprice = 0;
    var tax = 0;

    try {
      if (data.price > 1000) {
        tax = data.price * 0.25;
      } else if (501 <= data.price <= 1000) {
        tax = data.price * 0.2;
      } else if (200 <= data.price <= 500) {
        tax = data.price * 0.1;
      } else {
        tax = 0;
      }

      totalprice = data.price + tax;
      const ProductsData = {
        id: data.id,
        title: data.title,
        price: totalprice,
        images: data.images,
      };
      dispatch(addProduct(ProductsData));
      console.log(ProductsData);
    } catch (error) {
      console.log(error);
    }
  };
  //Create a new function handleDelete and dispatch the deleteProduct reducer with the id as the argument

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="adminPage">
          <p className="display-6">Admin Page</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h4>Add Product</h4>

          {/* Execute first the submitForm function and if validation is good execute the handleSubmit function */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div></div>
            <section>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Product id..."
                  {...register("id", {
                    onChange: (e) => setid(e.target.value),
                  })}
                />
                {id}
                <p> {errors.id?.message} </p>
              </div>
              <div className="form-group">
                <input
                  type="title"
                  className="form-control"
                  id="title"
                  placeholder="Title..."
                  {...register("title", {
                    onChange: (e) => settitle(e.target.value),
                  })}
                />
                {title}
                <p> {errors.title?.message} </p>
                {/*Display error*/}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Price..."
                  {...register("price", {
                    onChange: (e) => setprice(e.target.value),
                  })}
                />
                <p> {errors.price?.message} </p>
                {price}
                {/*Display error*/}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Image URL..."
                  {...register("images", {
                    onChange: (e) => setimages(e.target.value),
                  })}
                />
              </div>
              <p> {errors.images?.message} </p>
              {images}
              {/*Display error*/}

              <Button color="primary" className="button">
                Save Product
              </Button>
            </section>
          </form>
        </Col>
        <Col md={8}>
          <table className="table">
            <thead>
              <h1>List of products</h1>
            </thead>
            <tbody>
              {productlist.map((prod) => (
                <tr key={prod.id}>
                  <td> {<img src={prod.images} className="img-big" />}</td>

                  <tr> {prod.title} </tr>
                  <tr> {prod.price} </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProdutcs;

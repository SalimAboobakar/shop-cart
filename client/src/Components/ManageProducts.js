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

//import useSelector and useDispatch

//Import the addProduct, deleteProduct and updateProduct reducers from the ProductSlice file.

//Import the Link component from react-router-dom

const ManageProdutcs = () => {
  //Declare a variable and retrieve the value of the products from the store

  //Declare a variable for the useDispatch.

  //Create the state variables



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
          <form          >
            <div></div>
            <section>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Product id..."


                />

                {/*Display error*/}

              </div>
              <div className="form-group">
                <input
                  type="title"
                  className="form-control"
                  id="title"
                  placeholder="Title..."


                />

                {/*Display error*/}

              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Price..."


                />
                {/*Display error*/}

              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Image URL..."


                />
              </div>

              {/*Display error*/}

              <Button color="primary" className="button">
                Save Product
              </Button>
            </section>
          </form>
        </Col>
        <Col md={8}>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the values of the state */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProdutcs;

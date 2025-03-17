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

//Import the updateProduct reducer from the ProductSlice

//Import the useParams hook from react-router-dom.

//Import the useSelector and useDispatch from react-redux

//Import the useNavigate from react-router-dom


const UpdateProduct = () => {
  //Store in a variable the value of the products state

  //Create variable for the dispatch

  //Create variable for the useNavigate


  // Retrieve the route parameter using useParams.

  // Create the function to search the product id from the variable containing the value of the products from the redux store.


  //This is the product object that is to be updated as return by the find
  //Invoke the findbyProductId() and pass the variable containing the product id from the route parameter. 
  //Save the return value in a variable.

  //Set the values from the product to be updated object as initial value of the state.
  const [id, setProductName] = useState();
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  // Handle form submission
  const handleUpdate = (data) => {
  }



  return (
    <Container fluid>
      <Row>
        <Col md={12} className="adminPage">
          <p className="display-6">Admin Page</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h4>Update Product</h4>

          {/* Copy the form from the ManageProduct for adding a new Product */}
         
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateProduct;

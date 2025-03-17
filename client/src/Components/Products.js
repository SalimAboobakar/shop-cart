import { Container, Row, Col, Button, Input, Table } from "reactstrap";
//import the useSelector from react-readux
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
  //Declare a variable to store the current value of the producs state from the Redux store
  const productlist = useSelector((state) => state.products.value);

  return (
    <Container>
      <p className="display-6">Shopping</p>
      <Row>
        <Col md={6}>
          {/*Use the array map method to display the values from the state */}
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

export default Products;

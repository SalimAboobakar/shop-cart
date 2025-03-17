import Shop from "./Products";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components
import { useSelector, useDispatch } from "react-redux";
import Products from "./Products";
import banner from "../Images/banner.png";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img src={banner}></img>
        </Col>
      </Row>
      <Row>
        <Col>
          <Products />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

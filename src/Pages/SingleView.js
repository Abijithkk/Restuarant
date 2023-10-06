import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Operating from "../Components/Operating";
import Reviews from "../Components/Reviews";

function SingleView() {
  const [allrestuarants, setRestaurants] = useState([]);

  var param = useParams();
  // const id=param.id same as nest line
  var { id } = param; //destructuring

  const getAllRest = async () => {
    const result = await axios.get("/restaurants.json");
    setRestaurants(result.data.restaurants);
  };

  useEffect(() => {
    getAllRest();
  }, []);
  // console.log(id);
  // console.log(allrestuarants);
  //find single rest
  const singelRest = allrestuarants.find((i) => i.id == id);
  // console.log(singelRest);
  return (
    <div className="bg-black">
      {singelRest ? (
        <Row>
          <Col
            lg={6}
            sm={12}
            xs={12}
            md={6}
            className="py-5 ps-5 mt-5 mb-5 ms-5"
          >
            <img
              style={{ height: "500px" }}
              className="w-60"
              src={singelRest.photograph}
              alt=""
            />
          </Col>
          <Col className="text-start w-100">
            <h1 className="text-center mt-3 text-danger">{singelRest.name}</h1>
            <ListGroup className="me-5 pe-5 w-75 fs-4">
              <ListGroup.Item className="mt-4">
                <span className="text-dark">
                  <b>Address : </b>
                </span>
                {singelRest.address}
              </ListGroup.Item>
              <ListGroup.Item className="mt-4">
                <span className="text-dark">
                  <b>Cuisine Type : </b>
                </span>
                {singelRest.cuisine_type}
              </ListGroup.Item>
              <ListGroup.Item className="mt-4">
                <span>
                  <b className="text-dark">NeighborHood : </b>
                </span>
                {singelRest.neighborhood}
              </ListGroup.Item>

              <ListGroup.Item className="mt-4">
                <Operating OperatingData={singelRest.operating_hours}></Operating>
              </ListGroup.Item>
              <ListGroup.Item className="mt-4">
                <Reviews ReviewData={singelRest.reviews}></Reviews>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        <Row>
          <h1>No data</h1>
        </Row>
      )}
    </div>
  );
}

export default SingleView;

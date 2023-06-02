import React from "react";
import { Card } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import "../Styles/Screen.css";

const ProductsList = ({ data }) => {
  return (
    <div className="productList">
      <h2>List of product</h2>
      <div className="mainbar">
        <div className="product">
          {data.map((item) => {
            return (
              <Card className="my-3 p-3 rounded">
                <Card.Img src={item.image} variant="top" />

                <Card.Body>
                  <Card.Title as="div">
                    <strong>{item.name}</strong>
                  </Card.Title>

                  <Card.Text as="div">
                    <div className="my-3">
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={item.rating}
                          precision={0.5}
                          readOnly
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                        />
                      </Stack>
                      {item.numReviews} reviews
                    </div>
                  </Card.Text>
                  <Card.Text as="div">₹ {item.price}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import StarRating from "../components/StarRating";

import products from "../products";

const ProductScreen = ({ match }) => {
    const actualProduct = products.find((p) => p._id === match.params.id);

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">
                Home
            </Link>
            <Row>
                <Col md={6}>
                    <Image
                        src={actualProduct.image}
                        alt={actualProduct.alt}
                        fluid
                    />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{actualProduct.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <StarRating
                                value={actualProduct.rating}
                                text={`${actualProduct.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${actualProduct.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${actualProduct.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>${actualProduct.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {actualProduct.countInStock > 0
                                            ? "In stock"
                                            : "Out of stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    className="btn-block"
                                    type="button"
                                    disabled={actualProduct.countInStock === 0}
                                >
                                    Add to card
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;

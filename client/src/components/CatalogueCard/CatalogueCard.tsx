import { Card, Col, Row } from "antd";
import gql from "graphql-tag";
import React, { Component } from "react";
import { Query } from "react-apollo";

import "antd/lib/card/style/css";
import "antd/lib/col/style/css";
import "antd/lib/row/style/css";

const GET_PRODUCTS = gql`
  query productList {
    products {
      name
      price
      quantity
    }
  }
`;

interface Properties { }

interface State { }

class CatalogueCard extends Component<Properties, State> {
    render() {

        return (
            <Query query={GET_PRODUCTS}>
                {({ data, loading, error }) => {
                    if (loading) {
                        return <p>LOADING</p>;
                    }
                    if (error) {
                        return <p>ERROR</p>;
                    }
                    const { products } = data;
                    return (
                        <div style={{ background: "#282c34", paddingBottom: "48px" }}>
                            <Row>
                                <Col span={6} offset={3}>
                                    <Card title="Name" bordered={true}>
                                        {products.map((product: any, index: number) => {
                                            return (
                                                <Card.Grid style={{ width: "100%" }} key={index}>
                                                    {product.name}
                                                </Card.Grid>
                                            );
                                        })}
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="Price" bordered={true}>
                                        {products.map((product: any, index: number) => {
                                            return (
                                                <Card.Grid style={{ width: "100%" }} key={index}>
                                                    {product.price}
                                                </Card.Grid>
                                            );
                                        })}
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="Quantity" bordered={true}>
                                        {products.map((product: any, index: number) => {
                                            return (
                                                <Card.Grid style={{ width: "100%" }} key={index}>
                                                    {product.quantity}
                                                </Card.Grid>
                                            );
                                        })}
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default CatalogueCard;

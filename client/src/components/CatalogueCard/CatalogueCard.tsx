import { Card, Col, Row } from "antd";
import React, { Component } from "react";
import { ApolloConsumer, Query } from "react-apollo";

import { GET_PRODUCTS } from "../../graphql/queries";
import { ProductType } from "../../types";

import "antd/lib/card/style/css";
import "antd/lib/col/style/css";
import "antd/lib/row/style/css";

interface Properties { }

interface State {
    products: ProductType[];
}

class CatalogueCard extends Component<Properties, State> {
    constructor(props: Properties) {
        super(props);

        this.state = {
            products: [],
        };
    }
    render() {

        return (
            <ApolloConsumer>
                {(client) => (
                    <Query
                        query={GET_PRODUCTS}
                        onCompleted={({ products }: any ) => {
                            client.writeData({ data: { productItems: products }});
                        }}
                    >
                        {({ data, loading, error }) => {
                            if (loading) {
                                return <p>LOADING</p>;
                            }
                            if (error) {
                                return <p>ERROR</p>;
                            }
                            // const { products } = data;
                            const { products }: any= client.readQuery({ query: GET_PRODUCTS });
                            return (
                                <div style={{ paddingBottom: "48px" }}>
                                    <Row>
                                        <Col span={6} offset={3}>
                                            <Card title="Name" bordered={true}>
                                                {products.map((product: ProductType, index: number) => {
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
                                                {products.map((product: ProductType, index: number) => {
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
                                                {products.map((product: ProductType, index: number) => {
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
                )}
            </ApolloConsumer>
        );
    }
}

export default CatalogueCard;

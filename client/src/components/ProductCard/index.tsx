import { Card, Col, Row } from "antd";
import React, { Component } from "react";

import "antd/lib/card/style/css";
import "antd/lib/col/style/css";
import "antd/lib/row/style/css";

interface Properties {
    products: any[];
}

class ProductCard extends Component<Properties, {}> {
    render() {
        const { products } = this.props;

        return (
            <div style={{ background: "#ECECEC" }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Name" bordered={false}>
                        {products.map((product: any, index: number) => {
                            return <Card.Grid style={{  width: "100%" }} key={index}>{product.name}</Card.Grid>;
                        })}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Price" bordered={false}>
                        {products.map((product: any, index: number) => {
                            return <Card.Grid style={{  width: "100%" }} key={index}>{product.price}</Card.Grid>;
                        })}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Quantity" bordered={false}>
                        {products.map((product: any, index: number) => {
                            return <Card.Grid style={{  width: "100%" }} key={index}>{product.quantity}</Card.Grid>;
                        })}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductCard;

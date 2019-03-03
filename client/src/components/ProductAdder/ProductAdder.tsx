import { Button, Form, Input } from "antd";
import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation, MutationFn } from "react-apollo";

import "antd/lib/button/style/css";
import "antd/lib/form/style/css";
import "antd/lib/input/style/css";

const ADD_PRODUCT = gql`
  mutation addNewProduct($name: String!, $price: Float!, $quantity: Int) {
    addProduct(name: $name, price: $price, quantity: $quantity) {
        success
        message
        product {
            id
            name
            price
            quantity
        }
    }
  }
`
    ;

const hasErrors = (fieldsError: any) => {
    return Object.keys(fieldsError).some((field: any) => fieldsError[field]);
};

interface Properties {
    form: any;
}

interface State {
    nameError: boolean;
    priceError: boolean;
    quantityError: boolean;
}

class ProductAdderForm extends Component<Properties, State> {
    constructor(props: Properties) {
        super(props);

        const { getFieldError, isFieldTouched } = props.form;

        // Only show error after a field is touched.
        this.state = {
            nameError: isFieldTouched("name") && getFieldError("name"),
            priceError: isFieldTouched("price") && getFieldError("price"),
            quantityError: isFieldTouched("quantity") && getFieldError("quantity"),
        };
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    private handleSubmit = (addProduct: MutationFn) => {
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                values.price = Number(values.price.replace(/,/g, "."));
                values.quantity = Number(values.quantity);
                addProduct({ variables: { name: values.name, price: values.price, quantity: values.quantity }});
            }
        });
    }

    render() {

        const { getFieldDecorator, getFieldsError } = this.props.form;

        return (
            <Mutation mutation={ADD_PRODUCT}>
                {(addNewProduct, { loading, error }) => {
                    if (loading) {
                        return <p>LOADING</p>;
                    }
                    if (error) {
                        console.error(error);
                        return <p>ERROR</p>;
                    }
                    return (
                        <Form layout="inline" onSubmit={(e: any) => { this.handleSubmit(addNewProduct), e.preventDefault() }}>
                            <Form.Item
                                validateStatus={this.state.nameError ? "error" : ""}
                                help={this.state.nameError || ""}
                            >
                                {getFieldDecorator("name", {
                                    rules: [{ required: true, message: "Please input a name!" }],
                                })(
                                    <Input placeholder="Name" />
                                )}
                            </Form.Item>
                            <Form.Item
                                validateStatus={this.state.priceError ? "error" : ""}
                                help={this.state.priceError || ""}
                            >
                                {getFieldDecorator("price", {
                                    rules: [{ required: true, message: "Please input a price!", pattern: "/d+/" }],
                                })(
                                    <Input placeholder="Price" />
                                )}
                            </Form.Item>
                            <Form.Item
                                validateStatus={this.state.quantityError ? "error" : ""}
                                help={this.state.quantityError || ""}
                            >
                                {getFieldDecorator("quantity", {
                                    rules: [{ required: true, message: "Please input a quantity!" }],
                                })(
                                    <Input placeholder="Quantity" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                >
                                    Add product
                            </Button>
                            </Form.Item>
                        </Form>
                    );
                }}
            </Mutation>
        );
    }
}

const ProductAdder = Form.create({ name: "product_adder" })(ProductAdderForm);

export default ProductAdder;

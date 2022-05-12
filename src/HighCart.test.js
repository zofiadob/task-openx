import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { testUsers, testCarts, testProducts } from "./testData";
import HighCart from "./HighCart";


test('render component', async () => {
    render(<HighCart carts={testCarts} products={testProducts} users={testUsers} />)
    const headerText = screen.getByText('Highest value cart');
    await waitFor(() => headerText);
})


test('total value', async () => {
    render(<HighCart carts={testCarts} products={testProducts} users={testUsers} />)
    const valueText = screen.getByText('Total value: 2578.7');
    await waitFor(() => valueText);
})


test('owner value', async () => {
    render(<HighCart carts={testCarts} products={testProducts} users={testUsers} />)
    const valueText = screen.getByText('Owner: john doe');
    await waitFor(() => valueText);
})

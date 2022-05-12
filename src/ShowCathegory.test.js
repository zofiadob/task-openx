import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { testUsers, testCarts, testProducts } from "./testData";
import ShowCathegory from "./ShowCathegory"


test('render component', async () => {
    render(<ShowCathegory users={testUsers} products={testProducts} carts={testCarts}/>)
    const headerText = screen.getByText('Cathegories');
    await waitFor(() => headerText);
})


test('render cathegory 1', async () => {
    render(<ShowCathegory users={testUsers} products={testProducts} carts={testCarts}/>)
    const cathegoryText = screen.getByText(testProducts[0].category);
    await waitFor(() => cathegoryText);
})


test('render cathegory 2', async () => {
    render(<ShowCathegory users={testUsers} products={testProducts} carts={testCarts}/>)
    const cathegoryText = screen.getByText(testProducts[4].category);
    await waitFor(() => cathegoryText);
})


test('render cathegory 3', async () => {
    render(<ShowCathegory users={testUsers} products={testProducts} carts={testCarts}/>)
    const cathegoryText = screen.getByText(testProducts[8].category);
    await waitFor(() => cathegoryText);
})


test('render cathegory 4', async () => {
    render(<ShowCathegory users={testUsers} products={testProducts} carts={testCarts}/>)
    const cathegoryText = screen.getByText(testProducts[15].category);
    await waitFor(() => cathegoryText);
})
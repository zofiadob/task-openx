import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { testUsers } from "./testData";
import LivingFurthest from "./LivingFurthest";
import { calculate } from "./LivingFurthest"


test("render component", async () => {
  render(<LivingFurthest users={testUsers}/>)
  const headerText = screen.getByText('Living furthest');
  await waitFor(() => headerText);
});

test("calculate check nums", async() =>{
    expect(calculate(1,3,-5,8)).toBe(7.810249675906654);});

test("calculate check users 0 and 4", () =>{
    expect(calculate(testUsers[0].address.geolocation.lat,
                     testUsers[0].address.geolocation.long,
                     testUsers[4].address.geolocation.lat,
                     testUsers[4].address.geolocation.long)).toBe(144.01549699639966);
});

test("calculate check users 1 and 3", () =>{
    expect(calculate(testUsers[1].address.geolocation.lat,
                     testUsers[1].address.geolocation.long,
                     testUsers[3].address.geolocation.lat,
                     testUsers[3].address.geolocation.long)).toBe(133.94958519950706);
});


test("calculate check users the same", () =>{
    expect(calculate(testUsers[3].address.geolocation.lat,
                     testUsers[3].address.geolocation.long,
                     testUsers[3].address.geolocation.lat,
                     testUsers[3].address.geolocation.long)).toBe(0);
});
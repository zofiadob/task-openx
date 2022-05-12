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

test("calculateCheckNums", async() =>{
    expect(calculate(1,3,-5,8)).toBe(7.810249675906654);});

test("calculateCheckUsers0and4", () =>{
    expect(calculate(testUsers[0].address.geolocation.lat,
                     testUsers[0].address.geolocation.long,
                     testUsers[4].address.geolocation.lat,
                     testUsers[4].address.geolocation.long)).toBe(144.01549699639966);
});

test("calculateCheckUsers1and3", () =>{
    expect(calculate(testUsers[1].address.geolocation.lat,
                     testUsers[1].address.geolocation.long,
                     testUsers[3].address.geolocation.lat,
                     testUsers[3].address.geolocation.long)).toBe(133.94958519950706);
});


test("calculateCheckUsersTheSame", () =>{
    expect(calculate(testUsers[3].address.geolocation.lat,
                     testUsers[3].address.geolocation.long,
                     testUsers[3].address.geolocation.lat,
                     testUsers[3].address.geolocation.long)).toBe(0);
});
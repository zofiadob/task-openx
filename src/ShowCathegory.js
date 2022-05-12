import React from "react";

export default function ShowCathegory(props) {
  let uniqeList = [];
  const cathList = props.products.map((item) => {
    return { cath: item.category, price: item.price };
  });

  cathList.forEach((item) => {
    if (!uniqeList.includes(item.cath)) {
      uniqeList.push(item.cath);
    }
  });

  let priceList = new Array(uniqeList.length).fill(0);
  cathList.forEach((item) => {
    const index = uniqeList.indexOf(item.cath);
    priceList[index] += item.price;
  });

  let finalList = [];
  uniqeList.forEach((element, index) => {
    finalList.push({ cath: element, price: priceList[index].toFixed(2) });
  });

  return (
    <div className="component">
      <h2>Cathegories</h2>
      <table>
        <tbody>
          <tr>
            <th>Cathegory</th>
            <th>Total value</th>
          </tr>
          {finalList.map((item) => {
            return (
              <tr key={item.cath}>
                <td>{item.cath}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

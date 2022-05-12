import React from "react";

export const calculate = (xlat, xlong, ylat, ylong) => {
  const x = Math.pow(parseFloat(xlat) - parseFloat(ylat), 2);
  const y = Math.pow(parseFloat(xlong) - parseFloat(ylong), 2);
  return Math.sqrt(x + y);
}

export default function LivingFurthest(props) {
  const geoList = props.users.map((user) => {
    return {
      name: user.name.firstname + " " + user.name.lastname,
      lat: user.address.geolocation.lat,
      long: user.address.geolocation.long,
    };
  });

  let longest = { nameFirst: "", nameSecond: "", value: 0 };
  for (let i = 0; i < geoList.length; i++) {
    const currentCheck = geoList[i];
    for (let j = 0; j < geoList.length; j++) {
      if (i !== j) {
        const checkWith = geoList[j];
        const calulated = calculate(
          currentCheck.lat,
          currentCheck.long,
          checkWith.lat,
          checkWith.long
        );
        if (longest.value < calulated) {
          longest.nameFirst = currentCheck.name;
          longest.nameSecond = checkWith.name;
          longest.value = calulated;
        }
      }
    }
  }

  console.log(longest);

  return (
    <div className="component">
      <h2>Living furthest</h2>
      <p>{longest.nameFirst}</p>
      <p>{longest.nameSecond}</p>
    </div>
  );
}

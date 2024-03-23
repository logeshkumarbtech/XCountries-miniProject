import { useState, useEffect } from "react";
import axios from "axios";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const callApi = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = await response["data"];
      console.log(data);
      setCountries(data);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const imageStyle={
    height:"100px",
    width:"100px",
  }

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const cardStyle = {
    width: "200px",       
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>

      {countries.map((country) => {
        return (
          <div key={country.cca3} style={cardStyle}>
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              style={imageStyle}
            />
            <h2> {country.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://xcountries-backend.azurewebsites.net/all")
      .then((res) => {
        console.log("Fetched Data:", res.data); 
        setCountries(res.data); 
      })
      .catch((err) => {
        console.error("Error fetching Data:", err);
      });
  }, []);

  return (
    <div style={styles.container}>
      {countries.map((country, index) => (
        <CountryCard key={index} name={country.name} flag={country.flag} />
      ))}
    </div>
  );
};

const CountryCard = ({ name, flag }) => {
  return (
    <div style={styles.card}>
      <img src={flag} alt={`Flag of ${name}`} style={styles.flag} />
      <h3 style={styles.name}>{name}</h3>
    </div>
  );
};

// ✅ Styling Object
const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    height: "200px",
    width: "200px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  flag: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  name: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Countries;

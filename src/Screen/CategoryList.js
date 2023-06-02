import React from "react";
import products from "../Data/product";
import "../Styles/Screen.css";

const CategoryList = ({ setData }) => {
  const result = products.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.category === current.category);
    if (obj) {
      return finalArray;
    } else {
      return finalArray.concat([current]);
    }
  }, []);

  const filteredData = (selectedItem) => {
    const filtered = products.filter(
      (item) => item.category === selectedItem.category
    );
    setData(filtered);
  };

  const filter_below_price = () => {
    const filteredPrice = products.filter((item) => item.price <= 5000);
    setData(filteredPrice);
  };

  const filter_above_price = () => {
    const filteredPrice = products.filter((item) => item.price >= 5000);
    setData(filteredPrice);
  };

  return (
    <div className="sidebar">
      <h2>Category</h2>
      <p onClick={() => setData(products)}>All</p>
      {result.map((item) => (
        <p onClick={() => filteredData(item)}>{item.category}</p>
      ))}
      <p>
        <span>Select Price Range</span>
      </p>
      <button onClick={filter_below_price}>Below 5000</button>
      <button onClick={filter_above_price}>Above 5000</button>
    </div>
  );
};

export default CategoryList;

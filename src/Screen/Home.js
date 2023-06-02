import React, { useEffect, useState } from "react";
import products from "../Data/product";
import ProductsList from "./ProductsList";
import CategoryList from "./CategoryList";
import "../Styles/Screen.css";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products)
  },[])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-sm-1">
          <CategoryList setData={setData} />
        </div>
        <div className="col-md-9 col-sm-11">
          <ProductsList data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

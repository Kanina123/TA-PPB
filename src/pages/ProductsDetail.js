import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import "./ProductsDetail.css";
import CardProductDetails from "../components/CardProductDetails";

const Products = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
            if (response.status === 200) {
              setData(response.data);
            }
          } catch (err) {
            console.log("err", err);
          }
        }
        async function fetchData() {
          await fetchProducts();
        }
        fetchData();
      }, []);

    return (
        <div>
            {(
                data.slice(0, 1).map(function (item, index) {
                    return (
                    <div key={index}>
                        <CardProductDetails productsData={item} />
                    </div>
                    );
                })
            )}
        </div>
    );
};

export default Products; 
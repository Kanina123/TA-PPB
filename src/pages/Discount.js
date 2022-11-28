import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import "./Discount.css";
import CardDiscount from "../components/CardDiscount";

const Products = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&price_less_than=10");
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
                data.map(function (item, index) {
                    return (
                    <div key={index}className="containerProduct">
                        <CardDiscount productsData={item} />
                        <div className="learnMore" onClick={() => navigate(`/ProductsDetail/${item.id}`, {state: item})}>
                          <p id="learnMore">LEARN MORE</p>
                        </div>
                    </div>
                    );
                })
            )}
        </div>
    );
};

export default Products; 
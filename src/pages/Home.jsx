import React, { useEffect, useState } from "react";
import Product from "../components/Product.js"
import Spinner from "../components/Spinner.js";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      // console.log(data);
    }
    catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="flex flex-row flex-wrap h-[250px]  gap-4 mx-4 ">
      {
        loading ?
          (<Spinner />)
          :
          (posts.length > 0 ?
            (posts.map((post) => <Product key={post.id} post={post} />))
            :
            (<div>Post not found</div>))
      }
    </div>
  )
};

export default Home;

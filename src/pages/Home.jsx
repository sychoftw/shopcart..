import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setloading]=useState(false);
  const [posts,setPosts]=useState([]);

  async function fetchproductdata(){
    setloading(true);
    try{
      const res=await fetch("https://fakestoreapi.com/products");
      const data =await res.json();
      console.log(data)
      setPosts(data);

    }catch(error){
      console.log("error aagra")
      setPosts([]);
    }
    setloading(false);

  }
  useEffect(()=>{
    fetchproductdata();

  },[])

  return (
    <div>
      {
        loading?<Spinner  ></Spinner>:
        posts.length>0 ?
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto min-h-[80vh] space-x-5 space-y-10 ">
          {
            posts.map((post)=>(
            <Product key={posts.id} post={post}></Product>
          ))
          }
        </div>):
        <div className="flex justify-center items-center">
          <p>no dta found</p>
        </div>
      }
    </div>
  );
};

export default Home;

import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




  const Cart = () => {
  const {cart}=useSelector((state)=>state);
  console.log("im in cart section")
  console.log(cart)
  const [totalAmount,settotalAmount]=useState(0);

    useEffect(()=>{
      settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])


  return (
    <div className="flex justify-center items-center  ">
  {
    cart.length > 0?
    (<div className="flex w-8/12  ">
      <div>
        {
          cart.map((item,index)=>{
            return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
          })
        }
      </div>
      <div className="flex flex-col justify-between max-h-[600px]">
      <div className="flex flex-col ml-7 mt-10">
        <div className="text-gray-400 font-semibold text-lg text-left   mt-1">Your Cart</div>
        <div className="text-green-600 font-semibold text-3xl ">SUMMARY</div>
        <p>
          <sapn className="text-gray-700 font-semibold text-sm text-left   mt-1" >Total item:{cart.length}</sapn>
        </p>
      </div>
      <div className="flex flex-col ml-7 mb-7 gap-4">
        <p className="text-gray-400 font-semibold text-sm text-left  
         mt-1" >Total Amount:$<span className="text-black">{totalAmount}</span></p>
        <button className="bg-green-600  text-white font-bold py-2 px-4 border border-blue-700 rounded">checkout</button>

      </div>
         
      </div>


    </div>):
    (<div className=" flex flex-col gap-3">
      <h1 className="text-gray-700 px-2 font-semibold text-md  
         mt-1">Cart  Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600  text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Shop now
        </button>
      </Link>
    </div>)
  }

  
  
  </div>
  )
};

export default Cart;

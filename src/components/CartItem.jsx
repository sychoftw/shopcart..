import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removefromcart=()=>{
    dispatch(remove(item.id));
    toast.success("item removed")
  }
  return (
    <div className="   w-[580px] border-y-2">
      <div className="flex gap-10  mt-7 mb-7 m-7">
        <div  className="w-[250px]  " >
          <img    src={item.image}></img>
        </div>
        <div className="flex flex-col w-full gap-y-6 " >
          <h1 className="text-gray-700 font-semibold text-lg text-left   mt-1" >{item.title}</h1>
          <h1 className=" text-gray-400 font-normal text-[15px] text-left" >{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
          <div className="flex  justify-between ">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div  onClick={removefromcart}>
              <FcDeleteDatabase className="text-2xl"></FcDeleteDatabase>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;

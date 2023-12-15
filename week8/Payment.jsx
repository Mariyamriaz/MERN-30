import React from "react";
import { useSelector } from "react-redux";

export default function Payment() {
  const globalState = useSelector((state) => state);

  return (
    <div className="flex gap-4 justify-evenly">
    
      <div className="container m-2 mt-2 p-4 mx-10 ">

<table className="flex flex-col">
  <thead>
    <tr className="bg-white-200">
      
      <th className="py-2 ">Products</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(globalState.cart).map((itemKey, counterKey) => (
      <tr key={itemKey} className={counterKey % 2 === 0 ? "bg-white-100" : "bg-white"}>
        <td className="py-2">
        <div className="text-lg text-gray-500">
            Qty: {globalState?.cart[itemKey]?.qty} | Net Price: $
            {globalState?.cart[itemKey]?.qty * globalState?.cart[itemKey]?.price}
          </div>
          <div className="font-semibold">{globalState?.cart[itemKey]?.name}</div>
        </td>
      </tr>
    ))}

    <tr className="border-t border-orange-300">
      <td colSpan="1" className="py-2 text-right font-semibold">Total:</td>
      <td className="py-2 font-semibold">${/* Your total amount here */}</td>
    </tr>
  </tbody>
</table>
      </div>
      <div className="mx-10">
      <form className="flex flex-col gap-2">
       <div className="flex justify-center items-center font-extrabold text-[40px]">
        Pay now
       </div>
       <label htmlFor="Email">Email</label>
       <input type="email" className="border-[2px] border-gray-300 rounded-md shadow-md"/>
       <label htmlFor="Card information">Card information</label>
       <input placeholder="1234 1234 1234 1234" type="text" className="border-[2px] border-gray-300 rounded-md shadow-md"/>
       <div className="flex">
       <input placeholder="MM/YY"type="date" className="border-[2px] border-gray-300 rounded-md shadow-md"/>
       <input placeholder="CVC" type="text" className="border-[2px] border-gray-300 rounded-md shadow-md"/>
       </div>
       <label htmlFor="Cardholder name">Cardholder Name</label>
       <input placeholder="full name on card" type="string" className="border-[2px] border-gray-300 rounded-md shadow-md"/>
       <label htmlFor="country or region ">country or region</label>
       <input  type="text" className="border-[2px] border-gray-300 rounded-md shadow-md"/>
       <button className="bg-blue-400 p-3 rounded-md hover:bg-blue-500" type="submit">Pay</button>
      </form>
      </div>
    </div>
  );
}

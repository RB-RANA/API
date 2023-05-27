import React from 'react'
import { MdDelete } from 'react-icons/md';
import images from '../Photos';
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineRollback } from 'react-icons/ai';


const Cart = () => {
  const history = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100">
       <div className="absolute text-3xl cursor-pointer left-7 top-20" onClick={() => history(-1)}>
          <span><AiOutlineRollback /></span>
        </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                   Remove
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={images.Product_1}
                          alt="Product not found"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Product Name</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-28 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">$99.99</div>
                  </td>
                  <td className="px-28 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">2</div>
                  </td>
                  <td className="px-28 py-4 whitespace-nowrap cursor-pointer">
                    <div className="text-xl text-gray-900"><MdDelete/></div>
                  </td>
                </tr>
                {/* Add more product rows as needed */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={images.Product_2}
                          alt="Product not found"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Product Name</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-28 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">$99.99</div>
                  </td>
                  <td className="px-28 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">2</div>
                  </td>
                  <td className="px-28 py-4 whitespace-nowrap cursor-pointer">
                    <div className="text-xl text-gray-900"><MdDelete/></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

        <div className='flex justify-around items-center mb-10'>
        <Link to="/product"><button className='bg-blue-400 py-1 px-3 rounded-md'>CONTINUE SHOPING</button></Link>
      <button className='bg-red-500 text-white py-1 px-3 rounded-md'>CLEAR CART</button>
        </div>
      
      <div className=" float-right mr-40 bg-slate-400 p-5 rounded-lg">
            <div className="text-lg  text-gray-900">Subtotal: $199.98</div>
            <div className="text-lg  text-gray-900">Shipping Fee: $199.98</div>
            <div className="text-xl font-bold text-gray-900">Order Total: $199.98</div>
          </div>
    </div>
  );
}

export default Cart
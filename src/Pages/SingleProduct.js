import images from "../Photos";
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';


const SingleProduct = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:space-x-6">
          <div className='sideImsge flex flex-col gap-2'>
            <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
              <img
                className="h-full w-full object-cover md:w-96"
                src={images.Singel_1}
                alt="Product Image"
              />
            </div>
            <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
              <img
                className="h-full w-full object-cover md:w-96"
                src={images.Singel_2}
                alt="Product Image"
              />
            </div>
            <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
              <img
                className="h-full w-full object-cover md:w-96"
                src={images.Singel_3}
                alt="Product Image"
              />
            </div>

            <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
              <img
                className="h-full w-full object-cover md:w-96"
                src={images.Singel_4}
                alt="Product Image"
              />
            </div>
            <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
              <img
                className="h-full w-full object-cover md:w-96"
                src={images.Singel_5}
                alt="Product Image"
              />
            </div>
            <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
              <img
                className="h-full w-full object-cover md:w-96"
                src={images.Singel_6}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-shrink-0 pr-7">
            <img
              className="h-full w-full object-cover md:w-96"
              src={`${images.Singel_5}`}
              alt="Product Image"
            />
          </div>
          <div className="mt-4 md:mt-0 md:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Product Name
            </h2>
            <div className="flex items-center gap-3 py-6">
              <div className="flex items-center gap-1">
                <span><AiFillStar/></span>
                <span><AiFillStar/></span>
                <span><AiFillStar/></span>
                <span className="text-sm">< BsStarHalf/></span>
                <span><AiOutlineStar/></span>
              </div>
              <h5>( 50 customer reviews )</h5>
            </div>
            <div className='sideImsge flex gap-2'>
              <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
                <img
                  className="h-full w-full object-cover md:w-96"
                  src={images.Singel_1}
                  alt="Product Image"
                />
              </div>
              <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
                <img
                  className="h-full w-full object-cover md:w-96"
                  src={images.Singel_2}
                  alt="Product Image"
                />
              </div>
              <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md'>
                <img
                  className="h-full w-full object-cover md:w-96"
                  src={images.Singel_3}
                  alt="Product Image"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              We are proud to present our best premium Shopify theme - Wokiee.This is multi-purpose software that can be used for any type of the store. Great variety of available options will make customization process very easy.Please, take a look at feature list and compare with our competitors.You can buy our theme and start your business online with minimal time investments.Wokiee support DropShipping app Oberlo.Wokiee Shopify theme is powerfool tool to create personal webshop.
            </p>
            <div className="my-4">
              <p className="text-xl text-gray-900 font-bold">MRP : $99.99</p>
            </div>
            <div className="stock">
              <div className="info border-b-2 border-slate-500">
               <h6>Available: In Stock</h6>
               <h6 className="pb-3">Vendor : Guess</h6>
              </div>
              
          <div className='flex gap-1 items-center pb-7 pt-4'>
          <h3 className=''>Color : </h3>
          <span className='cursor-pointer'>All</span>
            <span className='w-3 h-3 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-3 h-3 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-3 h-3 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-3 h-3 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-3 h-3 rounded-full bg-red-500 cursor-pointer'></span>
          </div>
              <div className="itemCoun flex gap-5">
                <button className=""><AiOutlineMinus/></button>
                <span>10</span>
                <button><AiOutlinePlus/></button>
              </div>
            </div>
            <div className="mt-6">
            <Link to="/Single">  <button className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add to Cart
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

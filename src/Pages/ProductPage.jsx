import React from 'react'
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { FiList } from 'react-icons/fi';
import { Background } from '../Servers/Service';
import images from '../Photos';
import { useState } from 'react';

const ProductPage = () => {
  const [backgrount,setbackgrount] = useState(true)
  return (
    <div className='px-10 pt-5'>
      <div className='wrapr flex gap-10 '>
        <div className='sidemanu flex-[0.2]'>
          <input className='border w-40 h-5 border-black outline-none rounded-sm' type='search' />
          <h3 className='font-bold py-2'>Vendo</h3>
          <ul className='flex flex-col gap-1 cursor-pointer pb-7'>
            <li className='underline'>All</li>
            <li>Gpa</li>
            <li>Scarf</li>
            <li>Polo</li>
            <li>Lacoste</li>
            <li>Guess</li>
            
          </ul>
          <h3 className='font-bold pb-2'>Title</h3>
          <select name="cars" id="cars" className='border-black outline-none rounded-sm border'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <h3 className='pt-5'>Color</h3>
          <div className='flex gap-1 items-center pb-7 pt-4'>
          <span className=''>All</span>
            <span className='w-4 h-4 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-4 h-4 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-4 h-4 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-4 h-4 rounded-full bg-red-500 cursor-pointer'></span>
            <span className='w-4 h-4 rounded-full bg-red-500 cursor-pointer'></span>
          </div>
          <h3>Price</h3>
          <h5>$50000000</h5>
          <input type="range" id="points" name="points" min="0" max="10"/><br/>
          <button className='bg-red-400 py-1 px-2 rounded-sm my-5'>Clear Filters</button>
        </div>
        <div className='porduct flex-1'>
          <div className='top pb-20  grid grid-cols-3'>
            <div className='gridIon flex cursor-pointer gap-3'>
              <span onClick={()=>setbackgrount(true)} className=''><BsFillGrid1X2Fill/></span>
              <span onClick={()=>setbackgrount(true)}><FiList/></span>
            </div>
            <h1>Totol Product 8</h1>
            <div>
              <select name="cars" id="cars"  className='border-black outline-none rounded-sm border text-center'>
                <option value="volvo">A to Z</option>
                <option value="saab">Z to A</option>
                <option value="mercedes">Low to High</option>
                <option value="audi">High to Low</option>
              </select>
            </div>
          </div>
          <div className='Prod grid grid-cols-4 gap-5'>
            <Link to="/Single"><div>
              <div style={Background(images.Product_1)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
            <Link to="/Single"><div>
              <div style={Background(images.Product_2)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
            <Link to="/Single"><div>
              <div style={Background(images.Product_3)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
            <Link to="/Single"><div>
              <div style={Background(images.Product_4)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
            <Link to="/Single"><div>
              <div style={Background(images.Product_5)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
            <Link to="/Single"><div>
              <div style={Background(images.Product_6)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
            <Link to="/Single"><div>
              <div style={Background(images.Product_7)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
            <Link to="/Single"><div>
              <div style={Background(images.Product_8)} className='image h-56 bg-center bg-cover p-10'></div>
              <div className='info flex items-center justify-between px-2'>
                <h5>name</h5>
                <h5>Price</h5>
              </div>
            </div></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage
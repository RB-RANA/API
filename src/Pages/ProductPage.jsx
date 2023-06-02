import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { FiList } from 'react-icons/fi';
import { Background } from '../Servers/Service';
import { useFiltercontest } from '../Context/filter_context';
import FormatPrice from '../Helpers/FormatPrice';
import { ImCheckmark } from 'react-icons/im';

const ProductPage = () => {
  const [color, setcolor] = useState()
  // Try to und
  const { all_productes,filter_productes,sorting } = useFiltercontest()
  // Object
  const uniqueNames = [...new Set([...filter_productes].map(item => item.Vendor))];
  const uniqueTitle = [...new Set([...filter_productes].map(item => item.title))];
  const uniquecolor = [...new Set([...filter_productes].map(item => item.color))];
  // array
  const uniqueColors = new Set([...uniquecolor].flat());
  const uniqueValues = [...uniqueColors];

  return (
    <>

      <div className='px-10 pt-5'>
        <div className='wrapr flex gap-10 '>

          <div className='sidemanu flex-[0.2]'>
            <input className='border w-40 h-5 border-black outline-none rounded-sm' type='search' />
            <h3 className='font-bold py-2'>Vendo</h3>

            <ul className='flex flex-col gap-1 cursor-pointer pb-7'>
              <li className='underline'>All</li>
              {uniqueNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>

            <h3 className='font-bold pb-2'>Title</h3>

            <select name="cars" id="cars" className='border-black outline-none rounded-sm border'>
              <option value="">All</option>
              {
                uniqueTitle?.map((item, index) => (
                  <option key={index} value="">{item}</option>
                ))
              }
            </select>

            <h3 className='pt-5'>Color</h3>
            <div className='flex gap-1 items-center pb-7 pt-4'>
              <span className=''>All</span>

              {
                uniqueValues?.map((item, index) => (
                  <span key={index} style={{ backgroundColor: `${item}` }} className={`w-4 h-4 rounded-full cursor-pointer`} onClick={() => setcolor(item)}>
                     {
                             item === color ? <ImCheckmark style={{color:'#fff',fontSize:'12px',marginTop:'1.5px',marginLeft:'1.7px'}}/> : null

                          
                        }
                  </span>
                ))
              }

            </div>
            <h3>Price</h3>
            <h5>$50000000</h5>
            <input type="range" id="points" name="points" min="0" max="10" /><br />
            <button className='bg-red-400 py-1 px-2 rounded-sm my-5'>Clear Filters</button>
          </div>
          <div className='porduct flex-1'>
            <div className='top pb-20  grid grid-cols-3'>
              <div className='gridIon flex cursor-pointer gap-3'>
                <span className=''><BsFillGrid1X2Fill /></span>
                <span><FiList /></span>
              </div>
              <h1>Totol Product {filter_productes.length}</h1>
              <div>
                <select name="cars" id="cars" className='border-black outline-none rounded-sm border text-center' onChange={sorting}>
                  <option value="AtoZ">A to Z</option>
                  <option value="ZtoA">Z to A</option>
                  <option value="lowest">Low to High</option>
                  <option value="highst">High to Low</option>
                </select>
              </div>
            </div>
            <div className='Prod grid grid-cols-4 gap-5'>
              {
                [...filter_productes]?.map((item, index) => (

                  <Link key={index} to={`/Single/${item._id}`}><div>
                    <div style={Background(item.Image, { backgroundPositon: 'center' })} className='image h-56 bg-center bg-cover p-10'></div>
                    <div className='info flex items-center justify-between px-2'>
                      <h5>{item.title}</h5>
                      <h5>{FormatPrice(item.price)}</h5>
                    </div>
                  </div></Link>

                ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductPage
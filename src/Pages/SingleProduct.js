
import { AiOutlineMinus,AiOutlinePlus,AiOutlineRollback,AiOutlineStar,AiFillStar } from 'react-icons/ai';
import { Link, useNavigate,useParams } from "react-router-dom";
import { BsStarHalf } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import { useEffect, useState } from "react";
import { useProductContext } from "../Context/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";




const API = 'https://products.up.railway.app/api/product'
const color = 'blue'

const SingleProduct = () => {
  const { singleProductfun, isLoading, singleProducts } = useProductContext()

  const {
    _id,
    title,
    stock,
    description,
    Image,
    images,
    star,
    price,
    reviews,
    Vendor,
    size,
    color

  } = singleProducts;

  const [cover, setcover] = useState()
  const [subimage, srbsetimage] = useState([])
  const [showimg,setshowing] = useState()
  const [colors,setcolors] = useState()
  const [amount,setamount] = useState(1)
// ==================== Function ========================

  const handleClick = (img,subImages) => {
    setcover(img);
    srbsetimage(subImages);
  };

  const starts = (start) => {

    const raiting = Array.from({length:5},(itme,index)=>{
      let number = index + 0.5;
      return start >= index + 1  ? <AiFillStar/> : start >= number ? <BsStarHalf/> : <AiOutlineStar/>
    })
  
    return raiting
  };

  const setDcrease = ()=>{
    amount > 1 ? setamount(amount - 1 ) : setamount(1);
  };

  const setInrease = ()=>{
    amount < stock ? setamount(amount + 1) : setamount(stock);
  }

  // ==================== Function ========================

  const history = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    singleProductfun(`${API}?_id=${id}`)
  }, [])

  return (
    <>
      <div className="bg-gray-100">
        <div className="absolute text-3xl cursor-pointer left-7 top-20" onClick={() => history(-1)}>
          <span><AiOutlineRollback /></span>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-start md:space-x-6">
  {/* ============================================================================================================ */}
            <div className='sideImsge flex flex-col gap-2'>
              {
                subimage?.map((item, indes) => (

                  <div key={indes} className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md' onClick={()=>setshowing(item)}>
                        <img
                          className="h-full w-full object-cover md:w-96"
                          src={item}
                          alt="Product Image"
                          />
                  </div>
                ))
              }
            </div>

            {/* ============================================================================================================ */}

            <div className="md:flex-shrink-0 pr-7">
              <img
                className="h-full w-full object-cover md:w-96"
                src={showimg || cover || Image }
                alt="Product Image"
              />
            </div>
            {/* ============================================================================================================ */}
            <div className="mt-4 md:mt-0 md:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
              <div className="flex items-center gap-3 py-6">
                <div className="flex items-center gap-1">
                  {starts(star)}
                </div>
                <h5>(  {`${reviews} customer reviews`})</h5>
              </div>
              {/* ============================================================================================================ */}
              <div className='sideImsge flex gap-2'>
                {
                  
                  images?.map((item, indes) => (
                      <>
                      
                    <div className='w-14 h-14 overflow-hidden cursor-pointer border border-slate-950 rounded-md' onClick={()=>handleClick(item.cover,item.subImages)}>
                      <img
                        className="h-full w-full object-cover md:w-96"
                        src={item.cover}
                        alt="Product Image"
                      />
                    </div>
                    </>
                  ))

                }
              </div>
{/* ============================================================================================================ */}

              <p className="mt-4 text-sm text-gray-500">
                {description}
              </p>
              <div className="my-4">
                <p className="text-xl text-gray-900 font-bold">MRP : <FormatPrice price={price} /></p>
              </div>
              <div className="stock">
                <div className="info border-b-2 border-slate-500">
                  <h6>Available: {stock > 10 ? 'In Stock' : stock > 0 ? ' Low Quantity' : 'Not Available '}</h6>
                  <h6 className="pb-3">Vendor : {Vendor}</h6>
                </div>

                <div className='flex gap-1 items-center pb-7 pt-4  '>
                  <h3 className=''>Color : </h3>
                  <span className='cursor-pointer'>All</span>
                  {
                    color?.map((item,index)=>(
                      <span className={`w-3 h-3 rounded-full cursor-pointer`} style={{backgroundColor:`${item}`}} onClick={()=>setcolors(item)}>
                        {
                             item === colors ? <ImCheckmark style={{color:'#fff',fontSize:'9px',marginTop:'1.5px',marginLeft:'1px'}}/> : null

                          
                        }
                      </span>
                    ))
                  }
                </div>
                <div className="itemCoun flex gap-5">
                  <button onClick={()=>setDcrease()}><AiOutlineMinus /></button>
                  <span>{amount}</span>
                  <button onClick={()=>setInrease()}><AiOutlinePlus /></button>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/Cart">  <button className="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Add to Cart
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

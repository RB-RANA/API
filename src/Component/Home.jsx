import { Link } from "react-router-dom";
import { Background } from '../Servers/Service';
import { useProductContext } from "../Context/ProductContext";

import { CirclesWithBar } from  'react-loader-spinner'



function Home() {
  const {isLoading,featureProduct } = useProductContext();
 
if(isLoading){
  return <div className="flex justify-center items-center mt-40">
<CirclesWithBar/>
  </div>
}

    return (
      <div className="grid grid-cols-3 gap-5">
{
  featureProduct.map((item,index)=> (
<Link key={item._id} to={`Single/${item._id}`}><div className='h-[55vh] bg-cover' style={Background(item.Image)}>
   hello
      </div></Link>
  ))
  }
      </div>
    );
  }
  
  export default Home;
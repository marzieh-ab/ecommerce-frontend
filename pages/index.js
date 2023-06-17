import Featured from "@/Components/Featured";
import Header from "../Components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/products";
import NewProducts from "@/Components/NewProducts";

export default function HomePage({product,newProducts}) {
  // console.log(newProducts)

 

  return(
  
      <div  >
        <Header />
        <Featured  product={product}/>
        <NewProducts newProducts={newProducts} />
       
      
      </div>
      

  )

 
}

export  async function getServerSideProps(){

  const id="64807ffaa7f244a3364e11bb"
  await mongooseConnect()
  const product=await Product.findById(id)
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return ({
    props:{
      product:JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    
    }
  })

}

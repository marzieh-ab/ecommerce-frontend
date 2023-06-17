import React from 'react'
import Center from './Center'
import styled from 'styled-components'

import Button from './Button';
import CartIcon from './icons/CartIcon';
import ButtonLink from './ButtonLink';
import {useContext} from "react";
import {CartContext}  from "../Components/CartContext"
const Bg=styled.div`
background-color:#222;
color:#fff;
padding:50px 0
`;

const Title=styled.h1`
margin:0;
font-weight:normal;
font-size:1.5rem;
@media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

const Desc=styled.p`
color:#aaa;
font-size:.8rem
`;

const Wraper=styled.div`
display:grid;
grid-template-columns: 1fr;
div:nth-child(1) {
    order: 2;
  }
gap:40px;
img{
  
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
}

@media screen and (min-width: 768px) {
  grid-template-columns:1.1fr .9fr;
  div:nth-child(1) {
    order: 0;
  }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapers=styled.div`

display:flex;
gap:10px;
margin-top:25px
`;

function Featured({product}) {

  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {

    console.log("addrtocart")
    addProduct(product._id);
  }
  return (
    <Bg>
        <Center>
        <Wraper>
        <Column>
        <div>

        <Title>{product.title}</Title>
            <Desc>{product.description} </Desc>
           <ButtonWrapers>
           <ButtonLink  href={`/product/${product._id}`} white="true"  size="l"  outline="true">Read More</ButtonLink>
            <Button  size="l"  white  onClick={addFeaturedToCart}>
            <CartIcon />
            Add to catr
            </Button>
           
           </ButtonWrapers>
        </div>
       
        </Column>
        <Column>
        <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt=""/>
        </Column>
        
    </Wraper>

        
           
        </Center>
        
        
        
        </Bg>
  )
}

export default Featured
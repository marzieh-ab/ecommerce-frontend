import styled ,{css} from "styled-components"
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link"
import {useContext, useState} from "react";
import {CartContext} from "../Components/CartContext";


const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`;
const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:5px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

function ProductBox({_id,title,price,description,images}) {
  const url = '/product/'+_id;
  const{addProduct}=useContext(CartContext)
  return (
    <ProductWrapper>
    <WhiteBox href={url} >
      <div>
        <img src={images?.[0]} alt=""/>
      </div>
    </WhiteBox>
    <ProductInfoBox>
      <Title href={url}  >{title}</Title>
      <PriceRow>
        <Price>
          ${price}
        </Price>
        <Button primary outline block  onClick={()=>addProduct(_id)}>
          Add to cart
        </Button>
      </PriceRow>
    </ProductInfoBox>
  </ProductWrapper>
   
  )
}

export default ProductBox
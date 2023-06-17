import Header from "../Components/Header";
import styled from "styled-components";
import Center from "../Components/Center";
import {mongooseConnect} from "../lib/mongoose";
import {Product} from "../models/products";
import ProductsGrid from "../Components/ProductsGrid";
import Title from "../Components/Title";

export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}
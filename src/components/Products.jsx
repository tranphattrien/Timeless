import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const Products = () => {
  return (
    <>
      <Title>Best Sellers</Title>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id}></Product>
        ))}
      </Container>
    </>
  );
};

export default Products;

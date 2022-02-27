import styled from "styled-components";
import Product from "./Product";
import { productslist } from "../../data";
import { Button, Mobile, Tablet, Ipad } from "../../globalStyle";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 100px;
  background-color: rgba(245, 245, 245, 0.7);
  align-items: center;
  ${Tablet({ padding: "0", marginBottom: "30px" })}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  &::after {
    content: "";
    width: 40%;
    height: 2px;
    background-color: #bff073;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const ProductsListName = styled.div`
  display: flex;
  gap: 0 30px;
  margin-bottom: 20px;
`;
const ProductsName = styled.div`
  text-transform: uppercase;
`;
const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(260px, 1fr));
  grid-gap: 15px;
  margin-bottom: 30px;
  ${Ipad({
    gridTemplateColumns: "repeat(2, minmax(260px, 1fr))",
  })}
  ${Mobile({
    gridTemplateColumns: "repeat(1, minmax(260px, 1fr))",
  })}
`;
const ButtonLoadMore = styled.button``;

const Products = ({ filters, sort }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noElement, setNoElement] = useState(4);
  useEffect(() => {
    filters &&
      setFilteredProducts(
        productslist.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filters, sort]);
  useEffect(() => {
    if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.newprice - a.newprice)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.newprice - b.newprice)
      );
    }
  }, [sort]);
  const handleNoElement = () => {
    setNoElement(noElement + 4);
  };
  useEffect(() => {
    const abortController = new AbortController();
    handleNoElement();
    return abortController.abort();
  }, []);

  const productslided = productslist.slice(0, noElement);

  return (
    <Container>
      <Top>
        <Title>Our Product</Title>
        <ProductsListName>
          <ProductsName>Vegatable</ProductsName>
          <span>/</span>
          <ProductsName>meat and sea food</ProductsName>
        </ProductsListName>
      </Top>
      <Bottom>
        {filters
          ? filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))
          : productslided.map((product) => (
              <Product product={product} key={product.id} />
            ))}
      </Bottom>
      <ButtonLoadMore className="custom-btn btn-3" onClick={handleNoElement}>
        Load More
      </ButtonLoadMore>
    </Container>
  );
};

export default Products;

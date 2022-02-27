import styled from "styled-components";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import { useState } from "react";
import { Mobile } from "../globalStyle";

const Container = styled.div`
  padding: 0 15px;
`;
const Wrapper = styled.div`
  padding: 20px 150px;
  background-color: #bff073;
  ${Mobile({
    padding: "5px",
  })}
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ControlItem = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
  ${Mobile({
    gap: "5px",
  })}
`;
const Title = styled.span``;

const Option = styled.option`
  color: #828282;
`;

const FilterControl = styled.select`
  padding: 5px;
  flex: 1;
  border: none;
  outline: none;
`;
const SortControl = styled.select`
  padding: 5px;
  flex: 1;
  border: none;
  outline: none;
`;

const ProductsList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("desc");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <Container>
      <Header />
      <Navbar />
      <Wrapper>
        <Control>
          <ControlItem>
            <Title>Catagories :</Title>
            <FilterControl name="cat" onChange={handleFilter}>
              <Option disabled>--All--</Option>
              <Option>vegatable</Option>
              <Option>meat</Option>
              <Option>seafood</Option>
            </FilterControl>
          </ControlItem>
          <ControlItem>
            <Title>Sale :</Title>
            <SortControl onChange={(e) => setSort(e.target.value)}>
              <Option disabled>--All--</Option>
              <Option value="desc">Price (desc)</Option>
              <Option value="asc">Price (asc)</Option>
            </SortControl>
          </ControlItem>
        </Control>
      </Wrapper>
      <Products filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};
export default ProductsList;

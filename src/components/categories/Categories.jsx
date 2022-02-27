import Category from "./Category";
import { categories } from "../../data";
import styled from "styled-components";
import { Tablet } from "../../globalStyle";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  ${Tablet({
    gridTemplateColumns: "1fr",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

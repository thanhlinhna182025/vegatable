import React from "react";
import styled from "styled-components";

import { useState, useEffect } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px 150px;
  background-color: #bff073;
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 0 100px;
`;
const ControlItem = styled.div`
  display: flex;
  gap: 0 10px;
  align-items: center;
`;
const Title = styled.span``;

const Option = styled.option`
  color: #828282;
`;
const SearchControl = styled.input`
  flex: 2;
  padding: 5px;
  border: none;
  outline: none;
`;

const FilterControl = styled.select`
  padding: 5px;
  flex: 1;
  border: none;
  outline: none;
`;

const Controller = () => {
  return (
    <Container>
      <Wrapper>
        <Control>
          <ControlItem>
            <Title>Catagories :</Title>
            <FilterControl name="cat">
              <Option>vegatable</Option>
              <Option>meat</Option>
              <Option>seafood</Option>
            </FilterControl>
          </ControlItem>
          <SearchControl placeholder="search" />
          <ControlItem>
            <Title>Sale :</Title>
            <FilterControl name="sale">
              <Option>flashsale</Option>
              <Option>suppersale</Option>
              <Option>new</Option>
            </FilterControl>
          </ControlItem>
        </Control>
      </Wrapper>
    </Container>
  );
};

export default Controller;

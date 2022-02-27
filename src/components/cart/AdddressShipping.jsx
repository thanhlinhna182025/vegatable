import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f2f2f2;
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px 30px;
  justify-content: space-between;
  gap: 20px 0;
`;

const Input = styled.input`
  width: 45%;
  padding: 10px 10px;
  border: none;
  border-radius: 2px;
`;
const Select = styled.select`
  width: 45%;
  padding: 5px 10px;
  border: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
`;

const Option = styled.option``;
const AdddressShipping = () => {
  return (
    <Container>
      <Form>
        <Input placeholder="FullName" />
        <Input placeholder="PhoneNumber" />
        <Input placeholder="Email" />
        <Select>
          <Option>--Province--</Option>
          <Option>Province 1</Option>
          <Option>Province 2</Option>
          <Option>Province 3</Option>
          <Option>Province 4</Option>
          <Option>Province 5</Option>
          <Option>Province 6</Option>
        </Select>
        <Select>
          <Option>--Dictrict--</Option>
          <Option>Dictrict 1</Option>
          <Option>Dictrict 2</Option>
          <Option>Dictrict 3</Option>
          <Option>Dictrict 4</Option>
          <Option>Dictrict 5</Option>
          <Option>Dictrict 6</Option>
        </Select>
        <Select>
          <Option>--Ward--</Option>
          <Option>Ward 1</Option>
          <Option>Ward 2</Option>
          <Option>Ward 3</Option>
          <Option>Ward 4</Option>
          <Option>Ward 5</Option>
          <Option>Ward 6</Option>
        </Select>
        <TextArea placeholder="Address" />
        <TextArea placeholder="Note" />
      </Form>
    </Container>
  );
};

export default AdddressShipping;

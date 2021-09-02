import React from "react";

import {
  Container,
  ContentImgProduct,
  ContentInformationProduct,
  TitleProduct,
  Price,
  ListPrice,
} from "./style";

import { ProductType } from "../../Model/ProductType";

const Product: React.FC<ProductType> = (props) => {
  return (
    <Container>
      <ContentImgProduct>
        <img
          src={props.imageUrl}
          alt="Imagem produto"
        />
      </ContentImgProduct>
      <ContentInformationProduct>
        <TitleProduct>{props.name}</TitleProduct>
        <Price>R$ {props.price}</Price>
        <ListPrice>R$ {props.listPrice}</ListPrice>
      </ContentInformationProduct>
    </Container>
  );
};

export default Product;
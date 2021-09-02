import React, { useState, useEffect } from "react";
import {
  Box,
  Title,
  ContentProducts,
  ContainerTotal,
  ContentButton,
} from "./style";

import FreeShippingMessage from "../../components/Free_shipping_message";
import Product from "../../components/Product";
import { ProductType } from "../../Model/ProductType";
import {formatValue} from "../../scripts/FormaterValue"

/**Testes */
/**Substitua a string da constante url com o endereço do arquivo de testes da API */
/**Modelos: "./acima10.json"  || "./abaixo10.json" */
const url = "./acima10.json";

const Carrinho: React.FC = () => {
  const [product, setProduct] = useState<ProductType[]>();
  const [total, setTotal] = useState<number>(0);
  
  useEffect(() => {
    fetch(url, {
      headers: { Accept: "aplication/json" },
    })
      .then((res) => res.json())
      .then((res) => setProduct(res.items));
  }, []);

  useEffect(() => {
    fetch(url, {
      headers: { Accept: "aplication/json" },
    })
      .then((res) => res.json())
      .then((res) => setTotal(res.totalizers[0].value));
  }, []);

  return (
    <Box>
      <Title>Meu carrinho</Title>
      <ContentProducts>
        {product?.map((item, id) => (
          <div key={id}>
            <Product
              imageUrl={item.imageUrl}
              name={item.name}
              price={formatValue(item.price)}
              listPrice={formatValue(item.listPrice)}
            />
          </div>
        ))}
      </ContentProducts>
      <ContainerTotal>
        <div className="total">
          <p>Total</p>
          <p>R$ {formatValue(total)}</p>
        </div>
        <FreeShippingMessage value={formatValue(total)}/>
      </ContainerTotal>
      <ContentButton>Finalizar compra</ContentButton>
    </Box>
  );
};

export default Carrinho;
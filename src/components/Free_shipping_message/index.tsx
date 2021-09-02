import React from "react";

import { ContentMessage } from "./style";

interface Conditional {
  value: string;
}

const FreeShippingMessage: React.FC<Conditional> = (props) => {
  if (parseFloat(props.value) > 10) {
    return (
      <ContentMessage>Parabéns, sua compra tem frete grátis !</ContentMessage>
    );
  } else return <></>;
};

export default FreeShippingMessage;

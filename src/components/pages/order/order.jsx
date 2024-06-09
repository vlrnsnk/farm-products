import React from "react";
import {
  StyledOrder,
  LeftColumn,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
} from "./styles";
import Panel from "../../../components/ui/panel/panel";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import ProductCart from "../../ui/product-cart/product-cart";

SwiperCore.use([Pagination, Mousewheel, Scrollbar]);

function Order({ products }) {
  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Choose your products
          </Title>
          Checkbox with products list
        </Panel>
        <Panel>
          <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Place order
          </Title>
          <AddressInput placeholder="Enter your delivery address" />
          <PriceLabel as="span">Price</PriceLabel>
          <PriceValue>400</PriceValue>
          <Button maxWidth>Buy</Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{ type: "fraction" }}
      >
        $
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  );
}

export default Order;

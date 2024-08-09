import React, { useState } from "react";
import {
  StyledOrder,
  LeftColumn,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel,
} from "./styles";
import Panel from "../../../components/ui/panel/panel";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import ProductCart from "../../ui/product-cart/product-cart";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";

SwiperCore.use([Pagination, Mousewheel, Scrollbar]);

function Order({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id),
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0,
  );

  const [address, setAddress] = useState("");

  const handleBuyClick = () => {
    alert(
      `Thank you for your order, you bought:\n${selectProducts.map(
        (product) => `${product.name} - ${product.price} USD\n`
      ).join('')}\nTotal: ${fullPrice} USD.\nDelivery to the address: ${address}.`,
    );
  };

  return products && products.length ? (
    <StyledOrder as="form">
      <LeftColumn>
        {/* <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Choose your products
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Panel>
        <Panel>
          <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Place order
          </Title>
          <AddressInput
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <PriceLabel as="span">Price</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button
            maxWidth
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Buy
          </Button>
        </Panel> */}
      </LeftColumn>
      <ProductSwiper
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{ type: "fraction" }}
        onSwiper={setSwiperRef}
      >
        $
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  ) : (
    "The products were too delicious and they sold out."
  );
}

export default Order;

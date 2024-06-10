import React from "react";
import { Header, Content, TabListItem, TabButton } from "./styles";

function Tabs({ tabsList = [], maxContentHeight }) {
  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton></TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeight={maxContentHeight}></Content>
    </div>
  );
}

export default Tabs;

import React, { useState } from "react";
import { Header, Content, TabListItem, TabButton } from "./styles";

function Tabs({ tabsList = [], maxContentHeight }) {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    },
                  })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeight={maxContentHeight}>
        {tabsList[selectIndex].content}
      </Content>
    </div>
  );
}

export default Tabs;

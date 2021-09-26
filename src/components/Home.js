import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import myData from './../carInfo.json';

function Home() {
  return (
    <Container>
      {myData.map((data) => {
        return (
          <Section
            key={data.id}
            title={data.title}
            bgImg={data.image}
            description={data.description}
            leftButton="Custom order"
            rightButton="Existing Inventory"
          />
        );
      })}
      <Section
        key="Panels"
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        bgImg="solar-panel.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        key="Solar-roof"
        title="Solar roof"
        description="Lowest Cost Solar Panels in America"
        bgImg="solar-roof.jpg"
        leftButton="order now"
        rightButton="learn more"
      />
      <Section
        key="Accessories"
        title="Accessories"
        bgImg="accessories.jpg"
        leftButton="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 9;
`;

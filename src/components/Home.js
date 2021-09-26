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
        key=""
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
`;

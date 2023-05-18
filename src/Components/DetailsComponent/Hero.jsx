import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Container>
      <Left>
        <div>
          By Themadbrains in{" "}
          <span style={{ color: "orange" }}>inspiration</span>
        </div>
        <h1>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
        <p>
          Choose from over 40,000 online video courses with new additions
          published every month.
        </p>
      </Left>
      <Right>
        <button>Start Leaning Now</button>
      </Right>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffd9de;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: block;
    height: 450px;
  }
`;

const Right = styled.div`
  margin-right: 60px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin-left: 16px;
  }

  button {
    width: 200px;
    height: 45px;
    background-color: #f55469;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 19px;
  }
`;
const Left = styled.div`
  margin-left: 60px;
  margin-top: 60px;

  @media screen and (max-width: 500px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
    margin-left: 16px;
  }

  div {
    font-size: 20px;
  }

  h1 {
    font-size: 40px;

    @media screen and (max-width: 500px) {
      font-size: 39px;
      width: 99%;
      margin: 0;
      margin-top: 10px;
    }
  }

  p {
    font-size: 23px;
    color: gray;
    width: 78%;
    line-height: 2rem;

    @media screen and (max-width: 500px) {
      font-size: 15px;
      line-height: 1.5rem;
      margin: 0;
      margin-top: 4px;
    }
  }
`;

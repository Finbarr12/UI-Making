import React from "react";
import styled from "styled-components";
import girl from "../assets/girl.jpg";
import face from "../assets/face.jpg";

const Hero = () => {
  return (
    <Container>
      <Left>
        <div>
          Lorem ipsum dolor sit. <span>Lorem, ipsum.</span>
        </div>
        <h1>
          Why Swift UI Should Be On <br /> The Rader Of Every Mobile
          <br /> Developer
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Dicta
          odit dolor quo corporis!
        </p>
        <button>Start Learning Now</button>
      </Left>
      <Right>
        <img src={face} alt="" />
      </Right>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #ffd9de;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 900px) {
    display: block;
    padding-top: 10px;
  }

  button {
    width: 140px;
    height: 40px;
    background-color: #f55469;
    border-radius: 5px;
    border: none;
    color: white;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 650px;
  /* background-color: red; */

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-top: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Left = styled.div`
  margin-right: 60px;

  @media screen and (max-width: 500px) {
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 550px) and (max-width: 900px) {
    margin-left: 40px;
  }

  h1 {
    @media screen and (max-width: 500px) {
      font-size: 21px;
      margin: 0;
      margin-top: 14px;
      /* width: 80%; */
      text-align: center;
    }
  }
  p {
    @media screen and (max-width: 500px) {
      font-size: 19px;
      width: 80%;
      text-align: center;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { FaHandsWash } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import pics from "../../assets/girl.jpg";

const Responses = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <FaHandsWash size={30} />
          <p>4.96K claps</p>
        </Hold>
        <Hold>
          <BsChatDots size={30} />
          <p>18 Responses</p>
        </Hold>
        <Hold>
          <Square>
            <img src={pics} alt="" />
          </Square>
          <Hold2>
            <p style={{ fontSize: "18px" }}>Written By</p>
            <h4>Nicole Brown</h4>
          </Hold2>
        </Hold>
        <Button>Follow</Button>
      </Wrapper>
      <Holder>
        <Hold>
          <FaHandsWash size={30} />
          <p>4.96K claps</p>
        </Hold>
        <Hold>
          <BsChatDots size={30} />
          <p>18 Responses</p>
        </Hold>
        <Hold>
          <Square>
            <img src={pics} alt="" />
          </Square>
          <Hold2>
            <p style={{ fontSize: "18px" }}>Written By</p>
            <h4>Nicole Brown</h4>
          </Hold2>
        </Hold>
        <Button>Follow</Button>
      </Holder>
    </Container>
  );
};

export default Responses;

const Holder = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    border-top: 1px solid gray;
    gap: 15px;
  }
`;

const Button = styled.button`
  font-size: 19px;
  border: 1px solid red;
  color: red;
  width: 80px;
  height: 45px;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 500px) {
    width: 60px;
    height: 40px;
    font-size: 14px;
  }
`;

const Hold2 = styled.div`
  margin-left: 7px;
`;

const Square = styled.div`
  width: 70px;
  height: 70px;
  /* background-color: red; */
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 21px;
    color: gray;
    margin-left: 9px;

    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }

  div {
    p {
      margin: 0;
    }
    h4 {
      margin: 0;
      font-size: 21px;
      margin-top: 4px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 90%;
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 140px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

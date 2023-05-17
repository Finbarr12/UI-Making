import React from "react";
import styled from "styled-components";
import { Button } from "../Static";
import pic from "../assets/seo.jpg";
import face from "../assets/face.jpg";
import { AiOutlineEye } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
const Popular = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Popular Blog</h1>
          <Button />
        </Top>
        <CardHold>
          <Card>
            <MidHold>
              <ImageHold>
                <img src={pic} alt="" />
              </ImageHold>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
              <ProHold>
                <PPHold>
                  <Pic>
                    <img src={face} alt="" />
                  </Pic>
                  <span>Nicole Brown</span>
                </PPHold>
                <Hold2>
                  <AiOutlineEye size={20} style={{ color: "red" }} />
                  <span>28,000</span>
                </Hold2>
              </ProHold>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis saepe deleniti aut eos, quod a atque assumenda
                maiores voluptatum exercitationem neque officiis!
              </p>
              <ProHold2>
                <h4>Read More</h4>
                <BsBookmark />
              </ProHold2>
            </MidHold>
          </Card>
          <Card>
            <MidHold>
              <ImageHold>
                <img src={pic} alt="" />
              </ImageHold>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
              <ProHold>
                <PPHold>
                  <Pic>
                    <img src={face} alt="" />
                  </Pic>
                  <span>Nicole Brown</span>
                </PPHold>
                <Hold2>
                  <AiOutlineEye size={20} style={{ color: "red" }} />
                  <span>28,000</span>
                </Hold2>
              </ProHold>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis saepe deleniti aut eos, quod a atque assumenda
                maiores voluptatum exercitationem neque officiis!
              </p>
              <ProHold2>
                <h4>Read More</h4>
                <BsBookmark />
              </ProHold2>
            </MidHold>
          </Card>
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default Popular;

const ProHold2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 15px;

  h4 {
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    margin-top: 14px;
  }

  @media screen and (min-width: 550px) and (max-width: 900px) {
    margin-top: 15px;
  }
`;

const Hold2 = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

const Pic = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  /* background-color: red; */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProHold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PPHold = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

const ImageHold = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: red; */
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MidHold = styled.div`
  width: 90%;
  height: 90%;

  h2 {
    width: 100%;
    margin: 0;
    margin-top: 15px;
    /* font-weight: 900; */
    background-color: red;
  }

  p {
    margin: 0;
    margin-top: 15px;
  }
`;

const Card = styled.div`
  background-color: white;
  /* border: 1px solid blacks; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardHold = styled.div`
  width: 100%;
  height: 490px;
  /* background-color: gold; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 500px) {
    height: 1000px;
    grid-template-rows: repeat(2, 500px);
    grid-template-columns: none;
    margin-top: 20px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    @media screen and (max-width: 500px) {
      font-size: 19px;
    }
  }
`;

const Wrapper = styled.div`
  width: 60%;
  margin-top: 70px;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: #ffd9de;
  margin-top: 60px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: 1200px;
  }
`;

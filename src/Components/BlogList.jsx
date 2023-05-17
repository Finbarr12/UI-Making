import React from "react";
import styled from "styled-components";
import { Button } from "../Static";
import ui from "../assets/ux2.jpg";
import ux from "../assets/ux.jpg";
import seo from "../assets/seo.jpg";
import develop from "../assets/develop.jpg";

const BlogList = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Reading Blog List</h1>
          <Button />
        </Top>
        <Under>
          <Box ri="77%" tp="20.5%" tabt="46%" tabr="52%">
            <img src={ui} alt="" />
            <div>UI design</div>
          </Box>
          <Box ri="51%" tp="46%" tabt="46%" tabr="1px">
            <img src={ux} alt="" />
            <div>UX design</div>
          </Box>
          <Box ri="25.5%" tp="72%" tabt="97.5%" tabr="52%">
            <img src={seo} alt="" />
            <div>SEO</div>
          </Box>
          <Box ri="1px" tp="98%" tabt="97.5%" tabr="1px">
            <img src={develop} alt="" />
            <div>Development</div>
          </Box>
        </Under>
      </Wrapper>
    </Container>
  );
};

export default BlogList;

const Box = styled.div`
  background-color: skyblue;
  /* border: 1px solid red; */
  border-radius: 10px;
  overflow: hidden;
  /* position: relative; */

  div {
    width: 110px;
    z-index: 3;
    height: 31px;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: absolute;
    right: ${({ ri }) => ri};
    top: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    @media screen and (max-width: 500px) {
      top: ${({ tp }) => tp};
      right: 1%;
    }

    @media screen and (min-width: 550px) and (max-width: 900px) {
      /* right: 1%; */
      top: ${({ tabt }) => tabt};
      right: ${({ tabr }) => tabr};
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Under = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 20px;
  position: relative;

  @media screen and (max-width: 500px) {
    height: 800px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: none;
    margin-top: 15px;
    gap: 25px;
  }
  @media screen and (min-width: 550px) and (max-width: 900px) {
    height: 800px;
    gap: 25px;
    margin-top: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

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
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (max-width: 900px) {
    margin-top: 260px;
  }
`;

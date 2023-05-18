import React from "react";
import styled from "styled-components";
import pics from "../../assets/teams.jpg";
const ImageBox = () => {
  return (
    <Container>
      <img src={pics} alt="" />
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  width: 80%;
  height: 400px;
  /* background-color: red; */
  position: absolute;
  top: 50%;
  left: 10%;

  @media screen and (max-width: 500px) {
    height: 200px;
    top: 69%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

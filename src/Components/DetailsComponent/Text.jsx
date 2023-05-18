import React from "react";
import styled from "styled-components";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaRedditSquare, FaWhatsappSquare } from "react-icons/fa";

const Text = () => {
  return (
    <Container>
      <p>
        Playstation vs Xbox, Mario vs Sonic, Unreal vs Unity? Whether it’s
        consoles, characters, or game engines, people get passionate about
        defending their gaming industry favorites.
      </p>
      <p>
        Focusing on the game engines, Unity and Unreal Engine (aka UE4) are the
        two most popular game engines on the market today. They are the go-to
        tools for most indie developers. While many game development studios use
        their own proprietary game engines, plenty use Unity or Unreal.
      </p>
      <p>
        So which engine is better? This is one of the most asked questions from
        the over half a million students that the team at GameDev.tv and I have
        taught over the last 5 years.
      </p>
      <p>
        Unreal Engine was developed by Epic Games founder, Tim Sweeney, in 1998.
        It launched alongside its debut title ‘Unreal’ and was unique in
        allowing players to modify the game for the first time. Today Unreal is
        associated with “better graphics” and offers a big studio AAA-quality to
        the games that use it. Epic Games, the company behind Unreal Engine, has
        seen epic success with its game Fortnite which has 200 million users and
        has generated revenue reported at $1 billion as of January 2019. Unreal
        Engine itself has 7 million users.
      </p>
      <p>
        Founded in Copenhagen in 2004, the founders of Unity wanted to make game
        development universally accessible. Today Unity is known as the “make
        any game” engine and is ideal for indie developers. Over 50% of games
        across all platforms use Unity and 60% of all VR/AR content is powered
        by Unity.
      </p>
      <p>
        In reality, though, both engines are capable of making nearly any sort
        of game and deploying that game to most gaming platforms.
      </p>
      <p>
        But that doesn’t help you decide, right? To answer which of these game
        engines is best for your needs, you first need to answer these five
        questions:
      </p>
      <Holder>
        <Box bc="#4761A6" jc="">
          <IoLogoFacebook
            size={24}
            style={{ color: "white", marginLeft: "20px" }}
          />
          <span>Share</span>
        </Box>
        <Box bc="#56B4F5" jc="">
          <AiFillTwitterSquare
            size={24}
            style={{ color: "white", marginLeft: "20px" }}
          />
          <span>Share</span>
        </Box>
        <Box bc="#3C82C0" jc="">
          <IoLogoLinkedin
            size={24}
            style={{ color: "white", marginLeft: "20px" }}
          />
          <span>Share</span>
        </Box>
        <Box bc="#F54504" jc="">
          <FaRedditSquare
            size={24}
            style={{ color: "white", marginLeft: "20px" }}
          />
          <span>Share</span>
        </Box>
        <Box bc="#54CC61" jc="">
          <FaWhatsappSquare
            size={24}
            style={{ color: "white", marginLeft: "20px" }}
          />
          <span>Share</span>
        </Box>
        <Box bc="#D51000" jc="">
          <IoLogoYoutube
            size={24}
            style={{ color: "white", marginLeft: "20px" }}
          />
          <span>Share</span>
        </Box>
      </Holder>
      <Holder2>
        <Box bc="lightgray" jc="center">
          <p>Affordable</p>
        </Box>
        <Box bc="lightgray" jc="center">
          <p>Stunniing</p>
        </Box>
        <Box bc="lightgray" jc="center">
          <p>Making</p>
        </Box>
        <Box bc="lightgray" jc="center">
          <p>Madbrains</p>
        </Box>
        <Box bc="lightgray" jc="center">
          <p>Products</p>
        </Box>
      </Holder2>
    </Container>
  );
};

export default Text;

const Holder2 = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 25px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const Box = styled.div`
  background-color: ${({ bc }) => bc};
  border-radius: 5px;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => jc};

  p {
    font-size: 21px;
    margin-left: 15px;
  }

  span {
    margin-left: 7px;
    color: white;
    font-size: 20px;
  }
`;

const Holder = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 25px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const Container = styled.div`
  margin-top: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    margin-top: 150px;
  }
  p {
    font-size: 22px;
    color: gray;
    width: 90%;

    @media screen and (max-width: 500px) {
      font-size: 17px;
    }
  }
`;

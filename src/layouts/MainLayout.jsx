import Footer from "../components/footer/Footer";
import React from "react";
import Router from "../routes/Router";
import TopBar from "../components/topbar/TopBar";
import { backgroundColor } from "../assets/colors";
import { size } from "../assets/breakpoints";
import { styled } from "styled-components";

const MainLayout = () => {
  return (
    <Wrapper>
      <TopBar />
      <Container>
        <Router />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  background-color: ${backgroundColor};
`;

const Container = styled.div`
  height: 89vh;
  overflow: hidden;
  margin-bottom: 30px;
  @media (max-width: ${size.mobile}) {
    height: 86vh;
  }
`;

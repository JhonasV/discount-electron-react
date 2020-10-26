import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import styled from "styled-components";
import HomeBackground from "../../assets/home_bg.svg";
import { Users } from "../../models/Users";
const Grid = styled.div`
  display: flex;
`;

const GridItem = styled.div<{ size: Number; image?: any }>`
  flex: ${(props) => props.size.toString()};
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const Main = styled.main`
  padding: 1em;
  width: 95%;
  height: 78vh;
  border: 2px solid #eee;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  border-radius:1rem;
`;



const Layout = ({ children,currentUser }: { children: any, currentUser: Users }) => {
  return (
    <>
      <Header />
      <Grid>
        <GridItem size={2}>
          <Sidebar currentUser={currentUser} />
        </GridItem>
        <GridItem image={HomeBackground} size={8}>
          <Main>{children}</Main>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;

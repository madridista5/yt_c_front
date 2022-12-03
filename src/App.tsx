import React from 'react';
import styled from 'styled-components';
import {Menu} from "./components/Menu/Menu";
import {Navbar} from "./components/Navbar/Navbar";

import './App.css';

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;
const Wrapper = styled.div`
`;

export const App = () => {
    return (
            <Container className="app">
                <Menu/>
                <Main>
                    <Navbar/>
                    <Wrapper>
                        Video Cards
                    </Wrapper>
                </Main>
            </Container>
    );
}

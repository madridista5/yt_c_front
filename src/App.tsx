import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Menu} from "./components/Menu/Menu";
import {Navbar} from "./components/Navbar/Navbar";
import {darkTheme, lightTheme} from "./utils/theme";

import './App.css';

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`;
const Wrapper = styled.div`
`;

export const App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container className="app">
                <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Main>
                    <Navbar/>
                    <Wrapper>
                        Video Cards
                    </Wrapper>
                </Main>
            </Container>
        </ThemeProvider>
    );
}

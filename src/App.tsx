import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Menu} from "./components/Menu/Menu";
import {Navbar} from "./components/Navbar/Navbar";
import {darkTheme, lightTheme} from "./utils/theme";

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Video} from "./pages/Video";

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
                <BrowserRouter>
                <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
                <Main>
                    <Navbar/>
                    <Wrapper>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home/>}/>
                                <Route path="video">
                                    <Route path=":id" element={<Video/>}/>
                                </Route>
                            </Route>
                        </Routes>
                    </Wrapper>
                </Main>
            </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
}

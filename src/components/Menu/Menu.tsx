import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';


const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
`;

const Hr = styled.hr`
    margin: 15px 0;
  border: 0.5px solid #373737;
`;

export const Menu = () => (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={logo}/>
                CloneTube
            </Logo>
            <Item>
                <HomeIcon/>
                Home
            </Item>
            <Item>
                <ExploreIcon/>
                Explore
            </Item>
            <Item>
                <SubscriptionsIcon/>
                Subscriptions
            </Item>
            <Hr/>
            <Item>
                <VideoLibraryIcon/>
                Library
            </Item>
            <Item>
                <HistoryIcon/>
                History
            </Item>
            <Hr/>
            <Item>
                <LibraryMusicIcon/>
                Music
            </Item>
            <Item>
                <SportsSoccerIcon/>
                Sports
            </Item>
            <Item>
                <SportsEsportsIcon/>
                Gaming
            </Item>
            <Item>
                <MovieCreationIcon/>
                Movies
            </Item>
            <Item>
                <NewspaperIcon/>
                News
            </Item>
            <Item>
                <LiveTvIcon/>
                Live
            </Item>
            <Hr/>
            <Item>
                <SettingsIcon/>
                Settings
            </Item>
            <Item>
                <FlagIcon/>
                Report
            </Item>
            <Item>
                <HelpOutlineIcon/>
                Help
            </Item>
            <Item>
                <LightModeIcon/>
                Light Mode
            </Item>
        </Wrapper>
    </Container>
)
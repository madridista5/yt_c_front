import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import {Comments} from "../components/Comments";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export const Video = () => {
    return <Container>
        <Content>
            <VideoWrapper>
                <iframe
                    width="100%"
                    height="720"
                    src="https://youtube.com/embed/k3Vfj-e1Ma4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </VideoWrapper>
            <Title>Test video</Title>
            <Details>
                <Info>7.948.244 views * Jun 22, 2022</Info>
                <Buttons>
                    <Button>
                        <ThumbUpOutlinedIcon/> 123
                    </Button>
                    <Button>
                        <ThumbDownOffOutlinedIcon/> Dislike
                    </Button>
                    <Button>
                        <ReplyOutlinedIcon/> Share
                    </Button>
                    <Button>
                        <AddTaskOutlinedIcon/> Save
                    </Button>
                </Buttons>
            </Details>
            <Hr/>
            <Channel>
                <ChannelInfo>
                    <Image src="https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_960_720.png"/>
                    <ChannelDetail>
                        <ChannelName>Name Channel</ChannelName>
                        <ChannelCounter>200k subscribers</ChannelCounter>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                            officia!</Description>
                    </ChannelDetail>
                </ChannelInfo>
                <Subscribe>SUBSCRIBE</Subscribe>
            </Channel>
            <Hr/>
            <Comments></Comments>
        </Content>
        <Recommendation>Recommendation</Recommendation>
    </Container>
}
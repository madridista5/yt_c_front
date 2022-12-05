import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px; // from YT
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
`;

export const Card = () => {
    return <Container>
        <Image src="https://cdn.pixabay.com/photo/2016/08/27/12/06/website-1624028_960_720.png"/>
        <Details>
            <ChannelImage src="https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_960_720.png"/>
            <Texts>
                <Title>Title video</Title>
                <ChannelName>Channel name</ChannelName>
                <Info>660.887 views * 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
}
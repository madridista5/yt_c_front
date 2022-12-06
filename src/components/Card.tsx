import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div<{ type: string | undefined }>`
  width: ${(props => props.type !== 'sm' && '360px')};
  margin-bottom: ${(props => props.type === 'sm' ? '10px' : '45px')};
  cursor: pointer;
  display: ${(props => props.type === 'sm' && 'flex')};
  gap: 10px;
`;

const Image = styled.img<{ type: string | undefined }>`
  width: 100%;
  height: ${(props => props.type === 'sm' ? '120px' : '204px')}; // from YT
  background-color: #999;
  flex: 1;
`;

const Details = styled.div<{ type: string | undefined }>`
  display: flex;
  margin-top: ${(props => props.type !== 'sm' && '16px')};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img<{ type: string | undefined }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: ${(props => props.type === 'sm' && 'none')};
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

interface Props {
    type?: string,
}

export const Card = ({type}: Props) => {
    return <Link to="/video/test" style={{textDecoration: 'none'}}>
        <Container type={type}>
            <Image type={type} src="https://cdn.pixabay.com/photo/2016/08/27/12/06/website-1624028_960_720.png"/>
            <Details type={type}>
                <ChannelImage type={type} src="https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_960_720.png"/>
                <Texts>
                    <Title>Title video</Title>
                    <ChannelName>Channel name</ChannelName>
                    <Info>660.887 views * 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    </Link>
}
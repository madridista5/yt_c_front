import React from "react";
import styled from "styled-components";

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

`;

const Details = styled.div`

`;

const Info = styled.span`

`;

const Buttons = styled.div`

`;

const Button = styled.div`

`;

const Recommendation = styled.div`
  flex: 2;
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
                    <Button>button</Button>
                </Buttons>
            </Details>
        </Content>
        <Recommendation>Recommendation</Recommendation>
    </Container>
}
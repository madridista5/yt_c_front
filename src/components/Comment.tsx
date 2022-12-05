import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

export const Comment = () => {
    return (
        <Container>
            <Avatar src="https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_960_720.png"/>
            <Details>
                <Name>John Lock <Date>2 days ago</Date></Name>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, est?</Text>
            </Details>
        </Container>
    )
}
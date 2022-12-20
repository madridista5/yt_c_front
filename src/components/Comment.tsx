import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {UserTypeResponse} from "../types/user/userType";
import axios from "axios";

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

interface Props {
    comment: {
        _id: string,
        desc: string,
        userId: string,
    }
}

export const Comment = ({comment}: Props) => {
    const [channel, setChannel] = useState<UserTypeResponse>();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`/users/find/${comment.userId}`);
            setChannel(res.data);
        })();
    }, [comment.userId]);

    return (
        <Container>
            <Avatar src={channel?.img}/>
            <Details>
                <Name>{channel?.name} <Date>2 days ago</Date></Name>
                <Text>{comment.desc}</Text>
            </Details>
        </Container>
    )
}
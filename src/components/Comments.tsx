import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Comment} from "./Comment";
import axios from "axios";
import {useSelector} from "react-redux";
import {UserState} from "../redux/userSlice";
import {CommentTypeArr} from "../types/comment/commentType";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

interface Props {
    videoId: string,
}

interface UserStateSelector {
    user: UserState,
}

export const Comments = ({videoId}: Props) => {
    const [comments, setComments] = useState<CommentTypeArr>([]);
    const {currentUser} = useSelector((state: UserStateSelector) => state.user);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`/comments/${videoId}`);
            setComments(res.data);
        })();
    }, [videoId]);
    return (
        <Container>
            <NewComment>
                <Avatar src={currentUser?.img}/>
                <Input placeholder="Add a comment..."/>
            </NewComment>
            {comments.map(comment => (
                <Comment key={comment._id} comment={comment}/>
            ))}
        </Container>
    );
}
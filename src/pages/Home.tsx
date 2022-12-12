import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Card} from "../components/Card";
import axios from "axios";
import {VideoTypesResponse} from "../types/video/videoType";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

interface Props {
    type: string;
}

export const Home = ({type}: Props) => {
    const [videos, setVideos] = useState<VideoTypesResponse>([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`/videos/${type}`);
            setVideos(res.data);
        })();
    }, [type]);

    return <Container>
        {
            videos.map((video) => (
                <Card key={video._id}/>
            ))
        }
    </Container>
}
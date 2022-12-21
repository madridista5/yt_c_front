import React, {useState} from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {UserState} from "../../redux/userSlice";
import {Upload} from "../Upload";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;

const Button = styled.div`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

interface UserStateSelector {
    user: UserState,
}

export const Navbar = () => {
    const {currentUser} = useSelector((state: UserStateSelector) => state.user);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Container>
                <Wrapper>
                    <Search>
                        <Input placeholder="Search"/>
                        <SearchIcon/>
                    </Search>
                    {currentUser
                        ? (
                            <User>
                                <VideoCallOutlinedIcon onClick={() => setOpen(true)}/>
                                <Avatar src={currentUser.img }/>
                                {currentUser.name}
                            </User>
                        )
                        : <Link to="signin" style={{textDecoration: 'none'}}><Button>
                            <AccountCircleIcon/>SIGN IN
                        </Button></Link>
                    }
                </Wrapper>
            </Container>
            {open && <Upload setOpen={setOpen}/>}
        </>
    )
}
import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import {Link} from 'react-router-dom';
import { Input } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import AuthContext from "../auth/AuthContext";



const StyledHeaderSection = styled.div`
    display: flex;
    justify-content:space-between;
    padding-top: 8px;
    align-items: center;
`;
const StyledHeader = styled.header`
    background-color: #d1011c;
    width: 100vw;
    padding: 16px 0px;
`
const Navigator = styled.div`
    a{
        margin: 0px 4px;
        color: white;
        text-decoration: none;
    }
`;
const Toolbar = styled.div`
    a{
        margin: 0px 6px;
        color: white;
        text-decoration: none;
    }
`;
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`
const Header = ({className}) =>{
    const {isAuthenticated, logout}= useContext(AuthContext)
    return (
        <StyledHeader>
            <Container>
                <StyledHeaderSection>
                    <Navigator>
                        <a href="#">蝦皮購物</a>
                        <a href="#">下載</a>
                        <a href="#">追蹤我們</a>
                        <a href="#">部落格</a>
                    </Navigator>
                    <Toolbar>
                        <a href="#">通知</a>
                        <a href="#">幫助中心</a>
                        {isAuthenticated ?(
                            <div>
                                <a href="#">Celine</a>
                                <span onClick={()=>logout()}>登出</span>

                            </div>
                        ):(
                            <Link to="/login">登入/註冊</Link>
                        )}

                    </Toolbar>
                    
                </StyledHeaderSection>
                <StyledHeaderSection>
                    <Link to="/">
                        <img src="https://images.squarespace-cdn.com/content/v1/587757c93a04116470cb31a9/1567639331318-RCXPSZB9MKSBUX5DMOTT/shopee-logo.png?format=1000w" alt="logo" width="80"></img>
                    </Link>
                    <Flex>
                        <Input.Search style={{marginRight: 8}} placeholder="在商城搜尋" onSearch={(value)=>console.log(value)} enterButton /> 
                        <Link to="/cart">
                            <ShoppingCartOutlined style ={{fontSize:32, color:'white'}}/>
                        </Link>
                    </Flex>
                </StyledHeaderSection>
            </Container>
        </StyledHeader>
    );
};

export default Header;

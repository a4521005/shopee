import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../components/layout/DefaultLayout';
import Container from '../components/common/Container'
import LoginForm from '../components/auth/LoginForm'

const StyledLoginBox = styled.div`
    background-color: #fff;
`
const StyledLoginContainer = styled(Container)`
    display:flex;
    justify-content: space-between;
    padding:48px 0;
`


const LoginPage = ()=>{
    return (
    <DefaultLayout>
        <StyledLoginBox>
            <StyledLoginContainer>
                <div>
                    <img 
                        src="https://images.unsplash.com/photo-1618270352864-fa8550f33446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80" 
                        alt="loginPage"
                        width="100"
                    >
                        
                    </img>
                </div>
                <LoginForm/>
            </StyledLoginContainer>

        </StyledLoginBox>
    </DefaultLayout>)
}

export default LoginPage;
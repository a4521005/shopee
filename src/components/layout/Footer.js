import React from 'react';
import styled ,{css}from 'styled-components';
import Container from '../common/Container';
import {Link} from 'react-router-dom';

const StyledFooter = styled.footer`
    background-color: #fbfbfb;
    padding: 40px 0px;
`;

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const FooterColumn = styled.div`
    width:33.3333%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
    @media (min-width:769px){
        width: 20%;
    }
    a{
        margin-bottom: 4px;
        color: rgba(0,0,0,.54);
    }
`;

const FooterColumnTitle = styled.h4`
    font-weight: bold;
    margin-bottom: 16px;
`

const Footer = () =>{
    return (
        <StyledFooter>
            <Container>
                <Box>
                    <FooterColumn>
                        <FooterColumnTitle>客服中心</FooterColumnTitle>
                        <Link to="#">幫助中心</Link>
                        <Link to="#">蝦皮商城</Link>
                        <Link to="#">付款方式</Link>
                        <Link to="#">蝦皮錢包</Link>
                         <Link to="#">蝦幣</Link>
                        <Link to="#">運費補助</Link>
                         <Link to="#">退貨退款</Link>
                        <Link to="#">延長訂單撥款</Link>
                        <Link to="#">聯絡客服</Link>
                        <Link to="#">防詐騙宣導</Link>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
                        <Link to="#">關於蝦皮</Link>
                        <Link to="#">加入我們</Link>
                        <Link to="#">蝦皮條款</Link>
                        <Link to="#">隱私權政策</Link>
                         <Link to="#">蝦皮商城</Link>
                        <Link to="#">賣家中心</Link>
                        <Link to="#">限時特賣</Link>
                        <Link to="#">聯絡媒體</Link>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>付款</FooterColumnTitle>
                        <img src="https://www.transparentpng.com/thumb/mastercard/mastercard-vector-1.png" alt="payment-mastercard" width="33%"></img>
                        <img src="https://brandlogos.net/wp-content/uploads/2016/11/visa-logo-preview-400x400.png" alt="payment-visa" width="33%"></img>
                        <img src="https://i1.wp.com/tw-vc.com/wp-content/uploads/2021/05/JCB-PNG-e1622017802279.png?ssl=1" alt="payment-jcb" width="33%" style={{marginBottom: 12}}></img>
                        <FooterColumnTitle>物流合作</FooterColumnTitle>
                        <img src="https://www.ecpay.com.tw/Content/themes/activities/codepayment20171101/images/events/shoplogo.png" alt="shop" width="100%" style={{marginBottom: 12}}></img>
                        <img src="https://myblob2.azureedge.net/gmstore-520025/1602165749466.png" alt="blackcat" width="33%" style={{marginBottom: 12}}></img>
                        <FooterColumnTitle>蝦皮直送包裝減量標章</FooterColumnTitle>
                        <img src="https://lh6.googleusercontent.com/RvOWQs6ps2eCdp6hJ_pmTu0nX3St2fzGEVL7c6coSpeF2Xv7gsQD6klqFdtLBoBllFQB-sP6IATHhFK6HKTQcgTQ-J6XN1zdRtFNKY7VEI6_7UNbKErtsHe4qwZyEk-chMmQ5Kxr" alt="lighten" width="33%" style={{marginBottom: 12}}></img>

                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>關注我們</FooterColumnTitle>
                        <Link to="#">Facebook</Link>
                        <Link to="#">Instagram</Link>
                        <Link to="#">Line</Link>
                        <Link to="#">Linkedin</Link>
                         <Link to="#">蝦品輯部落格</Link>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
                        <Box>
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/5bc2dcfe400e86d96951e55333a55861.png" alt="shopee qrcode" width="50%" style={{marginBottom: 12}}></img>
                            <div>
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="App Store" width="80%" style={{marginBottom: 12}}></img>
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="Google Play" width="80%" style={{marginBottom: 12}}></img>
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="App Gallery" width="80%" style={{marginBottom: 12}}></img>
                            </div>
                        </Box>

                    </FooterColumn>
                </Box>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
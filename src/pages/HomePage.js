import React, { useContext } from "react";
import DefaultLayout from '../components/layout/DefaultLayout';
import styled ,{css}from 'styled-components';
import ClearFix from "../components/common/ClearFix";
import { Carousel } from 'antd';
import {Link} from 'react-router-dom';
import ProductCard from '../components/product/productCard'
import AuthContext from "../components/auth/AuthContext";
import PopupModal  from "../components/common/PopupModal";


const BannerBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const BannerCarouselContainer = styled.div`
    width: 100%;
    @media (min-width:769px){
        width: 67%;
    }
`;
const BannerSectionContainer= styled.div`
    width: 100%;
    @media (min-width:769px){
       /* width: 30%; */

    }

`;
const BannerContainer= styled.div`
    width: 100%;
    @media (max-width:769px){
        width: 100%;
        padding: 1px 0px;
        display: flex;
       flex-direction: column;
       align-items: flex-end;
    }
    
`;
const CarouselImage = styled.img`
    padding: 1px;
    width: 100%;
    @media (max-width:769px){
        width: 100%;
        padding: 1px 0px;
    }
`;
const BannerImage = styled.img`
    width: 100%;
    padding: 1px;
    @media (max-width:769px){
        width: 100%;
        padding: 1px 0px;
    }
`
const BannerFeatureAll = styled.div`
    width: 100%;
    display: flex;
    background-color: #fff;
    justify-content: center;
    padding: 5px 0px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    border-left: 1px solid rgba(0,0,0,0.1);
    border-right: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 20px;

`;
const BannerFeature= styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
`;

const BannerFeatureColumn= styled.div`
    width: 146px;
`;
const BannerFeatureLogo= styled.img`
    width: 73px;
    height: 73px;

`;

const BannerFeatureText = styled.div`
    color: #333;
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 500;
`;
const CustomerImage = styled.div`
    height: 300px;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-image: url('https://www.probeetle.com.tw/upload/%E5%BB%A3%E5%91%8A%E5%9C%96%E7%89%87/2021-BANNER/C17004106(%E5%85%A7%E9%8A%B7-%E8%9D%A6%E7%9A%AE%E4%B9%9D%E6%9C%88%E4%BB%BD%E6%B4%BB%E5%8B%95Banner%E8%A8%AD%E8%A8%88-Back%20To%20School_-Probeetle-%202000%20x%20300%20(%E9%A6%96%E9%A0%81%E5%A4%A7%E5%9C%96)(1).jpg');
`
const BannerSmallFeatureText = styled.div`
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-variant: tabular-nums;
    line-height: 1.5715;
`;

const CustomerContainer = styled.div`
    margin-bottom: 24px;
`;

const ProductCollectionContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 0;
    margin-left: -4px;
    margin-right: -4px;
    margin-bottom: 58px;

`;

const ProductContainer=styled.div`
     width: 100%;
     padding: 4px;
     @media (min-width:577px){
        width: 50%;
     }
     @media (min-width:769px){
        width: 20%;
        }
`;




const HomePage = ()=>{
    const {isAuthenticated} = useContext(AuthContext)
    return( 
    <DefaultLayout fixedHeader>
    <PopupModal/>
    <ClearFix />
        {isAuthenticated && <h1>歡迎回來</h1>}
        <BannerBox>
            <BannerCarouselContainer>
                <Carousel autoplay>
                    <Link to="/">
                        <CarouselImage src="https://cf.shopee.sg/file/c27a0a4ee3259e63f533a5086cbe5b22_xxhdpi" alt="Banner1" ></CarouselImage>
                    </Link>
                        <Link to="/">
                        <CarouselImage src="https://cf.shopee.sg/file/12d86c322d2f0c17aa5f319175a5e69d_xxhdpi" alt="Banner2" ></CarouselImage>
                    </Link>
                    <Link to="/">
                        <CarouselImage src="https://cf.shopee.sg/file/1474b3bafd0923c9a4a21e642ebba6f5_xxhdpi" alt="Banner3" ></CarouselImage>
                    </Link>
                    <Link to="/">
                        <CarouselImage src="https://cf.shopee.sg/file/36bbf4fc0371305f89e6c04023017e61_xxhdpi" alt="Banner4" ></CarouselImage>
                        </Link>
                </Carousel>
            </BannerCarouselContainer>
            <BannerContainer>
                    <BannerSectionContainer>
                    <Link to="/">
                        <BannerImage src="https://cf.shopee.sg/file/04fc7118d3d1573984efbb063b72f510_xhdpi" alt="Banner" ></BannerImage>
                    </Link>
                    <Link to="/">
                        <BannerImage src="https://cf.shopee.sg/file/1ba379875c072b67eebd7946a9dbd14b_xhdpi" alt="Banner" ></BannerImage>
                    </Link>
                    </BannerSectionContainer>
                </BannerContainer>
                </BannerBox>
            <BannerFeatureAll>
                <BannerFeature>
                    <BannerFeatureLogo src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/6c502a2641457578b0d5f5153b53dd5d.png"></BannerFeatureLogo>
                    <BannerFeatureColumn>
                        <BannerFeatureText>15天鑑賞期</BannerFeatureText>
                        <BannerSmallFeatureText>提供15天鑑賞期，延長買家鑑賞時程</BannerSmallFeatureText>
                    </BannerFeatureColumn>
                </BannerFeature>
                <BannerFeature>
                    <BannerFeatureLogo src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/16ead7e0a68c3cff9f32910e4be08122.png"></BannerFeatureLogo>
                    <BannerFeatureColumn>
                        <BannerFeatureText>蝦皮安心退</BannerFeatureText>
                        <BannerSmallFeatureText>蝦皮作為買、賣雙方的中介者，指定退貨方式下可享退貨免運費，讓您放心買、安心退</BannerSmallFeatureText>
                    </BannerFeatureColumn>
                </BannerFeature>
                <BannerFeature>
                    <BannerFeatureLogo src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/511aca04cc3ba9234ab0e4fcf20768a2.png"></BannerFeatureLogo>
                    <BannerFeatureColumn>
                        <BannerFeatureText>假一賠二</BannerFeatureText>
                        <BannerSmallFeatureText>如確認非正貨蝦皮承諾除退款外，再賠償該商品金額一倍給你</BannerSmallFeatureText>
                    </BannerFeatureColumn>
                    </BannerFeature>
            </BannerFeatureAll>
        <CustomerContainer>
            <CustomerImage />
        </CustomerContainer>
        <ProductCollectionContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/2528f1bde94d0312c656598fbc98800d_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/3e0690960fc4cf5e545491b725cc7d59_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link> 
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/ae54477c70046e6c717b021ec16a43cf_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/98016307cf2b0388b07de81e027c9532_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/f14b303a18cf804b9f30e86568dd0372_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/2528f1bde94d0312c656598fbc98800d_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link> 
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/3e0690960fc4cf5e545491b725cc7d59_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link> 
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/ae54477c70046e6c717b021ec16a43cf_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/98016307cf2b0388b07de81e027c9532_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/f14b303a18cf804b9f30e86568dd0372_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">    
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">    
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/2528f1bde94d0312c656598fbc98800d_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">    
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/3e0690960fc4cf5e545491b725cc7d59_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">    
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/ae54477c70046e6c717b021ec16a43cf_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">    
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/98016307cf2b0388b07de81e027c9532_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>
            <ProductContainer>
                <Link to="/watch">    
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/f14b303a18cf804b9f30e86568dd0372_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </Link>    
            </ProductContainer>

        </ProductCollectionContainer>
    </DefaultLayout>
    );
}

export default HomePage;
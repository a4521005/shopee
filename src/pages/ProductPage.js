import React from "react";
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from '../components/layout/DefaultLayout';
import styled ,{css}from 'styled-components';
import watch1 from './image/w1.png';
import watch2 from './image/w2.png';
import watch3 from './image/w3.png';
import watch4 from './image/w4.png';
import watch5 from './image/w5.png';
import watch6 from './image/w6.png';
import ProductCard from '../components/product/productCard'

import {ShoppingCartOutlined, CreditCardOutlined} from '@ant-design/icons';
import './style.css';
import './script';



const ProductPage = ()=>{
    return <DefaultLayout> 
    <ClearFix />
    <div class = "main-wrapper">
        <div class = "container">
            <div class = "product-div">
                <div class = "product-div-left">
                    <div class = "img-container">
                        <img src = {watch1} alt = "watch"/>
                    </div>
                    <div class = "hover-container">
                        <div><img src = {watch2} alt = "watch"/></div>
                        <div><img src = {watch3} alt = "watch"/></div>
                        <div><img src = {watch4} alt = "watch"/></div>
                        <div><img src = {watch5} alt = "watch"/></div>
                        <div><img src = {watch6} alt = "watch"/></div>

                    </div>
                </div>
                <div class = "product-div-right">
                    <span class = "product-name">(New) Analog Watch - For Men</span>
                    <span class = "product-price">$ 50.25</span>
                    {/* <div class = "product-rating">
                        <span><StarOutlined /></span>
                        <span><StarOutlined /></span>
                        <span><StarOutlined /></span>
                        <span><StarOutlined /></span>
                        <span><i class = "fas fa-star-half-alt"></i></span>
                        <span>(350 ratings)</span>
                    </div> */}
                    <p class = "product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis quidem exercitationem voluptas.</p>
                    <div class = "btn-groups">
                        {/* <button type = "button" class = "add-cart-btn"><i class = "fas fa-shopping-cart"></i>add to cart</button> */}
                        <button type = "button" class = "add-cart-btn"><ShoppingCartOutlined style ={{marginRight:3}}/>add to cart</button>
                        {/* <button type = "button" class = "buy-now-btn"><i class = "fas fa-wallet"></i>buy now</button> */}
                        <button type = "button" class = "buy-now-btn"><CreditCardOutlined style ={{marginRight:3}}/>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="recommend-list">
        <p class="recommend-title">
            Recommend products
        </p>
        <div class="recommendproductcollection-container">
            <div class="recommendproduct-container">
                <a href="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </a>
            </div>
            <div class="recommendproduct-container">
                <a href="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </a>
            </div>
            <div class="recommendproduct-container">
                <a href="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </a>
            </div>
            <div class="recommendproduct-container">
                <a href="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </a>
            </div>
            <div class="recommendproduct-container">
                <a href="/watch">
                    <ProductCard title="foo" coverUrl="https://cf.shopee.tw/file/593d575f0b97028edcc0e49f447bcfcb_tn" width="100%" salePrices={[100, 200]} listPrices={[200, 299]}/>
                </a>
            </div>
        </div>
    </div>
    
    

    </DefaultLayout>
        }

export default ProductPage;
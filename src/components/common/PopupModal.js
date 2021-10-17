import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import {Link} from "react-router-dom";

const eventProductId = 'p003'

const PopupModal = ()=>{
    const [isVisible,setIsVisible]=useState(true);

    useEffect(()=>{
        const popupHistory = JSON.parse(localStorage.getItem('shopee:popup.history'))
        if (popupHistory && Date.now()-popupHistory.time < 3000){
            setIsVisible(false)
        }else{
            const history = {
                time: Date.now(),
                productId: eventProductId
            }
            localStorage.setItem('shopee:popup.history',JSON.stringify(history))
        }
    },[])
    return isVisible && (
        <Modal 
            visible={true} 
            onOk={()=>setIsVisible(false)} 
            onCancel={()=>setIsVisible(false)}
            footer={null}
        >
        <Link to={`/${eventProductId}`}>
            <img 
                src="https://images.unsplash.com/photo-1634381157433-5712f167ff35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" 
                alt={`${eventProductId}-event`}
            />
        </Link>
      </Modal>
    )

}

export default PopupModal;
import React, {useState, useEffect} from 'react';
import './StadiaConfig.css'
import {connect} from 'react-redux';
import {addDeviceToCart} from '../../redux/reducer';
import StadiaHeader from './StadiaHeader';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';

function StadiaConfig(props){
    const [productName, setProductName] = useState('Google Stadia')
    const [productPrice, setProductPrice] = useState(129)
    const [productImage, setProductImage] = useState('https://lh3.googleusercontent.com/juhcCwWyeBiln3s-KYVMYsTMCDrKTWoaQI-BnHRzilMBQ0koWgAfIHwfoX2oLbGIC3Hr=rw-w1716')

    const addToCart = () => {
        props.addDeviceToCart(productName, productPrice, productImage)
        props.history.push('/cart')
    }

    return(
        <>
            <HomeProductHeaderOne />
            <div className='stadia-review'>
                <img id='stadia-image' src='https://lh3.googleusercontent.com/juhcCwWyeBiln3s-KYVMYsTMCDrKTWoaQI-BnHRzilMBQ0koWgAfIHwfoX2oLbGIC3Hr=rw-w1716'/>
                <p>Stadia Premiere Edition</p>
                <p>$129</p>
                <p>Includes Chromecast Ultra and 3 months of Stadia Pro</p>
                <button className='buy-stadia-button' onClick={() => addToCart()}>Add to cart</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    addDeviceToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(StadiaConfig)
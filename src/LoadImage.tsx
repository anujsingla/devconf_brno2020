import React from 'react';
// @ts-ignore
import webpackLogo from '../images/logo-on-white-bg.jpg';

export default function LoadImage() {
    return (
        <div>
            <img src={webpackLogo} height={200} width={200} />
        </div>
    );

}
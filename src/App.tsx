import React, {Suspense, useState} from 'react';
import './App.css';
// @ts-ignore
import logo from '../images/edit.png';
import { Button } from 'react-bootstrap';
// tree-shaking we only used 1 function so webpack not includes cube method
import { square } from './mathUtility';
// magic commnet
const LoadImage = React.lazy(() => import(/* webpackChunkName: 'LoadImage', webpackPrefetch: true */ './LoadImage'));
const Footer = React.lazy(() => import(/* webpackChunkName: 'Footer', webpackPrefetch: true */ './Footer'));


function App() {
    const [showFooter, setShowFooter] = useState(false);
    const [showImage, setShowImage] = useState(false);
    
    const loadFooter = () => setShowFooter(true);;
    const loadImage = () => setShowImage(true);

    return (
        <div className="App">
            <header>
                <h1 className="mb-5"> Webpack examples </h1>
            </header>
            <h2> Square of five: {square(5)} </h2>
            <Button onClick={loadFooter} variant="primary" className="mb-4 mr-4">Load Footer</Button>
            <Button onClick={loadImage} variant="primary" className="mb-4">Load Image</Button>
            {showImage && (
                <Suspense fallback={<div>Loading...</div>}>
                    <LoadImage />
                </Suspense>
            )}
            {showFooter && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Footer />
                </Suspense>
            )}
        </div>
  );
}

export default App;
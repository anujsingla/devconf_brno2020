import React, {Suspense, useState} from 'react';
import './App.css';
// @ts-ignore
import logo from '../images/edit.png';
import { Button } from 'react-bootstrap';
// magic commnet
// const LoadImage = React.lazy(() => import(/* webpackChunkName: 'LoadImage', webpackPrefetch: true */ './LoadImage'));
// const Footer = React.lazy(() => import(/* webpackChunkName: 'Footer', webpackPrefetch: true */ './Footer'));

const LoadImage = React.lazy(() => import('./LoadImage'));
const Footer = React.lazy(() => import('./Footer'));


function App() {
    const [showFooter, setShowFooter] = useState(false);
    const [showImage, setShowImage] = useState(false);
    
    const loadFooter = () => setShowFooter(true);;
    const loadImage = () => setShowImage(true);

    return (
        <div className="App">
            <header>
                <p> Webpack examples </p>
            </header>
            <Button onClick={loadFooter} variant="primary" className="mb-4">Load Footer</Button>
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
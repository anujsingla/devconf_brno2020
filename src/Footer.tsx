import React from 'react';
import {Alert} from 'react-bootstrap';

export default function Footer() {
    return (
        <footer>
            <Alert variant='primary'>
                this is footer of the page.
                <a
                    className="App-link"
                    href="https://webpack.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn Webpack
        </a>
            </Alert>
        </footer>
    )
}
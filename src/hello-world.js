import HelloWorldButton from './components/hello-world-button/helloWorldButton';
import Heading from './components/heading/heading';
import React from 'react';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render('hello world');
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
    console.log('Development Mode');
}
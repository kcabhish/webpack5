import Heading from './components/heading/heading';
import Dbz from './components/dbz/dbz';

const heading = new Heading();
heading.render('dbz page');
const dbz = new Dbz();
dbz.render();

import('HelloWorldApp/HelloWorldButton').then(HelloWorldButtonModule => {
    const HelloWorldButton = HelloWorldButtonModule.default;
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
});
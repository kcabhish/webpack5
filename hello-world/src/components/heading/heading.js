import './heading.scss';
class Heading {
    render(pageName) {
        const h1 = document.createElement('h1');
        const root = document.getElementById('root');
        h1.innerHTML = 'Learning Webpack 5.20. This is '+pageName+'!!!!';
        root.appendChild(h1);
    }
}

export default Heading;
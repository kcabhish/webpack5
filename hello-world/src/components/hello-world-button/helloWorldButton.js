import './helloWorld.scss';
class HelloWorldButton {
    buttonCssClass = "hello-world-button";
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        const root =  document.getElementById('root');
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hola Amigos';
            p.classList.add(this.buttonCssClass);
            root.appendChild(p);
        }
        root.appendChild(button);

    }
}

export default HelloWorldButton;
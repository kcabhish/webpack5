import './helloWorld.scss';
class HelloWorldButton {
    buttonCssClass = "hello-world-button";
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hola Amigos';
            p.classList.add(this.buttonCssClass);
            body.appendChild(p);
        }
        const body =  document.querySelector('body');
        body.appendChild(button);
    }
}

export default HelloWorldButton;
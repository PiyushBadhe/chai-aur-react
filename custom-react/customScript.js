function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement1 = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click here to visit g00gle'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement1, mainContainer);
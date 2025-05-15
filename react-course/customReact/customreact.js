function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    //instead of this use for in loop to set all attributes
    for (const prop in reactElement.props) {
        // check if the property is not a function and is not a children
        if (reactElement.prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: "click me to go to google"
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
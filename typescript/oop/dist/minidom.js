class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" required/>`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id="${this.id}">${this.label}</button>`;
    }
}
class Form extends UIElement {
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    render() {
        const childrenHtml = this.children.map(child => child.render()).join("\n");
        return `<form id="${this.id}" style="display:flex;flex-direction: column; gap: 10px; max-width: 200px">${childrenHtml}</form>`;
    }
}
const nameInput = new Input("name", "name", "Enter your name");
const emailInput = new Input("email", "email", "Enter your email");
const passwordInput = new Input("pass", "password", "Enter your password");
const submitButton = new Button("submit-btn", "Submit");
// console.log(emailInput);
// console.log(passwordInput);
// console.log(submitButton);
const loginForm = new Form("login-form");
loginForm.appendChild(nameInput);
loginForm.appendChild(emailInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(submitButton);
// console.log(loginForm.render());
const rootElement = document.getElementById("root");
if (rootElement) {
    rootElement.innerHTML = loginForm.render();
}
export {};

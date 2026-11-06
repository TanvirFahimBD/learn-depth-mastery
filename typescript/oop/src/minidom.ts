abstract class UIElement {
  constructor(protected id: string){}
  abstract render(): string;
}

class Input extends UIElement{
  constructor(id: string, private type: string,   private placeholder: string){
    super(id);
  }
  
  render(){
    return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" />`;
  }
}

class Button extends UIElement{
  constructor(id: string, private label: string){
    super(id);
  }
  
  render(){
    return `<button id="${this.id}">${this.label}</button>`;
  }
}

const emailInput = new Input("email", "email", "Enter your email here ...")
const passwordInput = new Input("pass", "password", "Enter your password here")
const submitButton = new Button("submit-btn", "Submit")

console.log(emailInput.render());
console.log(passwordInput.render());
console.log(submitButton.render());

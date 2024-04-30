class FormComponent {

    public inputId: string;
    public inputValue: string;

    constructor(inputId: string, inputValue: string) {
        this.inputId = inputId;
        this.inputValue = inputValue;
    }

    getInputFieldById() {
        return cy.get(`#${this.inputId}`);
    }

    enterInputValue() {
        this.getInputFieldById().type(this.inputValue);
    }
}

export default FormComponent;
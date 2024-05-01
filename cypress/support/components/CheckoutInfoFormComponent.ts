class CheckoutInfoFormComponent {
	private static firstnameInputFieldId = 'first-name';
	private static lastnameInputFieldId = 'last-name';
	private static zipcodeInputFieldId = 'postal-code';

    getFirstnameInputElement() {
        return cy.get(`#${CheckoutInfoFormComponent.firstnameInputFieldId}`);
    }

    getLastnameInputElement() {
        return cy.get(`#${CheckoutInfoFormComponent.lastnameInputFieldId}`);
    }

    getZipcodeInputElement() {
        return cy.get(`#${CheckoutInfoFormComponent.zipcodeInputFieldId}`);
    }

    public enterUserData(userType: string) {
        cy.fixture('userData').then(testdata => {
            let user = testdata.find(d => d.userType === userType);
            this.getFirstnameInputElement().type(user.firstname);
            this.getLastnameInputElement().type(user.lastname);
            this.getZipcodeInputElement().type(user.zipCode);
        });
    }
}

export default CheckoutInfoFormComponent;
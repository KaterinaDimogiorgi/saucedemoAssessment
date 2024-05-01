
class LogInFormComponent {
    private static usernameInputFieldId = 'user-name';
    private static passwordInputFieldId = 'password';
    private static loginButtonId = 'login-button';
    private static errorButton = 'error-button';


    getUsernameInputField() {
        return cy.get(`#${LogInFormComponent.usernameInputFieldId}`);
    }

    getPasswordInputField() {
        return cy.get(`#${LogInFormComponent.passwordInputFieldId}`);
    }

    getLoginButton() {
        return cy.get(`#${LogInFormComponent.loginButtonId}`);
    }

    getErrorButton() {
        return cy.get(`button[data-test="${LogInFormComponent.errorButton}"]`);
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }

    public enterUserCredentials(userType: string) {
        cy.fixture('loginData').then(testdata => {
            let user = testdata.find(d => d.userType === userType);
            this.getUsernameInputField().type(user.username);
            this.getPasswordInputField().type(user.password);
        });
    }
}

export default LogInFormComponent;
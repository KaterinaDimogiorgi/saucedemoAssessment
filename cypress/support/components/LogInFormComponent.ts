class LogInFormComponent {
    private static usernameInputFieldId = 'user-name';
    // DO be like private static usernameInputValue = loginData.username;
    private static usernameInputValue = 'standard_user';

    enterUsernameInputValue() {
        cy.get(`#${LogInFormComponent.usernameInputFieldId}`).type(LogInFormComponent.usernameInputValue);
    }
}

export default LogInFormComponent;
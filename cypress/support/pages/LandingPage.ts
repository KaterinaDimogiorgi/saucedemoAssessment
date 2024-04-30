import LogInFormComponent from "../components/LogInFormComponent";

class LandingPage {

    public loginForm: LogInFormComponent;

    constructor() {
        this.loginForm = new LogInFormComponent();
    }

    login() {
        this.loginForm.enterUsernameInputValue;
    }
}

export default LandingPage;
import { use } from "chai";
import LogInFormComponent from "../components/LogInFormComponent";
import BasePage from "./BasePage";
import ProductsPage from "./ProductsPage";

class LandingPage extends BasePage {
    public loginForm: LogInFormComponent;
    public productsPage: ProductsPage;

    constructor() {
        super();
        this.loginForm = new LogInFormComponent();
        this.productsPage = new ProductsPage();
    }

    public login(userType = "standardUser") {
        this.loginForm.enterUserCredentials(userType);
        this.loginForm.clickLoginButton();
        return new ProductsPage();
    }

    public openAndLogin(userType = "standardUser") {
        this.open();
        this.login(userType);
        return new ProductsPage();
    }
}

export default LandingPage;
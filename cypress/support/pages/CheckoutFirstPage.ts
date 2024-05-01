import CheckoutInfoFormComponent from "../components/CheckoutInfoFormComponent";
import BasePage from "./BasePage";
import CheckoutSecondPage from "./CheckoutSecondPage";
import ShoppingCartPage from "./ShoppingCartPage";

class CheckoutFirstPage extends BasePage {
    private static continueButtonId = 'continue';
    private static cancelButtonId = 'cancel';

    public checkoutInfoForm: CheckoutInfoFormComponent;

    constructor() {
        super();
        this.checkoutInfoForm = new CheckoutInfoFormComponent();
    }

    getContinueElement() {
        return cy.get(`#${CheckoutFirstPage.continueButtonId}`);
    }

    getCancelElement() {
        return cy.get(`#${CheckoutFirstPage.cancelButtonId}`);
    }

    enterUserInfo(userType: string) {
        this.checkoutInfoForm.enterUserData(userType);
        return this;
    }

    clickContinue() {
        this.getContinueElement().click();
        return new CheckoutSecondPage();
    }

    clickCancel() {
        this.getCancelElement().click();
        return new ShoppingCartPage();
    }
}

export default CheckoutFirstPage;
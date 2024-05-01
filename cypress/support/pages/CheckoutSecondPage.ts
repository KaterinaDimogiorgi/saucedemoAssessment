import BasePage from "./BasePage";
import CheckoutFinalPage from "./CheckoutFinalPage";
import CheckoutFirstPage from "./CheckoutFirstPage";

class CheckoutSecondPage extends BasePage {
    private static finishButtonId = 'finish';
    private static cancelButtonId = 'cancel';
    private static inventoryItemId = '_title_link';

    getFinishButton() {
        return cy.get(`#${CheckoutSecondPage.finishButtonId}`);
    }

    getCancelElement() {
        return cy.get(`#${CheckoutSecondPage.cancelButtonId}`);
    }

    public getProductElementByName(productName: string) {
        return cy.get(`a[id$=${CheckoutSecondPage.inventoryItemId}] div`).contains(productName);
    }

    clickFinish() {
        this.getFinishButton().click();
        return new CheckoutFinalPage();
    }

    clickCancel() {
        this.getCancelElement().click();
        return new CheckoutFirstPage();
    }
}

export default CheckoutSecondPage;
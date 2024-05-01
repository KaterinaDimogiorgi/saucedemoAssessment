class ProductComponent {
    private static inventoryItemId = '_title_link';
    private static addToCartButtonId = 'add-';
    private static removeButtonId = 'remove-';
    private static priceBarClass = 'pricebar';

    public getProductElementByName(productName: string) {
        return cy.get(`a[id$=${ProductComponent.inventoryItemId}] div`).contains(productName);
    }

    public selectProductByName(productName: string) {
        return this.getProductElementByName(productName).click();
    }
}

export default ProductComponent;
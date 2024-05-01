class SidebarLink {
    private sidebarLinkId: string;

    constructor(sidebarLinkType: string) {
        this.sidebarLinkId = `${sidebarLinkType}_sidebar_link`
    }

    getSidebarLinkElement() {
        return cy.get(`#${this.sidebarLinkId}`);
    }

    select() {
        this.getSidebarLinkElement().click();
    }
}

export default SidebarLink;
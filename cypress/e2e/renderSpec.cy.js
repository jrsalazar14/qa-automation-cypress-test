describe("Render AppTest", () => {
  it("Renders the app without errors", () => {
    cy.visit("/");

    cy.window().then((win) => {
      cy.spy(win.console, "error").as("consoleError");
    });
    cy.wait(2000);
    cy.get("@consoleError").should("not.be.called");

    cy.getByDataCy("app").should("exist");
    cy.getByDataCy("title").should("have.text", "QA Automation Cypress Test");

    cy.getByDataCy("form").within(() => {
      cy.getByDataCy("input").should("exist");
      cy.getByDataCy("submitBtn").should("exist").contains("Submit");
    });
  });
});

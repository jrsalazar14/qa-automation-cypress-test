describe("Notes State Test", () => {
  it("Should load the notes state as an empty array", () => {
    cy.visit("/");
    cy.getByDataCy("note").should("not.exist");
  });
});

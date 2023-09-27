describe("Delete Note Test", () => {
  it("Should delete a note from the notes list and remove it from the ui", () => {
    cy.visit("/");

    const inputValue = "This will be submitted then deleted";
    cy.getByDataCy("input").type(inputValue).should("have.value", inputValue);

    cy.getByDataCy("form").submit();

    cy.getByDataCy("note").should("exist");
    cy.contains(".note-container", inputValue).should("exist");

    cy.getByDataCy("note").within(() => {
      cy.contains("Delete").click();
    });

    cy.contains(".note-container", inputValue).should("not.exist");
  });

  it("Delete multiple notes from the notes list and remove them from the ui", () => {
    cy.visit("/");

    const inputValues = ["TestNote 1", "TestNote 2"];

    inputValues.forEach((inputValue) => {
      cy.getByDataCy("input").type(inputValue).should("have.value", inputValue);
      cy.getByDataCy("form").submit();
    });

    inputValues.forEach((inputValue) => {
      cy.contains(".note-container", inputValue)
        .parent()
        .within(() => {
          cy.contains("Delete").each(($btn) => {
            cy.wrap($btn).click();
            cy.wait(1000);
          });
        });

      cy.contains(".note-container", inputValue).should("not.exist");
    });
  });
});

describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=flagcomponent--primary&knob-isoCode&knob-squared=true'));

  it('should render the component', () => {
    cy.get('eui-flag').should('exist');
  });
});

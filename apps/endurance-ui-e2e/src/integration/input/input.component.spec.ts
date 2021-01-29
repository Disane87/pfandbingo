describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcomponent--primary&knob-name&knob-placeholder=&knob-value&knob-preIcon&knob-autoComplete=on&knob-type&knob-label&knob-class&knob-disabled=false'));

  it('should render the component', () => {
    cy.get('eui-input').should('exist');
  });
});

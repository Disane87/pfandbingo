describe('endurance-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dropdowncomponent--primary&knob-selectedItem&knob-selectedItemKey&knob-items&knob-itemTemplate&knob-label&knob-disabled=false&knob-name&knob-color=white&knob-textColor=gray-600'));

  it('should render the component', () => {
    cy.get('eui-dropdown').should('exist');
  });
});

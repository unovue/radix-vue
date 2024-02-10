const styles = "@import '@radix-ui/colors/black-alpha.css';\n@import '@radix-ui/colors/grass.css';\n\n/* reset */\nbutton {\n  all: unset;\n}\n\n.CheckboxRoot {\n  background-color: white;\n  width: 25px;\n  height: 25px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 10px var(--black-a7);\n}\n.CheckboxRoot:hover {\n  background-color: var(--grass-3);\n}\n.CheckboxRoot:focus {\n  box-shadow: 0 0 0 2px black;\n}\n\n.CheckboxIndicator {\n  color: var(--grass-11);\n}\n\n.Label {\n  color: white;\n  padding-left: 15px;\n  font-size: 15px;\n  line-height: 1;\n}";
export {
  styles as default
};

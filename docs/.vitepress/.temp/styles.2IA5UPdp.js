const styles = "@import '@radix-ui/colors/black-alpha.css';\n\n/* reset */\ninput {\n  all: unset;\n}\n\n.LabelRoot {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 35px;\n  color: white;\n}\n\n.Input {\n  width: 200px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  padding: 0 10px;\n  height: 35px;\n  font-size: 15px;\n  line-height: 1;\n  color: white;\n  background-color: var(--black-a5);\n  box-shadow: 0 0 0 1px var(--black-a9);\n}\n.Input:focus {\n  box-shadow: 0 0 0 2px black;\n}\n.Input::selection {\n  background-color: var(--black-a9);\n  color: white;\n}";
export {
  styles as default
};

const styles = "@import '@radix-ui/colors/black-alpha.css';\n@import '@radix-ui/colors/mauve.css';\n@import '@radix-ui/colors/grass.css';\n\n/* reset */\nbutton {\n  all: unset;\n}\n\n.Toggle {\n  background-color: white;\n  color: var(--mauve-11);\n  height: 35px;\n  width: 35px;\n  border-radius: 4px;\n  display: flex;\n  font-size: 15px;\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 10px var(--black-a7);\n}\n.Toggle:hover {\n  background-color: var(--grass-3);\n}\n.Toggle[data-state='on'] {\n  background-color: var(--grass-6);\n  color: var(--grass-12);\n}\n.Toggle:focus {\n  box-shadow: 0 0 0 2px black;\n}";
export {
  styles as default
};

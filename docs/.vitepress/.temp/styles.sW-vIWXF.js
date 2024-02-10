const styles = "@import '@radix-ui/colors/black-alpha.css';\n@import '@radix-ui/colors/mauve.css';\n@import '@radix-ui/colors/grass.css';\n\n/* reset */\ninput {\n  all: unset;\n}\n\n.Text {\n  color: white\n}\n\n.PinInputInput{\n  text-align: center;\n  font-size: 15px;\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n  height: 2.25rem;\n  width: 2.25rem;\n  border-radius: 0.25rem; \n  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n\n.PinInputInput:disabled {\n  opacity: .5\n}\n\n.PinInputRoot{\n  display: flex;\n  align-items: center;\n  gap: 0.25rem; \n  margin-top: 0.25rem;\n  color: rgb(255 255 255)\n}\n";
export {
  styles as default
};

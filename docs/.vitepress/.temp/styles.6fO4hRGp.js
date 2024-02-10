const styles = "@import '@radix-ui/colors/black-alpha.css';\n@import '@radix-ui/colors/grass.css';\n\n.AvatarRoot {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  overflow: hidden;\n  user-select: none;\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-color: var(--black-a3);\n}\n\n.AvatarImage {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: inherit;\n}\n\n.AvatarFallback {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: var(--grass-11);\n  font-size: 15px;\n  line-height: 1;\n  font-weight: 500;\n}";
export {
  styles as default
};

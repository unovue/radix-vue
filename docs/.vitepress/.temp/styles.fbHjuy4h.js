const styles = "@import '@radix-ui/colors/black-alpha.css';\n\n.ProgressRoot {\n  position: relative;\n  overflow: hidden;\n  background: var(--black-a9);\n  border-radius: 99999px;\n  width: 300px;\n  height: 25px;\n\n  /* Fix overflow clipping in Safari */\n  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */\n  transform: translateZ(0);\n}\n\n.ProgressIndicator {\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);\n}";
export {
  styles as default
};

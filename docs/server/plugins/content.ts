import { accessSync, readFileSync } from "node:fs";
import { join } from "node:path";

const autodocsRegEx = /::hero-code-group\s*\{(.+})/g;
const paramsRegEx = /(\w+)="([^"]+)"/g;

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("content:file:beforeParse", (file) => {
    if (file._id.endsWith(".md")) {
      let match;
      let body = file.body;

      do {
        match = autodocsRegEx.exec(body);
        if (match && body) {
          const rawParams = match[1];
          const params = [...rawParams.matchAll(paramsRegEx)].reduce<Record<string, string>>(
            (acc, [, propertyName, propertyValue]) => {
              acc[propertyName] = propertyValue;

              return acc;
            },
            {}
          );

          let codeBlock = "";
          ["index.vue", "styles.css", "tailwind.config.js"].forEach((f) => {
            const filePath = `${process.cwd()}/components/demo/${params.folder}/${f}`;

            if (fileExists(filePath)) {
              const extension = f.split(".").pop();
              const syntax = extension;
              const source = readFileSync(join(filePath), "utf8");

              codeBlock = codeBlock.concat(`~~~${syntax}[${f}]\n${source}\n~~~\n`);
            }
          });

          if (codeBlock.length) body = body.replace(match[0], `${match[0]}\n${codeBlock}\n`);
          else console.error(`Could not find codes in ${params.folder}`);
        }
      } while (match);

      file.body = body;
    }
  });
});

function fileExists(path: string) {
  try {
    accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}

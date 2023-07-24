import {RuleConfigSeverity, UserConfig} from "@commitlint/types";

const Configuration: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "scope-case": [RuleConfigSeverity.Error, "always", "camel-case"],
        "scope-enum": [
            RuleConfigSeverity.Error,
            "always",
            [
                "accordion",
                "alertDialog",
                "aspectRatio",
                "avatar",
                "checkbox",
                "collapsible",
                "contextMenu",
                "dialog",
                "dropdownMenu",
                "hoverCard",
                "label",
                "menubar",
                "navigationMenu",
                "popover",
                "popper",
                "presence",
                "primitive",
                "progress",
                "radioGroup",
                "scrollArea",
                "select",
                "separator",
                "shared",
                "slider",
                "switch",
                "tabs",
                "toggle",
                "toggleGroup",
                "toolbar",
                "tooltip",
                "visuallyHidden",
            ]
        ]
    }
}

module.exports = Configuration;

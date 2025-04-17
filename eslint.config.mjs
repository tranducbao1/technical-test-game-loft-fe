import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(
    compat.extends("react-app", "plugin:jsx-a11y/recommended", "plugin:react/recommended"),
), {
    plugins: {
        "jsx-a11y": fixupPluginRules(jsxA11Y),
        "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            warnOnUnsupportedTypeScriptVersion: false,
        },
    },

    rules: {
        "react/self-closing-comp": ["error", {
            component: true,
            html: true,
        }],

        "import/no-anonymous-default-export": ["off"],
        "no-unused-vars": "off",

        "react/jsx-key": ["error", {
            checkFragmentShorthand: true,
        }],

        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
    },
}];
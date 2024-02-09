const path = require("path");

module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended"],
    rules: {
        "tailwindcss/no-custom-classname": ["warn", { whitelist: ["page-grid", "touch-action-y"] }],
    },
    ignorePatterns: ["dist"],
    parser: "@typescript-eslint/parser",
    plugins: ["react"],
    settings: {
        tailwindcss: {
            // There was an issue where `npm run lint` in the console would work fine, but the eslint process in VSCode wasn't
            // working properly because it couldn't find/resolve the tailwind.config.js file. So it couldn't deal with
            // classes based on custom values like color-brand-primary.
            //
            // The issue is gone if we explicitly reference the config file here with __dirname
            // https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/241#issuecomment-1537851714
            //
            // An alternative approach would be to adjust "eslint.workingDirectories" in VSCode
            // https://github.com/microsoft/vscode-eslint/issues/1706#issuecomment-1785746444

            config: path.join(__dirname, "./tailwind.config.ts"),
            callees: ["classnames", "clsx", "twMerge", "cn", "cva"],
        },
    },
};

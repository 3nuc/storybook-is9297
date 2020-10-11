# Repro case for storybook#9297
Described in more detail in https://github.com/storybookjs/storybook/issues/9297#issuecomment-706546009

# How to use
Run `npm install && npm run storybook` and go to the `BrokenCssModules` story.

You will be able to see the problem - the style of the default Vue app is not applied (it should be centered and have red bg - red bg part is added by me).
This is because:
1. App.vue uses <style module lang="scss"> for its CSS
2. package.json has `css-loader: "^4.3.0"` and `style-loader: "^1.3.0"`

That's it - the css-loader and style-loader cause the problem. If in package.json you change css-loader to "^3.6.0" and style-loader to "^1.3.0", css modules will start working (the BrokenCssModules story will have its styles)
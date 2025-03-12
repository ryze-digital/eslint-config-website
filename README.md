# RYZE Digital ESLint Rules

## Install

```bash
npm i @ryze-digital/eslint-config-website --save-dev
```

## Usage

Add the following to your `eslint.config.js`:

```js
import config from '@ryze-digital/eslint-config-website';

export default config;
```

### Add custom rules for your project

If you are using jQuery (for example), you might want to allow `$` to be global.

```js
import config from '@ryze-digital/eslint-config-website';

export default [
    ...config,
    {
        languageOptions: {
            globals: {
                $: 'readonly'
            }
        }
    }
];
```
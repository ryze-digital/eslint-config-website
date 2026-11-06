import js from '@eslint/js';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        extends: [
            js.configs.recommended,
            jsdoc.configs['flat/recommended']
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                process: 'readonly'
            }
        },
        rules: {
            'arrow-body-style': [
                'error',
                'always'
            ],
            'consistent-return': [
                'error'
            ],
            curly: [
                'error'
            ],
            eqeqeq: [
                'error'
            ],
            'no-console': [
                'error', {
                    allow: [
                        'error',
                        'info',
                        'warn'
                    ]
                }
            ],
            'no-else-return': [
                'error'
            ],
            'no-lonely-if': [
                'error'
            ],
            'no-shadow-restricted-names': [
                'error', {
                    reportGlobalThis: false
                }
            ],
            'no-unassigned-vars': [
                'off'
            ],
            'no-useless-assignment': [
                'off'
            ],
            'no-var': [
                'error'
            ],
            'one-var': [
                'error',
                'never'
            ],
            'prefer-const': [
                'error'
            ],
            'preserve-caught-error': [
                'off'
            ],
            'require-await': [
                'error'
            ],
            'unicode-bom': [
                'error',
                'never'
            ],
            'jsdoc/escape-inline-tags': [
                'off'
            ],
            'jsdoc/reject-any-type': [
                'off'
            ],
            'jsdoc/reject-function-type': [
                'off'
            ],
            'jsdoc/require-jsdoc': [
                'warn', {
                    require: {
                        MethodDefinition: true
                    },
                    exemptEmptyFunctions: true
                }
            ],
            'jsdoc/require-next-type': [
                'off'
            ],
            'jsdoc/require-param-description': [
                'off'
            ],
            'jsdoc/require-property-description': [
                'off'
            ],
            'jsdoc/require-returns-description': [
                'off'
            ],
            'jsdoc/require-throws-type': [
                'off'
            ],
            'jsdoc/require-yields-type': [
                'off'
            ],
            'jsdoc/ts-no-empty-object-type': [
                'off'
            ]
        }
    },
    {
        files: [
            '**/*.test.js'
        ],
        languageOptions: {
            globals: {
                ...globals.jest
            }
        }
    }
]);

import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import jsdoc from 'eslint-plugin-jsdoc';

export default tseslint.config(
    eslint.configs.recommended,
    jsdoc.configs['flat/recommended-typescript'],
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        'ignores': [
            'bin/',
            'dist/',
            '**/*.guard.ts',
            'eslint.config.mjs'
        ]
    },
    {
        'plugins': {
            jsdoc
        },
        'languageOptions': {
            'globals': {
                ...globals.mocha,
                ...globals.node,
                ...globals.es2021
            },
            'parserOptions': {
                'project': true
            }
        },
        'linterOptions': {
            'reportUnusedDisableDirectives': true
        },
        'settings': {
            'jsdoc': {
                "contexts": [
                    "TSInterfaceDeclaration",
                    "TSMethodSignature",
                    "TSPropertySignature",
                    "VariableDeclaration:not(:has(VariableDeclarator[id.type=\"ArrayPattern\"])):not(:has(VariableDeclarator[id.type=\"ObjectPattern\"])):not(ExportNamedDeclaration > VariableDeclaration):not(ForOfStatement > VariableDeclaration):not(ForInStatement > VariableDeclaration):not(ForStatement > VariableDeclaration)",
                    "ExportNamedDeclaration:not(:has(VariableDeclarator[id.type=\"ArrayPattern\"])):not(:has(VariableDeclarator[id.type=\"ObjectPattern\"]))"
                ]
            }
        },
        'rules': {
            'jsdoc/require-jsdoc': [
                "warn",
                {
                    "require": {
                        "ArrowFunctionExpression": true,
                        "ClassDeclaration": true,
                        "ClassExpression": true,
                        "FunctionDeclaration": true,
                        "FunctionExpression": true,
                        "MethodDefinition": true
                    }
                }
            ],
            "@typescript-eslint/restrict-template-expressions": ["error", { 'allowNumber': true }],
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    "checksVoidReturn": {
                        "arguments": false
                    }
                }
            ],
            "@typescript-eslint/no-extra-semi": [
                "error"
            ],
            "@typescript-eslint/no-non-null-assertion": "off",
            "accessor-pairs": "error",
            "array-bracket-newline": "error",
            "array-bracket-spacing": "error",
            "array-callback-return": "error",
            "array-element-newline": [
                "error",
                "consistent"
            ],
            "arrow-body-style": "error",
            "arrow-parens": "error",
            "arrow-spacing": "error",
            "block-scoped-var": "error",
            "block-spacing": "error",
            "brace-style": [
                "error",
                "1tbs",
                {
                    "allowSingleLine": true
                }
            ],
            "camelcase": "error",
            "capitalized-comments": "error",
            "class-methods-use-this": "error",
            "comma-dangle": "error",
            "comma-spacing": "error",
            "comma-style": "error",
            "computed-property-spacing": "error",
            "consistent-return": "error",
            "consistent-this": "error",
            "curly": "error",
            "default-case": "error",
            "default-case-last": "error",
            "default-param-last": "error",
            "dot-location": "error",
            "eol-last": "error",
            "eqeqeq": "error",
            "func-call-spacing": "error",
            "func-name-matching": "error",
            "func-names": "error",
            "func-style": [
                "error",
                "declaration"
            ],
            "function-call-argument-newline": [
                "error",
                "consistent"
            ],
            "function-paren-newline": "error",
            "generator-star-spacing": "error",
            "grouped-accessor-pairs": "error",
            "guard-for-in": "error",
            "id-denylist": "error",
            "id-length": "error",
            "id-match": "error",
            "implicit-arrow-linebreak": "error",
            "init-declarations": "error",
            "jsx-quotes": "error",
            "key-spacing": "error",
            "keyword-spacing": "error",
            "lines-between-class-members": [
                "error",
                "always",
                {
                    "exceptAfterSingleLine": true
                }
            ],
            "max-classes-per-file": "error",
            "max-depth": [
                "error",
                7
            ],
            "max-nested-callbacks": "error",
            "multiline-comment-style": "error",
            "multiline-ternary": [
                "error",
                "always-multiline"
            ],
            "new-cap": "error",
            "new-parens": "error",
            "newline-per-chained-call": "error",
            "no-alert": "error",
            "no-array-constructor": "error",
            "no-bitwise": "error",
            "no-caller": "error",
            "no-confusing-arrow": "error",
            "no-console": "error",
            "no-constructor-return": "error",
            "no-continue": "error",
            "no-div-regex": "error",
            "no-duplicate-imports": "error",
            "no-else-return": "error",
            "no-empty-function": "error",
            "no-eq-null": "error",
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-extra-label": "error",
            "no-extra-parens": [
                "error",
                "all",
                {
                    "nestedBinaryExpressions": false
                }
            ],
            "no-extra-semi": "off",
            "no-floating-decimal": "error",
            "no-implicit-coercion": "error",
            "no-implicit-globals": "error",
            "no-implied-eval": "error",
            "no-invalid-this": "error",
            "no-iterator": "error",
            "no-label-var": "error",
            "no-labels": "error",
            "no-lone-blocks": "error",
            "no-lonely-if": "error",
            "no-loop-func": "error",
            "no-mixed-operators": "error",
            "no-multi-assign": "error",
            "no-multi-spaces": "error",
            "no-multi-str": "error",
            "no-multiple-empty-lines": "error",
            "no-nested-ternary": "error",
            "no-new": "error",
            "no-new-func": "error",
            "no-new-object": "error",
            "no-new-wrappers": "error",
            "no-octal-escape": "error",
            "no-param-reassign": "error",
            "no-plusplus": [
                "error",
                {
                    "allowForLoopAfterthoughts": true
                }
            ],
            "no-promise-executor-return": "error",
            "no-proto": "error",
            "no-restricted-exports": "error",
            "no-restricted-globals": "error",
            "no-restricted-imports": "error",
            "no-restricted-properties": "error",
            "no-restricted-syntax": "error",
            "no-return-assign": "error",
            "no-return-await": "error",
            "no-script-url": "error",
            "no-self-compare": "error",
            "no-sequences": "error",
            "no-shadow": "error",
            "no-tabs": "error",
            "no-template-curly-in-string": "error",
            "no-throw-literal": "error",
            "no-trailing-spaces": "error",
            "no-undef-init": "error",
            "no-undefined": "error",
            "no-underscore-dangle": "error",
            "no-unmodified-loop-condition": "error",
            "no-unneeded-ternary": "error",
            "no-unreachable-loop": "error",
            "no-unused-expressions": "error",
            "no-use-before-define": "error",
            "no-useless-call": "error",
            "no-useless-computed-key": "error",
            "no-useless-concat": "error",
            "no-useless-constructor": "error",
            "no-useless-rename": "error",
            "no-useless-return": "error",
            "no-var": "error",
            "no-warning-comments": [
                "warn",
                {
                    "terms": [
                        "fixme",
                        "xxx"
                    ]
                }
            ],
            "no-whitespace-before-property": "error",
            "nonblock-statement-body-position": "error",
            "object-curly-newline": "error",
            "object-curly-spacing": [
                "error",
                "always"
            ],
            "object-property-newline": "error",
            "object-shorthand": "error",
            "one-var": [
                "error",
                "never"
            ],
            "one-var-declaration-per-line": "error",
            "operator-assignment": "error",
            "operator-linebreak": "error",
            "padded-blocks": [
                "error",
                "never"
            ],
            "padding-line-between-statements": "error",
            "prefer-arrow-callback": "error",
            "prefer-const": "error",
            "prefer-destructuring": "error",
            "prefer-exponentiation-operator": "error",
            "prefer-named-capture-group": "error",
            "prefer-numeric-literals": "error",
            "prefer-object-spread": "error",
            "prefer-promise-reject-errors": "error",
            "prefer-regex-literals": "error",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "error",
            "quote-props": "error",
            "quotes": [
                "warn",
                "single"
            ],
            "radix": "error",
            "require-atomic-updates": "error",
            "require-await": "error",
            "require-unicode-regexp": "error",
            "rest-spread-spacing": "error",
            "semi": "error",
            "semi-spacing": "error",
            "semi-style": "error",
            "sort-imports": "error",
            "sort-keys": "warn",
            "sort-vars": "error",
            "space-before-blocks": "error",
            "space-before-function-paren": [
                "error",
                {
                    "anonymous": "always",
                    "named": "never",
                    "asyncArrow": "always"
                }
            ],
            "space-in-parens": "error",
            "space-infix-ops": "error",
            "space-unary-ops": "error",
            "spaced-comment": "error",
            "strict": "error",
            "switch-colon-spacing": "error",
            "symbol-description": "error",
            "template-curly-spacing": [
                "error",
                "always"
            ],
            "template-tag-spacing": "error",
            "unicode-bom": "error",
            "vars-on-top": "error",
            "wrap-iife": "error",
            "wrap-regex": "error",
            "yield-star-spacing": "error",
            "yoda": "error"
        }
    }
);

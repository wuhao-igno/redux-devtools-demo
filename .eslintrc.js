module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['prettier'],
  rules: {
    'no-bitwise': 'off', // 不让用位操作符，不知道为啥，先关掉
    'no-console': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/ban-ts-comment': 0, // 允许显式使用@ts-ignore，不能滥用
    '@typescript-eslint/unbound-method': 0, // 允许解构方法，需要在解构的时候注意不会出现this引用问题
    'jsx-a11y/anchor-is-valid': 0,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        singleQuote: true,
        jsxBracketSameLine: false,
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        printWidth: 100,
        jsxSingleQuote: false,
        arrowParens: 'always',
      },
    ],
    '@typescript-eslint/indent': 0,
    'react/require-default-props': 0,
    'object-curly-newline': 0,
    'react/jsx-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'no-void': 0,
    'react/jsx-one-expression-per-line': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn", {
        "additionalHooks": "useRecoilCallback"
      }
    ],
    "@typescript-eslint/no-explicit-any": ["warn", { "ignoreRestArgs": true }],
    'operator-linebreak': ['error', 'after'],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};

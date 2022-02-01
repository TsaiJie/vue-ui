// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/no-v-model-argument': 'off',
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 0,
    },
};

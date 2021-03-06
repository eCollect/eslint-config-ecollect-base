# eslint-config-ecollect-base

This package provides eCollect's base JS .eslintrc as an extensible shared config.

It is heavily based on [Airbnb's base package](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some rules extended and changed to match eCollect's own guides.
The base package is aimed at node.js development.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npx install-peerdeps --dev eslint-config-ecollect-base
  ```
2. Add `"extends": "ecollect-base` to your .eslintrc.

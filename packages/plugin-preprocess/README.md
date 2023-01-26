# plugin-preprocess

> A preprocesser plugin for [Etcher](https://etcherjs.vercel.app) that supports SCSS, Less and Stylus.

## Usage
    
```js
// etcher.config.js

import { preprocess } from '@etcher/plugin-preprocess'
import { defineConfig } from '@etcher/core'

export default defineConfig({
  plugins: [
    preprocess()
  ]
})
```
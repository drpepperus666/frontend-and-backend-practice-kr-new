const { defineConfig } = require("vite");

export default defineConfig({
    root: ".",
    build: {
        minify: true,
        cssMinify: true
    }
})
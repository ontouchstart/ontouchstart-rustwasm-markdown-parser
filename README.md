Hosted at [https://ontouchstart-rustwasm-markdown-parser.ontouchstart.workers.dev](https://ontouchstart-rustwasm-markdown-parser.ontouchstart.workers.dev).

The default markdown file is in this repo [https://github.com/ontouchstart/ontouchstart-rustwasm-markdown-parser/blob/master/README.md](https://github.com/ontouchstart/ontouchstart-rustwasm-markdown-parser/blob/master/README.md).

You can also parse external **raw** markdown file from a src url like

[https://ontouchstart-rustwasm-markdown-parser.ontouchstart.workers.dev/?src=https://raw.githubusercontent.com/cloudflare/cloudflare-docs/production/products/workers/src/content/tutorials/hello-world-rust/index.md](https://ontouchstart-rustwasm-markdown-parser.ontouchstart.workers.dev/?src=https://raw.githubusercontent.com/cloudflare/cloudflare-docs/production/products/workers/src/content/tutorials/hello-world-rust/index.md)

# π·ββοΈπ¦πΈοΈ `rustwasm-worker-template`

A template for kick starting a Cloudflare worker project using
[`wasm-pack`](https://github.com/rustwasm/wasm-pack).

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting worker to Cloudflare's worker infrastructure.

## π Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.

## π΄ Usage

### π Use `wrangler generate` to Clone this Template

[Learn more about `wrangler generate` here.](https://github.com/cloudflare/wrangler)

```
wrangler generate wasm-worker  https://github.com/cloudflare/rustwasm-worker-template.git
cd wasm-worker
```

### π οΈ Build with `wasm-pack build`

```
wasm-pack build
```

### π¬ Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

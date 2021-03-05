addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const { parse } = wasm_bindgen
  await wasm_bindgen(wasm)
  let markdown_input = "Hello world, this is a ~~complicated~~ *very simple* example.";
  const output = `
<pre><code>${markdown_input}</code></pre>
${parse(markdown_input)}
`
  let res = new Response(output, { status: 200 })
  res.headers.set('Content-type', 'text/html')
  return res
}

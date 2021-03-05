addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const { url } = request;
  const url_obj = new URL(url);
  const src = url_obj.searchParams.get('src') || 'https://raw.githubusercontent.com/cloudflare/rustwasm-worker-template/master/README.md';

  const input = await (await fetch(src)).text() || `# Hello World`;
  const { parse } = wasm_bindgen;
  await wasm_bindgen(wasm);

  const output = `
<html>
<meta charSet="utf-8"/>
<pre><code>${input}</code></pre>
${parse(input)}
</html>
`
  let res = new Response(output, { status: 200 })
  res.headers.set('Content-type', 'text/html')
  return res
}

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
  const src = url_obj.searchParams.get('src') || 'https://raw.githubusercontent.com/ontouchstart/ontouchstart-rustwasm-markdown-parser/master/README.md';

  const input = await (await fetch(src)).text() || `# Hello World`;
  const { parse } = wasm_bindgen;
  await wasm_bindgen(wasm);

  const output = `
<html>
<meta charSet="utf-8"/>
<a href="https://ontouchstart-rustwasm-markdown-parser.ontouchstart.workers.dev">🏡</a>
<h1>HTML</h1>
${parse(input)}
<h1>Markdown</h1>
<pre><code>${input}</code></pre>
</html>
`
  const headers = new Headers({
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*'
  });
  const res = new Response(output, { status: 200, headers });
  return res;
}

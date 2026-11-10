import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { resolve, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2','.webmanifest':'application/manifest+json'};
createServer((req,res)=>{
  let path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if (path.endsWith('/')) path += 'index.html';
  let file = join(root,path.replace(/^\/+/,''));
  if (!existsSync(file)) { res.writeHead(404);res.end('Not found');return; }
  res.writeHead(200,{'Content-Type':types[extname(file)]??'application/octet-stream'});
  createReadStream(file).pipe(res);
}).listen(4173,()=>console.log('Preview at http://localhost:4173'));

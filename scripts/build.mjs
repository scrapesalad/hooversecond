import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { pages, services } from '../src/pages.js';
import { renderPage } from '../src/template.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(join(out, 'assets'), { recursive: true });
await cp(join(root, 'assets/site.css'), join(out, 'assets/site.css'));
await cp(join(root, 'assets/site.js'), join(out, 'assets/site.js'));
const templateCss = (await readFile(join(root, 'assets/template.css'), 'utf8'))
  .replaceAll('/wp-content/themes/stellartheme/resources/web/fonts/', '/assets/fonts/')
  .replaceAll('../fonts/Avenir-', '/assets/fonts/Avenir-')
  .replaceAll('../webfonts/', '/assets/webfonts/')
  .replaceAll('../../../../../uploads/Unorganized/Fence-landing-page.jpg', '/assets/fence-hero.jpg')
  .replaceAll('../../../../../uploads/2022/04/concrete_wall.png', '/assets/fence-hero.jpg')
  .replaceAll('../../../../../uploads/2022/04/concrete_seamless9085.png?id=8960', '/assets/fence-hero.jpg')
  .replaceAll('url("ajax-loader.html")', 'url("data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")');
await writeFile(join(out, 'assets/template.css'), templateCss);
await cp(join(root, 'assets/fonts'), join(out, 'assets/fonts'), {recursive:true});
await cp(join(root, 'assets/webfonts'), join(out, 'assets/webfonts'), {recursive:true});
for (const asset of ['hoover-logo.png','fence-hero.jpg','vinyl-fence.webp','favicon.png']) await cp(join(root, `assets/${asset}`), join(out, `assets/${asset}`));

for (const page of pages) {
  const dir = page.path === '/' ? out : join(out, page.path.replace(/^\/+|\/+$/g, ''));
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), renderPage(page), 'utf8');
}

const urls = pages.map(page => `  <url><loc>https://hooverfencing.com${page.path}</loc></url>`).join('\n');
await writeFile(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
await writeFile(join(out, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://hooverfencing.com/sitemap.xml\n');
await writeFile(join(out, 'site.webmanifest'), JSON.stringify({name:'Hoover Fence Company',short_name:'Hoover Fence',start_url:'/',display:'standalone',background_color:'#ffffff',theme_color:'#741d23'},null,2));

const inventory = pages.map(({path,title,description,h1}) => ({route:path,title,description,h1,template:path==='/'?'home':path==='/contact/'?'contact':'interior',geographicFocus:'Hoover, Alabama',canonical:`https://hooverfencing.com${path}`}));
const localDate = new Intl.DateTimeFormat('en-CA', {timeZone:'America/Denver', year:'numeric', month:'2-digit', day:'2-digit'}).format(new Date());
const routeInventory = JSON.stringify({generated:localDate,baseUrl:'https://hooverfencing.com',geographicCoverage:{primaryMarket:'Hoover, Alabama',publishedServiceArea:['Hoover, Alabama']},routes:inventory,serviceCards:services.map(([name,url])=>({name,url}))},null,2)+'\n';
await writeFile(join(out, 'route-inventory.json'), routeInventory);
await writeFile(join(root, 'route-inventory.json'), routeInventory);
console.log(`Built ${pages.length} static pages in ${out}`);

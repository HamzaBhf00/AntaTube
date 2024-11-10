import { writeFileSync } from 'fs';
import globby from 'globby';
import prettier from 'prettier';

interface PrettierConfig {
  parser: string;
  [key: string]: any;
}

async function generate() {
  const prettierConfig = (await prettier.resolveConfig('./.prettierrc.js')) as PrettierConfig | null;
  
  const pages: string[] = await globby([
    'pages/**/*.tsx',
    'app/**/*.tsx',
    '!app/**/_*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
  ]);

  const siteUrl = 'https://antatube.com';

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page: string) => {
            const path = page
              .replace('pages', '')
              .replace('app', '')
              .replace('.tsx', '')
              .replace('/page', '');
            const route = path === '/index' ? '' : path;
            
            return `
              <url>
                  <loc>${`${siteUrl}${route}`}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>daily</changefreq>
                  <priority>0.7</priority>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...(prettierConfig || {}),
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
  console.log('Sitemap generated successfully!');
}

try {
  require.resolve('prettier');
  generate();
} catch (error) {
  console.error('Please install prettier: npm install --save-dev prettier');
} 
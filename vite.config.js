import { defineConfig, loadEnv } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { createHtmlPlugin } from 'vite-plugin-html';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import * as path from 'path';
import { URL, fileURLToPath } from 'url';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    publicDir: 'static',
    ...(env.VITE_PORT
      ? {
          server: {
            port: Number(env.VITE_PORT),
          },
        }
      : {}),
    plugins: [
      handlebars({
        partialDirectory: path.resolve(__dirname, 'src/partials'),
      }),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.js',
        template: '/index.html',
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'src/icons')],
        symbolId: '[name]',
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "src/styles/base/_mixins.scss";
          @import "src/styles/base/_placeholders.scss";
          @import "src/styles/base/_functions.scss";
          @import "src/styles/base/_media.scss";
        `,
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});

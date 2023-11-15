import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { createHtmlPlugin } from 'vite-plugin-html';

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
        partialDirectory: resolve(__dirname, 'src/partials'),
      }),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.js',
        template: '/index.html',
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
  };
});

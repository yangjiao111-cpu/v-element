// vite.es.config.ts
import { defineConfig } from "file:///D:/Project/v-element/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.37_terser@5.46.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Project/v-element/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_8599e69d80c40408955deaee2ca86b50/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///D:/Project/v-element/node_modules/.pnpm/vite-plugin-dts@3.9.1_@type_2d4304943cc436e1182942613fd1b923/node_modules/vite-plugin-dts/dist/index.mjs";
import { readdirSync, readFileSync } from "fs";
import { filter, map, delay } from "file:///D:/Project/v-element/node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/lodash.js";
import { hooksPlugin } from "file:///D:/Project/v-element/libs/vite-plugins/.dist/index.js";
import shell from "file:///D:/Project/v-element/node_modules/.pnpm/shelljs@0.10.0/node_modules/shelljs/shell.js";
import terser from "file:///D:/Project/v-element/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.59.0/node_modules/@rollup/plugin-terser/dist/es/index.js";
var __vite_injected_original_dirname = "D:\\Project\\v-element\\packages\\core";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
var TRY_MOVE_STYLES_DELAY = 800;
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var isTest = process.env.NODE_ENV === "test";
function moveStyles() {
  try {
    readFileSync("./dist/umd/index.css.gz");
    shell.cp("-R", "./dist/es/theme", "./dist");
  } catch (err) {
    delay(moveStyles, TRY_MOVE_STYLES_DELAY);
  }
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }),
    hooksPlugin({
      rmFiles: ["./dist/es", "./dist/theme", "./dist/types"],
      afterBuild: moveStyles
    }),
    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ["log"],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest)
        }
      },
      format: {
        semicolons: false,
        shorthand: isProd,
        braces: !isProd,
        beautify: !isProd,
        comments: !isProd
      },
      mangle: {
        toplevel: isProd,
        eval: isProd,
        keep_classnames: isDev,
        keep_fnames: isDev
      }
    })
  ],
  build: {
    outDir: "dist/es",
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "VElement",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          if (assetInfo.type === "asset" && /\.(css)$/i.test(assetInfo.name)) {
            return "theme/[name].[ext]";
          }
          return assetInfo.name;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils") || id.includes("plugin-vue:export-helper")) {
            return "utils";
          }
          for (const item of getDirectoriesSync("../components")) {
            if (id.includes(`packages/components/${item}`)) {
              return item;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXHYtZWxlbWVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXHYtZWxlbWVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXFxcXHZpdGUuZXMuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0L3YtZWxlbWVudC9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgZGVsYXkgfSBmcm9tICdsb2Rhc2gtZXMnXHJcbmltcG9ydCB7IGhvb2tzUGx1Z2luIH0gZnJvbSAnQGVyLXVpLWVsZW1lbnQvdml0ZS1wbHVnaW5zJztcclxuaW1wb3J0IHNoZWxsIGZyb20gJ3NoZWxsanMnXHJcbmltcG9ydCB0ZXJzZXIgZnJvbSAnQHJvbGx1cC9wbHVnaW4tdGVyc2VyJ1xyXG5cclxuZnVuY3Rpb24gZ2V0RGlyZWN0b3JpZXNTeW5jKGJhc2VQYXRoOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGVudHJpZXMgPSByZWFkZGlyU3luYyhiYXNlUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiBtYXAoXHJcbiAgICAgICAgZmlsdGVyKGVudHJpZXMsIChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXHJcbiAgICAgICAgKGVudHJ5KSA9PiBlbnRyeS5uYW1lXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBUUllfTU9WRV9TVFlMRVNfREVMQVkgPSA4MDAgYXMgY29uc3Q7XHJcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xyXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCI7XHJcblxyXG5mdW5jdGlvbiBtb3ZlU3R5bGVzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZWFkRmlsZVN5bmMoJy4vZGlzdC91bWQvaW5kZXguY3NzLmd6JylcclxuICAgICAgICBzaGVsbC5jcCgnLVInLCAnLi9kaXN0L2VzL3RoZW1lJywgJy4vZGlzdCcpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkZWxheShtb3ZlU3R5bGVzLCBUUllfTU9WRV9TVFlMRVNfREVMQVkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdnVlKCksXHJcbiAgICAgICAgZHRzKHtcclxuICAgICAgICAgICAgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuYnVpbGQuanNvbicsXHJcbiAgICAgICAgICAgIG91dERpcjogXCJkaXN0L3R5cGVzXCJcclxuICAgICAgICB9KSxcclxuICAgICAgICBob29rc1BsdWdpbih7XHJcbiAgICAgICAgICAgIHJtRmlsZXM6IFsnLi9kaXN0L2VzJywgJy4vZGlzdC90aGVtZScsICcuL2Rpc3QvdHlwZXMnXSxcclxuICAgICAgICAgICAgYWZ0ZXJCdWlsZDogbW92ZVN0eWxlc1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRlcnNlcih7XHJcbiAgICAgICAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZXM6IGlzUHJvZCxcclxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogaXNQcm9kLFxyXG4gICAgICAgICAgICAgICAgZHJvcF9jb25zb2xlOiBpc1Byb2QgJiYgW1wibG9nXCJdLFxyXG4gICAgICAgICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogaXNQcm9kLFxyXG4gICAgICAgICAgICAgICAgcGFzc2VzOiBpc1Byb2QgPyA0IDogMSxcclxuICAgICAgICAgICAgICAgIGdsb2JhbF9kZWZzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJAREVWXCI6IEpTT04uc3RyaW5naWZ5KGlzRGV2KSxcclxuICAgICAgICAgICAgICAgICAgICBcIkBQUk9EXCI6IEpTT04uc3RyaW5naWZ5KGlzUHJvZCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJAVEVTVFwiOiBKU09OLnN0cmluZ2lmeShpc1Rlc3QpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICBzZW1pY29sb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3J0aGFuZDogaXNQcm9kLFxyXG4gICAgICAgICAgICAgICAgYnJhY2VzOiAhaXNQcm9kLFxyXG4gICAgICAgICAgICAgICAgYmVhdXRpZnk6ICFpc1Byb2QsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50czogIWlzUHJvZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFuZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICB0b3BsZXZlbDogaXNQcm9kLFxyXG4gICAgICAgICAgICAgICAgZXZhbDogaXNQcm9kLFxyXG4gICAgICAgICAgICAgICAga2VlcF9jbGFzc25hbWVzOiBpc0RldixcclxuICAgICAgICAgICAgICAgIGtlZXBfZm5hbWVzOiBpc0RldixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgb3V0RGlyOiAnZGlzdC9lcycsXHJcbiAgICAgICAgbWluaWZ5OiBmYWxzZSxcclxuICAgICAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2luZGV4LnRzXCIpLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlZFbGVtZW50XCIsXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiBcImluZGV4XCIsXHJcbiAgICAgICAgICAgIGZvcm1hdHM6IFtcImVzXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIsXHJcbiAgICAgICAgICAgICAgICBcIkBmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWVcIixcclxuICAgICAgICAgICAgICAgIFwiQHBvcHBlcmpzL2NvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiYXN5bmMtdmFsaWRhdG9yXCIsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09IFwic3R5bGUuY3NzXCIpIHJldHVybiBcImluZGV4LmNzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRJbmZvLnR5cGUgPT09ICdhc3NldCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgL1xcLihjc3MpJC9pLnRlc3QoYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3RoZW1lL1tuYW1lXS5bZXh0XSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZW5kb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL2hvb2tzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImhvb2tzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZC5pbmNsdWRlcyhcIi9wYWNrYWdlcy91dGlsc1wiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZC5pbmNsdWRlcyhcInBsdWdpbi12dWU6ZXhwb3J0LWhlbHBlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1dGlsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBnZXREaXJlY3Rvcmllc1N5bmMoXCIuLi9jb21wb25lbnRzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhgcGFja2FnZXMvY29tcG9uZW50cy8ke2l0ZW19YCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UyxTQUFTLG9CQUFvQjtBQUNyVSxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixTQUFTLGFBQWEsb0JBQW9CO0FBQzFDLFNBQVMsUUFBUSxLQUFLLGFBQWE7QUFDbkMsU0FBUyxtQkFBbUI7QUFDNUIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQVJuQixJQUFNLG1DQUFtQztBQVV6QyxTQUFTLG1CQUFtQixVQUFrQjtBQUMxQyxRQUFNLFVBQVUsWUFBWSxVQUFVLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFFN0QsU0FBTztBQUFBLElBQ0gsT0FBTyxTQUFTLENBQUMsVUFBVSxNQUFNLFlBQVksQ0FBQztBQUFBLElBQzlDLENBQUMsVUFBVSxNQUFNO0FBQUEsRUFDckI7QUFDSjtBQUVBLElBQU0sd0JBQXdCO0FBQzlCLElBQU0sU0FBUyxRQUFRLElBQUksYUFBYTtBQUN4QyxJQUFNLFFBQVEsUUFBUSxJQUFJLGFBQWE7QUFDdkMsSUFBTSxTQUFTLFFBQVEsSUFBSSxhQUFhO0FBRXhDLFNBQVMsYUFBYTtBQUNsQixNQUFJO0FBQ0EsaUJBQWEseUJBQXlCO0FBQ3RDLFVBQU0sR0FBRyxNQUFNLG1CQUFtQixRQUFRO0FBQUEs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

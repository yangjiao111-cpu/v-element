// vite.es.config.ts
import { defineConfig } from "file:///D:/Project/v-element/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.37_terser@5.46.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Project/v-element/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_8599e69d80c40408955deaee2ca86b50/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///D:/Project/v-element/node_modules/.pnpm/vite-plugin-dts@3.9.1_@type_2d4304943cc436e1182942613fd1b923/node_modules/vite-plugin-dts/dist/index.mjs";
import { readdirSync, readFileSync } from "fs";
import { filter, map, delay } from "file:///D:/Project/v-element/node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/lodash.js";

// hooksPlugin.ts
import { each, isFunction } from "file:///D:/Project/v-element/node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/lodash.js";
import shell from "file:///D:/Project/v-element/node_modules/.pnpm/shelljs@0.10.0/node_modules/shelljs/shell.js";
function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuild
}) {
  return {
    name: "hooks-plugin",
    buildStart() {
      each(rmFiles, (fName) => shell.rm("-rf", fName));
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err) {
      !err && isFunction(afterBuild) && afterBuild();
    }
  };
}

// vite.es.config.ts
import shell2 from "file:///D:/Project/v-element/node_modules/.pnpm/shelljs@0.10.0/node_modules/shelljs/shell.js";
import terser from "file:///D:/Project/v-element/node_modules/.pnpm/@rollup+plugin-terser@1.0.0_rollup@4.59.0/node_modules/@rollup/plugin-terser/dist/es/index.js";
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
    shell2.cp("-R", "./dist/es/theme", "./dist");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiLCAiaG9va3NQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXHYtZWxlbWVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXHYtZWxlbWVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXFxcXHZpdGUuZXMuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0L3YtZWxlbWVudC9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgZGVsYXkgfSBmcm9tICdsb2Rhc2gtZXMnXHJcbmltcG9ydCBob29rc1BsdWdpbiBmcm9tICcuL2hvb2tzUGx1Z2luJ1xyXG5pbXBvcnQgc2hlbGwgZnJvbSAnc2hlbGxqcydcclxuaW1wb3J0IHRlcnNlciBmcm9tICdAcm9sbHVwL3BsdWdpbi10ZXJzZXInXHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgZW50cmllcyA9IHJlYWRkaXJTeW5jKGJhc2VQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XHJcblxyXG4gICAgcmV0dXJuIG1hcChcclxuICAgICAgICBmaWx0ZXIoZW50cmllcywgKGVudHJ5KSA9PiBlbnRyeS5pc0RpcmVjdG9yeSgpKSxcclxuICAgICAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFRSWV9NT1ZFX1NUWUxFU19ERUxBWSA9IDgwMCBhcyBjb25zdDtcclxuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCI7XHJcbmNvbnN0IGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIjtcclxuXHJcbmZ1bmN0aW9uIG1vdmVTdHlsZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlYWRGaWxlU3luYygnLi9kaXN0L3VtZC9pbmRleC5jc3MuZ3onKVxyXG4gICAgICAgIHNoZWxsLmNwKCctUicsICcuL2Rpc3QvZXMvdGhlbWUnLCAnLi9kaXN0JylcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGRlbGF5KG1vdmVTdHlsZXMsIFRSWV9NT1ZFX1NUWUxFU19ERUxBWSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICB2dWUoKSxcclxuICAgICAgICBkdHMoe1xyXG4gICAgICAgICAgICB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJyxcclxuICAgICAgICAgICAgb3V0RGlyOiBcImRpc3QvdHlwZXNcIlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhvb2tzUGx1Z2luKHtcclxuICAgICAgICAgICAgcm1GaWxlczogWycuL2Rpc3QvZXMnLCAnLi9kaXN0L3RoZW1lJywgJy4vZGlzdC90eXBlcyddLFxyXG4gICAgICAgICAgICBhZnRlckJ1aWxkOiBtb3ZlU3R5bGVzXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGVyc2VyKHtcclxuICAgICAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgICAgICAgIHNlcXVlbmNlczogaXNQcm9kLFxyXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBpc1Byb2QsXHJcbiAgICAgICAgICAgICAgICBkcm9wX2NvbnNvbGU6IGlzUHJvZCAmJiBbXCJsb2dcIl0sXHJcbiAgICAgICAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiBpc1Byb2QsXHJcbiAgICAgICAgICAgICAgICBwYXNzZXM6IGlzUHJvZCA/IDQgOiAxLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsX2RlZnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkBERVZcIjogSlNPTi5zdHJpbmdpZnkoaXNEZXYpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQFBST0RcIjogSlNPTi5zdHJpbmdpZnkoaXNQcm9kKSxcclxuICAgICAgICAgICAgICAgICAgICBcIkBURVNUXCI6IEpTT04uc3RyaW5naWZ5KGlzVGVzdCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgICAgICAgIHNlbWljb2xvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvcnRoYW5kOiBpc1Byb2QsXHJcbiAgICAgICAgICAgICAgICBicmFjZXM6ICFpc1Byb2QsXHJcbiAgICAgICAgICAgICAgICBiZWF1dGlmeTogIWlzUHJvZCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiAhaXNQcm9kLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYW5nbGU6IHtcclxuICAgICAgICAgICAgICAgIHRvcGxldmVsOiBpc1Byb2QsXHJcbiAgICAgICAgICAgICAgICBldmFsOiBpc1Byb2QsXHJcbiAgICAgICAgICAgICAgICBrZWVwX2NsYXNzbmFtZXM6IGlzRGV2LFxyXG4gICAgICAgICAgICAgICAga2VlcF9mbmFtZXM6IGlzRGV2LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBvdXREaXI6ICdkaXN0L2VzJyxcclxuICAgICAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vaW5kZXgudHNcIiksXHJcbiAgICAgICAgICAgIG5hbWU6IFwiVkVsZW1lbnRcIixcclxuICAgICAgICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcclxuICAgICAgICAgICAgZm9ybWF0czogW1wiZXNcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICAgICAgICAgIFwidnVlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIixcclxuICAgICAgICAgICAgICAgIFwiQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJAcG9wcGVyanMvY29yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhc3luYy12YWxpZGF0b3JcIixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gXCJzdHlsZS5jc3NcIikgcmV0dXJuIFwiaW5kZXguY3NzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldEluZm8udHlwZSA9PT0gJ2Fzc2V0JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvXFwuKGNzcykkL2kudGVzdChhc3NldEluZm8ubmFtZSBhcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndGhlbWUvW25hbWVdLltleHRdJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCIvcGFja2FnZXMvaG9va3NcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9va3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL3V0aWxzXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwicGx1Z2luLXZ1ZTpleHBvcnQtaGVscGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInV0aWxzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGdldERpcmVjdG9yaWVzU3luYyhcIi4uL2NvbXBvbmVudHNcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKGBwYWNrYWdlcy9jb21wb25lbnRzLyR7aXRlbX1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RcXFxcdi1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RcXFxcdi1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcaG9va3NQbHVnaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3Qvdi1lbGVtZW50L3BhY2thZ2VzL2NvcmUvaG9va3NQbHVnaW4udHNcIjtpbXBvcnQgeyBlYWNoLCBpc0Z1bmN0aW9uIH0gZnJvbSAnbG9kYXNoLWVzJ1xyXG5pbXBvcnQgc2hlbGwgZnJvbSBcInNoZWxsanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9va3NQbHVnaW4oe1xyXG4gICAgcm1GaWxlcyA9IFtdLFxyXG4gICAgYmVmb3JlQnVpbGQsXHJcbiAgICBhZnRlckJ1aWxkXHJcbn06IHtcclxuICAgIHJtRmlsZXM/OiBzdHJpbmdbXTtcclxuICAgIGJlZm9yZUJ1aWxkPzogRnVuY3Rpb247XHJcbiAgICBhZnRlckJ1aWxkPzogRnVuY3Rpb247XHJcbn0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogJ2hvb2tzLXBsdWdpbicsXHJcbiAgICAgICAgYnVpbGRTdGFydCgpIHtcclxuICAgICAgICAgICAgZWFjaChybUZpbGVzLCAoZk5hbWUpID0+IHNoZWxsLnJtKFwiLXJmXCIsIGZOYW1lKSlcclxuICAgICAgICAgICAgaXNGdW5jdGlvbihiZWZvcmVCdWlsZCkgJiYgYmVmb3JlQnVpbGQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnVpbGRFbmQoZXJyPzogRXJyb3IpIHtcclxuICAgICAgICAgICAgIWVyciAmJiBpc0Z1bmN0aW9uKGFmdGVyQnVpbGQpICYmIGFmdGVyQnVpbGQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1MsU0FBUyxvQkFBb0I7QUFDclUsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxhQUFhLG9CQUFvQjtBQUMxQyxTQUFTLFFBQVEsS0FBSyxhQUFhOzs7QUNMK1AsU0FBUyxNQUFNLGtCQUFrQjtBQUNuVSxPQUFPLFdBQVc7QUFFSCxTQUFSLFlBQTZCO0FBQUEsRUFDaEMsVUFBVSxDQUFDO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFDSixHQUlHO0FBQ0MsU0FBTztBQUFBLElBQ0gsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUNULFdBQUssU0FBUyxDQUFDLFVBQVUsTUFBTSxHQUFHLE9BQU8sS0FBSyxDQUFDO0FBQy9DLGlCQUFXLFdBQVcsS0FBSyxZQUFZO0FBQUEsSUFDM0M7QUFBQSxJQUNBLFNBQVMsS0FBYTtBQUNsQixPQUFDLE9BQU8sV0FBVyxVQUFVLEtBQUssV0FBVztBQUFBLElBQ2pEO0FBQUEsRUFDSjtBQUNKOzs7QURmQSxPQUFPQSxZQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQVJuQixJQUFNLG1DQUFtQztBQVV6QyxTQUFTLG1CQUFtQixVQUFr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

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      vanillaExtractPlugin({
        identifiers: 'short'
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts", "**/*.stories.tsx"],
      }),
      postcss({ 
        extensions: [".css"], 
        inject: true,
        modules: false,
      }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, "react", "react-dom"],
  },
];

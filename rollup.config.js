import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// New
// import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
    {
      input: "src/index.ts",           // What is the entry point that exports all of our components
      output: [
        {
          file: packageJson.main,     // File that getting imported to 
          format: "cjs",
          sourcemap: true,
        },
        {
          file: packageJson.module,
          format: "esm",
          sourcemap: true,
        },
      ],
      plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
  
        // NEW
        // postcss(), 
      ],
    },
    {
      input: "dist/esm/types/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts()],
  
      // NEW
    //   external: [/\.css$/],
    },
  ];
  
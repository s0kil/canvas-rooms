import esbuild from "esbuild"
import babel from "esbuild-plugin-babel"

const isProduction = process.env.NODE_ENV === "production"

const watch = {
  onRebuild(error, result) {
    if (error) console.error("Build Failed")
    else console.error("Build Succeeded")
  },
}

esbuild
  .build({
    entryPoints: ["index.js"],
    bundle: true,
    minify: isProduction ? true : false,
    outfile: "build/main.js",
    plugins: [babel()],
    sourcemap: isProduction ? false : true,
    watch: isProduction ? false : watch,
    target: "es2020",
    incremental: isProduction ? false : true,
  })
  .catch(() => process.exit(1))

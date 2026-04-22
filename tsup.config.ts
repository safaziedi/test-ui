import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.ts'], // Crée ce fichier pour exporter tes composants
  format: ['esm'],
  dts: true, // Génère les fichiers de types .d.ts pour l'autocomplétion
  clean: true,
  minify: true,
  external: [], // VIDE : On veut que React 18 soit packagé à l'intérieur du JS
  injectStyle: true,
  outDir: 'dist',
  tsconfig: 'tsconfig.build.json',
});
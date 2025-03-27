import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: true,
  outDir: 'dist',
  entries: ['src/index'],
});

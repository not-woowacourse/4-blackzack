import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import globals from 'globals';

export default [
  { languageOptions: { globals: { ...globals.node, ...globals.jest } } },
  {
    plugins: { 'no-relative-import-paths': noRelativeImportPaths },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: true,
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  prettierConfig,
  { ignores: ['dist', 'node_modules'] },
];

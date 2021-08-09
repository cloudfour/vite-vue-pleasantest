import vuePlugin from "rollup-plugin-vue";
import { configureDefaults } from "pleasantest";

configureDefaults({
  moduleServer: {
    plugins: [
      // Rollup plugin to replace feature flag globals with boolean literals to get proper tree-shaking
      // from https://github.com/cloudfour/pleasantest/blob/main/tests/utils/runJS.test.tsx
      {
        name: "replace-for-vue",
        transform(code) {
          return code
            .replace(/__VUE_OPTIONS_API__/g, "true")
            .replace(/__VUE_PROD_DEVTOOLS__/g, "false");
        },
      },
      vuePlugin(),
    ],
  },
});

// increased to allow browser setup/teardown
jest.setTimeout(10000); // in milliseconds

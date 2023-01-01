import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: "src/graphql/**/*.graphql",
  ignoreNoDocuments: true,
  config: {
    documentVariableSuffix: "test2",
  },
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;

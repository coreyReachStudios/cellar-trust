import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://busy-kepler.85-118-238-200.plesk.page/graphql",
	documents: "src/**/*.tsx",
	generates: {
		"./src/utils/_generated/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
				useTypeImports: true,
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;

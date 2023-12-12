import { generateApi, generateTemplates } from "swagger-typescript-api";
import path from "path";
import fs from "fs";

generateApi({
	name: "MyTest2",
	output: path.resolve(process.cwd(), "./services-3"),
	url: "http://localhost:3000/api-json",
	httpClientType: "axios",
	singleHttpClient: true,
	modular: true,
	templates: path.resolve(process.cwd(), "./templates"),
	prettier: {
		// By default prettier config is load from your project
		printWidth: 120,
		tabWidth: 2,
		trailingComma: "all",
		parser: "typescript",
	},
})
	.then(({ files, configuration }: any) => {
		// console.log('files',files);
		files.forEach(({ content, name }: any) => {
			console.log("content", content, name);
			fs.writeFileSync(path as any, content);
		});
	})
	.catch((e: any) => console.error(e));

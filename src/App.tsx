import "./App.css";
import NbCanvas from "./components/NbCanvas";
import EchartDemo from "./demo/echarts";
import FormTest from "./components/FormTest";
import MyTreeModel from "tree-model";
function App() {
	type DirNode = {
		// 文件夹名称
		dirName: string;
		// 文件夹绝对路径
		dirPath: string;
		// 包含的文件夹
		childrenDir?: DirNode[];
		// 文件夹下除文件夹外的文件名
		fileNames?: string[];
		// 父文件夹
		parent?: DirNode[];
	};
	const tree = new MyTreeModel({ childrenPropertyName: "childrenDir" });
	const dirObj: DirNode = {
		dirName: "root",
		dirPath: "/root",
		fileNames: [],
		childrenDir: [
			{
				dirName: "child_1",
				dirPath: "/root/child_1",
				fileNames: [],
				childrenDir: [
					{
						dirName: "child_1_1",
						dirPath: "/root/child_1/child_1_1",
					},
				],
			},
			{
				dirName: "child_2",
				dirPath: "/root/child_2",
				fileNames: [],
			},
		],
	};
	const root = tree.parse(dirObj);
	// const child = tree.parse({
	// 	id: "child_1",
	// });
	// root.addChild(child);
	// root.addChild(child);

	console.log("root", root);
	// console.log(child.getPath());
	root.walk(node => {
		console.log(node);
		if (node.hasChildren()) {
			node.model.fileNames.push(...["fil1", "fil2", "file3"]);
		}
		return true;
	});

	return (
		// <div className="App">
		// </div>
		// <NbCanvas />
		<FormTest />
	);
}

export default App;

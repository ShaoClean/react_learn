import "./App.css";
import NbCanvas from "./components/NbCanvas";
import EchartDemo from "./demo/echarts";
import FormTest from "./components/FormTest";
import TreeNode from "./utils/my_tree";
function App() {
	type nodeTest = {
		// 文件夹名称
		dirName: string;
		// 文件夹绝对路径
		dirPath: string;
		// 包含的文件夹
		childrenDir?: nodeTest[];
		// 文件夹下除文件夹外的文件名
		fileNames?: string[];
		// 父文件夹
		parent?: nodeTest;
	};

	const DirTreeNode = TreeNode<nodeTest>;

	const root = new DirTreeNode({
		dirName: "root",
		dirPath: "",
	});

	const child = new DirTreeNode({
		dirName: "root",
		dirPath: "",
	});

	root.addChild(child);

	console.log(root);
	return (
		// <div className="App">
		// </div>
		// <NbCanvas />
		<FormTest />
	);
}

export default App;

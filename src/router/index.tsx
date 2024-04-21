import FormTest from "../components/FormTest";
import Test from "../components/MyKeepAlive/Test";
import DataSync from "../components/DataSync";
import { ReducerDemo } from "../components/reducerDemo";
export const routes = [
	{
		path: "/",
		element: <ReducerDemo />,
	},
	{
		path: "/form",
		element: <FormTest />,
	},
];

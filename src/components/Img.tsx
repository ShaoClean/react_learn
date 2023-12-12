import img from "../assets/react.svg";
import { memo } from "react";

function Img(props: any) {
	console.log("img render");
	return (
		<>
			<div style={{ border: "1px solid black",marginTop:'20px' }}>
				<div>
					<img src={img} alt="" />
				</div>
				<p>img:{props?.text}</p>
			</div>
		</>
	);
}

export default memo(Img);

import { useEffect, useState } from "react";
import io from "socket.io-client";

export default function WsDemo() {
	const [messages, setMessages] = useState([]);
	const [messageInput, setMessageInput] = useState("");
	const socket = io("ws://localhost:3000"); // 替换为你的服务器地址

	useEffect(() => {
		// 监听服务器广播的消息
		socket.on("chat message", msg => {
			// @ts-ignore
			setMessages(prevMessages => [...prevMessages, msg]);
		});

		// 清理工作，组件卸载时断开连接
		return () => {
			socket.disconnect();
		};
	}, []);

	const handleSendMessage = () => {
		if (messageInput.trim() !== "") {
			// 发送消息到服务器
			socket.emit("chat message", messageInput);
			setMessageInput("");
		}
	};

	return (
		<div>
			<ul>
				{messages.map((msg, index) => (
					<li key={index}>{msg}</li>
				))}
			</ul>
			<input
				type="text"
				value={messageInput}
				onChange={e => setMessageInput(e.target.value)}
			/>
			<button onClick={handleSendMessage}>Send</button>
		</div>
	);
}

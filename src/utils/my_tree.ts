class TreeNode<T> {
	value: T;
	children: TreeNode<T>[];
	parent: TreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.children = [];
		this.parent = null;
	}

	addChild(childNode: TreeNode<T>): void {
		childNode.parent = this;
		this.children.push(childNode);
	}

	removeChild(childNode: TreeNode<T>): void {
		this.children = this.children.filter(child => child !== childNode);
		childNode.parent = null;
	}

	find(value: string): TreeNode<T> | null {
		if (this.value === value) {
			return this;
		}

		for (const child of this.children) {
			const result = child.find(value);
			if (result) {
				return result;
			}
		}

		return null;
	}

	getDepthPath(): TreeNode<T>[] {
		const path: TreeNode<T>[] = [];
		let currentNode: TreeNode<T> | null = this;
		while (currentNode) {
			path.unshift(currentNode);
			currentNode = currentNode.parent;
		}
		return path;
	}

	/**
	 * 前序遍历
	 */
	preOrderTraversal(callback: (node: TreeNode<T>) => void): void {
		callback(this);
		for (const child of this.children) {
			child.preOrderTraversal(callback);
		}
	}

	getPreOrderPath(): TreeNode<T>[] {
		const path: TreeNode<T>[] = [];
		this.preOrderTraversal(node => path.push(node));
		return path;
	}

	getDescendants(): TreeNode<T>[] {
		let descendants: TreeNode<T>[] = [];
		for (const child of this.children) {
			descendants.push(child, ...child.getDescendants());
		}
		return descendants;
	}

	// 是否为根节点
	isRoot() {
		return !this.parent;
	}
}

export default TreeNode;

class TrieNode {
	value: string;
	isWord: boolean;
	children: {
		[key: string]: TrieNode;
	};
	constructor(value: string) {
		this.value = value;
		this.isWord = false;
		this.children = {};
	}
}

export class Trie {
	root: TrieNode;
	constructor() {
		this.root = new TrieNode("");
	}

	insert(word: string) {
		word = word.trim();
		if (!word) {
			return;
		}
		let n = this.root;
		for (let i = 0; i < word.length; i++) {
			const c = word[i];
			if (!n.children.hasOwnProperty(c)) {
				n.children[c] = new TrieNode(c);
			}
			n = n.children[c];
			if (i === word.length - 1) {
				n.isWord = true;
			}
		}
	}

	search(fragment: string) {
		fragment = fragment.trim();
		if (!fragment) {
			return;
		}
		let n = this.root;
		for (let i = 0; i < fragment.length; i++) {
			const c = fragment[i];
			if (!n.children.hasOwnProperty(c)) {
				break;
			}
			n = n.children[c];
			if (i === fragment.length - 1 && n.isWord) {
				return true;
			}
		}
		return false;
	}

	autocomplete(fragment: string) {
		fragment = fragment.trim();
		if (!fragment) {
			return [];
		}
		let result = [];
		let n = this.root;
		for (let i = 0; i < fragment.length; i++) {
			const c = fragment[i];
			if (!n.children.hasOwnProperty(c)) {
				break;
			}
			n = n.children[c];
			if (i === fragment.length - 1) {
				const queue = [];
				queue.push([n, fragment]);
				while (queue.length) {
					const element: any = queue.shift();
					const node = element[0];
					const word = element[1];
					if (node.isWord) {
						result.push(word);
					}
					for (const j in node.children) {
						const child = node.children[j];
						queue.push([child, word + child.value]);
					}
				}
			}
		}
		return result;
	}
}

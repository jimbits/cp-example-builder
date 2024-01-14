async function clipboard(text, btn) {
	const temp = await navigator.clipboard.readText();
	return temp;
}

export { clipboard };

// navigator.clipboard
// 	.readText()
// 	.then(
// 		(clipText) => (document.querySelector(".editor").innerText += clipText)
// 	);

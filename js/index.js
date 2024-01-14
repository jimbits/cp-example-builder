import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { clipboard } from "./utils/clipboard";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);

document.addEventListener("DOMContentLoaded", onPageLoaded);

function onPageLoaded(e) {
	document.querySelectorAll("pre").forEach((el) => {
		hljs.highlightElement(el);
	});
}

const temp = await clipboard();
console.log(temp);
/*  */

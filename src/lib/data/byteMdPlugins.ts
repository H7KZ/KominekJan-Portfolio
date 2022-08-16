import breaks from '@bytemd/plugin-breaks';
import gemoji from '@bytemd/plugin-gemoji';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import highlightssr from '@bytemd/plugin-highlight-ssr';
import math from '@bytemd/plugin-math';
import mathssr from '@bytemd/plugin-math-ssr';
import mediumzoom from '@bytemd/plugin-medium-zoom';
import mermaid from '@bytemd/plugin-mermaid';

const plugins = [
	breaks(),
	gemoji(),
	gfm(),
	highlight(),
	highlightssr(),
	math(),
	mathssr(),
	mediumzoom(),
	mermaid()
];

export default plugins;

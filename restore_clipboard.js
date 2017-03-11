#!/usr/bin/env node
"use strict"

const child_process = require("child_process");

const X_SELECTION = process.env.PASSWORD_STORE_X_SELECTION || "clipboard";
const CLIP_TIME = process.env.PASSWORD_STORE_CLIP_TIME || 45;
const PREVIOUS_CLIPBOARD = process.argv[2];

setTimeout(restoreClipboard, CLIP_TIME*1000);

function restoreClipboard() {
	let xclipResult = child_process.spawnSync("xclip", ["-selection", X_SELECTION], {stdio: ["pipe", "ignore", "ignore"], input: PREVIOUS_CLIPBOARD});
}
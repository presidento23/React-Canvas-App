import React from "react";

import Pen from "./panels/pen";
import Eraser from "./panels/eraser";
import Stamp from "./panels/stamp";
import Download from "./panels/Download";

export default function ToolPanel({
	activeTool,
	penOptions,
	setPenOptions,
	eraserOptions,
	setEraserOptions,
	stampOptions,
	setStampOptions,
	downloadOptions,
	setDownloadOptions 
}) {

	if (activeTool === "pen"){

		return (
			<div className="tool-panel">
				<Pen
					penOptions={penOptions}
					setPenOptions={setPenOptions}
				/>
			</div>
		)}

	// If statements to determine the current state of the activeTool. Not sure if there is a better way by using hooks possibly
	if (activeTool === "eraser"){
		return(
			<div className= "tool-panel">
				<Eraser
					eraserOptions={eraserOptions}
					setEraserOptions={setEraserOptions}
				/>
			</div>
		)}
		
	if (activeTool === "stamp"){
		return(
			<div className= "tool-panel">
				<Stamp
					stampOptions={stampOptions}
					setStampOptions={setStampOptions}
				/>
			</div>
		)}

	if (activeTool === "download"){
		return(
			<div className= "tool-panel">
				<Download
					downloadOptions = {downloadOptions}
					setDownloadOptions = {setDownloadOptions}
				/>
			</div>
		)}
	
}
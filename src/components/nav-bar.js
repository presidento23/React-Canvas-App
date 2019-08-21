import React from "react";

import PenIcon from "./icons/pen-icon";
import EraserIcon from "./icons/eraser-icon";
import StampIcon from "./icons/stamp-icon";
import SaveIcon from "./icons/save-icon";

export default function NavBar({activeTool, setActiveTool}) {
	return (
		<div className="nav-bar">
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("pen")}
				title="Pen"
				style = {activeTool === "pen" ? {backgroundColor: "#b5226e"} :{}}
			>
				<PenIcon />
			</div>
			<div
				className="nav-bar__tool"
				onClick={e => setActiveTool("eraser")}
				title="Eraser"
				style = {activeTool === "eraser" ? {backgroundColor: "#b5226e"} :{}}

			>
				<EraserIcon />
			</div>

			{/* <div 
				className = "nav-bar__tool"
				onClick={e => setActiveTool("stamp")}
				title = "Stamp"
				// a quick little conditonal that checks the value of activeTool and changes the background if it matches
				// I tried do it from css but this appears the best way to use the state varibale activeTool 
				style = {activeTool === "stamp" ? {backgroundColor: "#b5226e"} :{}}

			>
				<StampIcon />
			</div> */}

			{/* <div 
				className = "nav-bar__tool"
				onClick={e => setActiveTool("download")}
				title = "Download"
				style = {activeTool === "download" ? {backgroundColor: "#b5226e"} :{}}

			>
				<SaveIcon />
			</div> */}
		</div>
	);
}
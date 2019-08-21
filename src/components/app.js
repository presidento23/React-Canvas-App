import React, { useState } from "react";
import createPersistedState from "use-persisted-state";

import "./app.css";

import NavBar from "./nav-bar";
import ToolPanel from "./tool-panel";
import Canvas from "./canvas";

export default function App() {
	const useActiveToolState = createPersistedState("tool");
	const usePenOptionsState = createPersistedState("pen");
	const useEraserOptionsState = createPersistedState("eraser");
	const useStampOptionsState = createPersistedState("stamp");



	/*
		If the syntax below (`useState(...)` etc.) looks unfamiliar to you,
		check out the docs on "React Hooks" we link to in the Resources section of the README.
	*/
	const [activeTool, setActiveTool] = useActiveToolState("pen");
	const [penOptions, setPenOptions] = usePenOptionsState({
		strokeWidth: 10,
		lineType: "solid",
		color: ["#000000"],
	});
	const [eraserOptions,setEraserOptions] = useEraserOptionsState({
		strokeWidth: 10,
		Color: "#ffffff",
		clearCanvas: false,
	});
	const [stampOptions,setStampOptions] = useStampOptionsState({
		MaxWidth:10,
		src: new Image(),
	})
	const  [downloadOptions,setDownloadOptions] = useState(false
	)


	return(
		<React.Fragment>
			<NavBar
				activeTool={activeTool}
				setActiveTool={setActiveTool}
			/>
			<ToolPanel
				activeTool={activeTool}
				penOptions={penOptions}
				setPenOptions={setPenOptions}
				eraserOptions = {eraserOptions}
				setEraserOptions = {setEraserOptions}
				stampOptions = {stampOptions}
				setStampOptions = {setStampOptions}
				downloadOptions = {downloadOptions}
				setDownloadOptions = {setDownloadOptions}

			/>
			<Canvas
				activeTool={activeTool}
				penOptions={penOptions}
				eraserOptions = {eraserOptions}
				setEraserOptions = {setEraserOptions}
				stampOptions = {stampOptions}
				downloadOptions = {downloadOptions}
				setDownloadOptions = {setDownloadOptions}
			/>
		</React.Fragment>
	);
}

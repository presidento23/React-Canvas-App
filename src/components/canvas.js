import React, { useRef, useState, useEffect } from "react";
// import FileSaver from "../Modules/FileSaver";

export default function Canvas({activeTool, penOptions,eraserOptions,stampOptions,setdownloadOptions,downloadOptions}) {
	const canvasRef = useRef(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [ctx, setCtx] = useState(null);
	const [isErasing, setIsErasing] = useState(false);
	const [isStamping,setIsStamping] = useState(false);
	var img = new Image();
	img.src = stampOptions.src;


	useEffect(() => {
		const canvas = canvasRef.current;
		setCtx(canvas.getContext("2d"));
	}, []);


	const getX = (event) => {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - canvasRef.current.offsetLeft;
		}
		else {
			return event.pageX - canvasRef.current.offsetLeft;
		}
	};

	const getY = (event) => {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - canvasRef.current.offsetTop;
		}
		else {
			return event.pageY - canvasRef.current.offsetTop;
		}
	};
// Thought maybe I could just set the clearCanvas variable from here since I'm clearly able to acess the object. However
// keep getting is not a function error on the setEraserOptions line. Believe it is due to the variable  not being passed

	// useEffect(() => {
	// 	if (eraserOptions.clearCanvas){
			
	// 		ctx.strokeStyle = eraserOptions.Color;
	// 		ctx.clearRect(0,0, 10000, 10000);
	// 		console.log("if conditon");
			
	// 	setEraserOptions({...eraserOptions, clearCanvas: false})
				
	// 	};
	// })


	const start = (event) => {
		if (activeTool === "pen") {
			setIsDrawing(true);
			ctx.beginPath();
			ctx.moveTo(getX(event), getY(event));
			event.preventDefault();
		}

		if (activeTool === "eraser") {
			setIsErasing(true);
			ctx.beginPath();
			ctx.moveTo(getX(event), getY(event));
			event.preventDefault();
		}
		
		if (activeTool === "stamp") {

			setIsStamping(true);
			event.preventDefault();
			ctx.drawImage(img,getX(event),getY(event),stampOptions.MaxWidth,stampOptions.MaxWidth);
		}

// Orginally was going to save downloadOptions as the canvas ref so I could call it directly from download.js however I forget
// it's a state variable and doens't update globally. So I did this round about event function. Then I couldn't figure out
// how to actually save the file or get it to open. opening dataURl inside a tab works everytime for me but some how now window.open
// So gave up and tried to install a module to make this easier and the module doesn't work with react. At least I'm batting 500
// with the requirements haha

		if (downloadOptions === true){
			var dataURl = canvasRef.current.toDataURL();
			console.log({dataURl});
			// FileSaver.saveAs(dataURl,"image.jpg");
			// window.open(dataURl);	
			downloadOptions = false;		
		}
	};

	const draw = (event) => {
		if (isDrawing) {
			ctx.lineTo(getX(event), getY(event));
			ctx.lineWidth = penOptions.strokeWidth;
			ctx.strokeStyle = penOptions.color[0];
			if (penOptions.lineType === "dash"){
				ctx.setLineDash([70,10]);
			}
			if (penOptions.lineType === "solid"){
				ctx.setLineDash([]);
			}
			if (penOptions.lineType === "dot"){
				ctx.setLineDash([15,10]);
			}
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		if (isErasing){
			ctx.lineTo(getX(event), getY(event));
			ctx.lineWidth = eraserOptions.strokeWidth;
			ctx.strokeStyle = eraserOptions.Color;
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		
		

		event.preventDefault();
	};

	const end = (event) => {
		if (isDrawing) {
			ctx.stroke();
			ctx.closePath();
			setIsDrawing(false);
		}
		if (isErasing) {
			ctx.stroke();
			ctx.closePath();
			setIsErasing(false);
		}
		if (isStamping){
			setIsStamping(false);
		}

		event.preventDefault();
	};
	

	return (
		<canvas
			width={window.innerWidth - 262}
			height={window.innerHeight}
			className="canvas"
			id = "canvas"
			ref={canvasRef}
			onMouseDown={start}
			onMouseMove={draw}
			onMouseUp={end}
		/>
	);
}
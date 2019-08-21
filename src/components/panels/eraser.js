import React, {useState,useEffect} from "react";




export default function Eraser({eraserOptions, setEraserOptions,clearCanvas}) {
	const [ctx,setCtx] = useState(null);

// These three functions were to try and make the clear canvas button worker. However I'm not sure how to acess the ctx 
// varibale across function components so I'm just going to move on. Also the useEffect hook isn't working how expected

	function setClearcanvasFalse(){		
		console.log("ran clear canvas");
		setEraserOptions.clearCanvas = false;
	}

	function canvasCleaner(){
		console.log("ran canvascleaner");

		setEraserOptions.clearCanvas = true;
	}

	// useEffect(() => {
	// 	if (eraserOptions.clearCanvas){

	// 		ctx.clearRect(0,0, window.innerWidth, window.innerHeight)
	// 		console.log("if conditon")
	// 		setClearcanvasFalse()
	// 	};
	// });
	

	return(
		<div>
			<h1>Eraser</h1>
			<section>
				<label>
					Eraser Width: {eraserOptions.strokeWidth}
					<input
						type= "range"
						value={eraserOptions.strokeWidth}
						id = "stroke-width"
						name="stroke-width"
						max="100"
						min="1"
						onChange = {e=> setEraserOptions ({...eraserOptions, strokeWidth: e.target.value})}
					/>
				</label>
			</section>
			{/* <section>
				<button 
					type= "button" 
					className = "reset-button"
					onClick = {e =>  setEraserOptions ({...eraserOptions, clearCanvas: true})}
				>
					Clear canvas
				</button>
			</section> */}
		</div>
	);
	}
		
		

	




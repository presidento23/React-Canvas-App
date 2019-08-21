import React, {useReducer} from "react";

export default function Pen({penOptions, setPenOptions}) {

	// Added this to force the pen panel to update. It would not change the text block otherwise
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	
	function cycleColors(newColor){
		penOptions.color.unshift(newColor);
		if (penOptions.color.length > 6){
			penOptions.color.pop();
		}
		forceUpdate();

	}

	function selectFromCycle(index){
		penOptions.color.unshift(penOptions.color[index]);
		forceUpdate();
	}

	return(
		<div>
			<h1>Pen</h1>
			<section>
				<div id = "stroke-color-container" 	className = "pen-panel">
					<label id = "stroke-color-header" 	className = "pen-panel">Stroke Color:</label>
					<input 
						type ="color"
						value= {penOptions.color[0]}
						onChange = {e => cycleColors(e.target.value)}
						name = 'current-color'
						id = "stroke-color"
						className = "pen-panel"

					>
					</input>
				</div>
				<div id = "last-6-colors" className = "pen-panel">
					<div 
						id = "color1"
						value = "0"
						style = {penOptions.color.length >= 1 ? {backgroundColor: penOptions.color[0]} :{}}
						onClick = {e => selectFromCycle(0)}
					>
					
					</div>
					<div 
						id = "color2"
						value = "1"
						style = {penOptions.color[1] ? {backgroundColor: penOptions.color[1]} :{}}
						onClick = {e => selectFromCycle(1)}

					>
					
						

					</div>
					<div 
						id = "color3"
						value ="2"
						style = {penOptions.color[2] ? {backgroundColor: penOptions.color[2]} :{}}
						onClick = {e => selectFromCycle(2)}

					>

					</div>
					<div 
						id = "color4"
						style = {penOptions.color[3] ? {backgroundColor: penOptions.color[3]} :{}}
						onClick = {e => selectFromCycle(3)}
					>

					</div>
					<div 
						id = "color5"
						value = "4"
						style = {penOptions.color[4] ? {backgroundColor: penOptions.color[4]} :{}}
						onClick = {e => selectFromCycle(4)}
					>

					</div>
					<div 
						id = "color6"
						value ="5"
						style = {penOptions.color[5] ? {backgroundColor: penOptions.color[5]} :{}}
						onClick = {e => selectFromCycle(5)}

					>

					</div>



				</div>
			</section>
			<section>
				<div id = "stroke-width-container">
					<label 
						className = "pen-panel" 
						id = "stroke-width-words">
						Stroke Width: {penOptions.strokeWidth} 
					</label>

					<input
						type = "range"
						min = "1"
						max = "100"
						id = "stroke-width"
						value={penOptions.strokeWidth}
						onChange={e => setPenOptions({...penOptions, strokeWidth: e.target.value})}
						name="stroke-width"
						className = "pen-panel"
					>
					</input>
				</div>
			</section>
			<section>
				<h2 className = "pen-panel">Line Type:</h2>
				<div className="line-types">
					<div id = "line-type-container">
						<button
							type="button"
							value="solid"
							onClick={e => setPenOptions({...penOptions, lineType: e.target.value})}
							id= "solid"
							style = {penOptions.lineType === "solid" ? {backgroundColor: "#66a3ff"} :{}}

						>
							Solid
						</button>
						
					
						<button
							type="button"
							value="dash"
							onClick={e => setPenOptions({...penOptions, lineType: e.target.value})}
							id = "dashed"
							style = {penOptions.lineType === "dash" ? {backgroundColor: "#66a3ff"} :{}}

						>
							Dashed
						</button>
					
						<button
							type="buttons"
							value="dot"
							onClick={e => setPenOptions({...penOptions, lineType: e.target.value})}
							id ="dotted"
							style = {penOptions.lineType === "dot" ? {backgroundColor: "#66a3ff"} :{}}

						>
							Dotted
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
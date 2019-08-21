import React from "react";
import Canvas from "../canvas";




export default function Download({downloadOptions,setDownloadOptions}){
	function downloadImage(){
        setDownloadOptions(true)
	}


	return(
		<div>
			<section>
				<h2>Download</h2>
			</section>
			<section>
				<label>
					<button
						name = "DownloadImage"
						type = "button"
						className = "download-button"
						onClick = {e => downloadImage(e)}
					>
                        Download Image
					</button>

				</label>
			</section>



		</div>

	)




}

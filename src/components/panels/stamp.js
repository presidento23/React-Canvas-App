import React from "react";


export default function Stamp({stampOptions,setStampOptions}){
    


//    function fileSelecterHandler(event){
//         console.log(event.target.files[0]);
//         setStampOptions({...stampOptions,src: event.target.files[0]})
//     }
// I made a function up here so I could call it and store the variable while writeing it once. 
// Sets the preview image and the state variable for use in Canvas.

	function previewFile() {
		var preview = document.getElementById("imagePreview");
		var file    = document.querySelector("input[type=file]").files[0];
		var reader  = new FileReader();
		
		reader.addEventListener("load", function () {
			preview.src = reader.result;
			stampOptions.src = reader.result;	  

		}, false);
	
		if (file) {
		  reader.readAsDataURL(file);
		  
		};
		
	  }
    return(
        <div>
        	<h1>Stamp</h1>
				<section>
					<label>
						max Width: {stampOptions.MaxWidth}
						<input
							type= "range"	
							value={stampOptions.MaxWidth}
							id = "stroke-width"
							name="stroke-width"
							max="500"
							min="30"
							onChange= {e => setStampOptions({...stampOptions,MaxWidth: e.target.value})}

						/>
					</label>
				</section>
				<section>
					<label>
						<h3>Upload An Image </h3>
						<input
							type= "file"
							className = "upload-button"
							onChange = {e => previewFile(e)}
							id = "stamp-upload-image-btn"

						/>
						<img 
							src = "" 
							height= "200"
							alt = "Image Preview"
							id = "imagePreview"
						>

						</img>
					</label>
				</section>



        	</div>


    )
}




var forwardButton = "Forward";
var backwardButton = "Backward";
var leftButton = "Left";
var rightButton = "Right";


function Update () {
	if(Input.GetButton(forwardButton)){
         transform.Translate(Vector3(0,0,20) * Time.deltaTime);
    } 
	if(Input.GetButton(backwardButton)){
		 transform.Translate(Vector3(0,0,-20) * Time.deltaTime);
	} 
	if(Input.GetButton(leftButton)){
		 transform.Rotate(Vector3(0,-20,0) *  5 *Time.deltaTime);
	} 
	if(Input.GetButton(rightButton)){
		 transform.Rotate(Vector3(0,20,0) * 5 * Time.deltaTime);
	}
	
	
}
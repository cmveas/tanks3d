var forwardButton = "JoysX";
var leftButton = "JoysY";



function Update () {
	
	speedHorizontal = Input.GetAxis("Horizontal") * Time.deltaTime * 30;
    transform.Rotate(0, speedHorizontal , 0 );    
    transform.LookAt(transform);


	speedHorizontal = Input.GetAxis("Vertical") * Time.deltaTime * 30;
    transform.Translate(0, 0 , speedHorizontal );    
    transform.LookAt(transform);  
}
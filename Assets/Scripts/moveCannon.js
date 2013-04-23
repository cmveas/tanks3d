
function Update () {
 if(Input.GetButton("Mouse X")){
		 transform.Rotate(Vector3(0,0,20) * 5 * Time.deltaTime);
	}
}

//Basic force to move a rigidbody object
var power : float = 500.0;
 
function Start () {
 //rigidbody.AddForce(Vector3(0,0,power));
}

function OnCollisionEnter(theCollision : Collision){
if(theCollision.gameObject.name == "Terrain"){
	  rigidbody.AddForce(Vector3(0,500,0));
	 }
}
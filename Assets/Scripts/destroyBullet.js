//A simple countdown timer
    var myTimer : float = 5.0;
    var isEnabled : byte = 1;
     
    function Update () {
     if(myTimer > 0){
      myTimer -= Time.deltaTime;
    
     }
     if(myTimer <= 0){
       Destroy(gameObject.FindWithTag("Bullet"), 0);
     }
  		Debug.Log("myTimer" + myTimer);
     
    }



function OnCollisionEnter(theCollision : Collision){
	if(isEnabled==1 && theCollision.gameObject.name != "Terrain"){
	  Destroy(theCollision.gameObject);
	   Destroy(gameObject.FindWithTag("Bullet"));
	 } else if(enabled==1 && theCollision.gameObject.name == "Terrain"){
  		Debug.Log("Terrain:" );
  		isEnabled=0; 
 	}else if(theCollision.gameObject.name == "BaseTank"){
 		 Debug.Log("BaseTank");
 	} else {
 		Debug.Log(theCollision.gameObject.name);
 		isEnabled=0; 
 	}


}

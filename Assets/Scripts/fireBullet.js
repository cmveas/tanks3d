var projectile : Rigidbody;
var turret : GameObject;
var cylinder : GameObject;
var fire = "Fire1";

function Update () {
    // Ctrl was pressed, launch a projectile
    if (Input.GetButtonDown(fire)) {
        // Instantiate the projectile at the position and rotation of this transform
		//                                   position                   rotation
        projectile = Instantiate(projectile, turret.transform.position, turret.transform.rotation);
        
        projectile.name="Bullet";
       
        /*
        print("cylinder Rotation:" + cylinder.transform.rotation);
        print("cylinder Local Rotation:" + cylinder.transform.localRotation);
        
        print("Turret Rotation:" + turret.transform.rotation);
        print("Turret Local Rotation:" + turret.transform.localRotation);
*/
		Physics.IgnoreCollision(projectile.collider, turret.collider);

		Physics.IgnoreCollision(projectile.collider, cylinder.collider);

		projectile.velocity =  projectile.transform.TransformDirection (Vector3.forward*250);

    }
}
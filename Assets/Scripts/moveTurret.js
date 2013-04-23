var mousex= "Mouse X";
var mousey= "Mouse Y";

function Update () {
  var speedHorizontal : float = Input.GetAxisRaw(mousex) * Time.deltaTime * 30;
    transform.Rotate (0, speedHorizontal, 0);    
    transform.LookAt(transform);    
    
    
    var speedVertical : float = Input.GetAxisRaw(mousey) * Time.deltaTime * 30;
    transform.Rotate (-speedVertical, 0 , 0);    
    transform.LookAt(transform);    
}
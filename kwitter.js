function add_user(){
 user_name=document.getElementById("input_login").value;
 localStorage.setItem("user_name",user_name);
 window.location="kwitter_room.html";
}
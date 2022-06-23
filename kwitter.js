function addUser()
{
    user_name = document.getElementById("user_name_teacher").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}   

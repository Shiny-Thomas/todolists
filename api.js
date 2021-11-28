function ajax(){

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){

        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
                
            
             var output="";
            for(var i=0;i<response.length;i++){
             output+="<input onclick='myfunction(this);'id='chkbx'type ='checkbox'>"+response[i].title+"</input>"+"<br>";
             

             }
         document.getElementById("list").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
var checked=-1;
chkbx=document.getElementById("chkbx");
function myfunction(chkbx){
    if(chkbx.checked==true){
    checked++;
    if(checked==5){
        alert("Congrats!!!! 5 tasks has been succesfully completed ");
    }
}
else{
    checked--;
    if(checked==5){
        alert("Congrats!!!! 5 tasks has been succesfully completed ");
    }
}
}
 
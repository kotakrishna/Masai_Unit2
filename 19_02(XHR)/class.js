
function start(){


    var xhn=new XMLHttpRequest();

    xhn.open('GET','https://reqres.in/api/users?page=2');

    xhn.send();

    xhn.onload=function(){};

    xhn.addEventListener('load',function(){
        var rec= xhn.response
        rec= JSON.parse(rec)
        // console.log(rec);
        
        var arr=rec.data
        // console.log(arr[0]["id"]);
        for ( i in arr){
            console.log(arr[i]);
            var datadiv=document.getElementById("data")
            
            var p=document.createElement("P")

            p.innerHTML= arr[i]["id"]+ "---"  + arr[i]["email"] + "---" + arr[i]["first_name"]+ "---" +arr[i]["last_name"]+ "---" +arr[i]["avatar"]

            datadiv.appendChild(p)
        }

        

    });
}
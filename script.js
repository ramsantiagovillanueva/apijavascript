
var generate = document.getElementById('generate')   
var content = document.getElementById('content')   


generate.addEventListener('click',function(){
    content.innerHTML="";
    var id = document.getElementById('id').value;
    var url = `https://randomuser.me/api/?results=${id}`;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.response).results;

            for (var x = 0; x < data.length; x++){
                var para = document.createElement("p");
                para.innerText = `${x}: ${data[x].name.title} ${data[x].name.first}  ${data[x].name.last} ${data[x].email} ${data[x].phone} ${data[x].location.city}`;
                para.id="p"+x;
                document.querySelector("#content").appendChild(para);
                var imahe = document.createElement("img");
                imahe.src = data[x].picture.thumbnail;
                document.querySelector("#"+para.id).append(imahe);
            }
        }
    };

    xhr.open('GET',url);
    xhr.send();
});
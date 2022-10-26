//GT REQUEST
function getTodos(){
    axios({
        method: 'get',
        url:'https://jsonplaceholder.typicode.com/todos'
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}


// POST REQUEST     
function addTodos()
{
    console.log('POST Request');
}

//PUT/PATCH REQUEST
function updateTodos(){
    console.log('PUT/PATCH Rquest');
}

// DELETE REQUEST
function removeTodos(){
    console.log('DELETE Rquest');
}
//SIMULTANEOS DATA
function getData(){
    console.log('Simultaneous Request')
}
//CUSTOM HEADERS 
function customHeaders(){
   console.log('Customm  Headers');
}
//RANSFORMING REQUESTS &< RESPONES 
function transfromResponse(){
    console.log('Transform Response');
}
    //CANCEL TOKEN 
function cancelToken(){
    console.log('Cancel Token');
}
//ERROR HANDLING
function errorHandling(){
    console.log('error handling');
}

function showoutput(res){
    document.getElementById('res').innerHTML =`<div class=card card-body mb-4>
    <h5>Status : ${res.status}</h5>
    </div>
    <div cladss="card mt-3">
    <div class="card-header" ></div>
    Headers
    </div>
    <div class="card-body">
    <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
    </div>
<div class='card mt-3">
<div class="card-header">
Config
</div>
<div class="card-body">
<pre>${JSON.stringify(res.config,null,2)}</pre>
</div>
</div>
 `;
}
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodos);
document.getElementById('update').addEventListener('click', updateTodos);
document.getElementById('delete').addEventListener('click', removeTodos);
document.getElementById('sim').addEventListener('click',getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transfromResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
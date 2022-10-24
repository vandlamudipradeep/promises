const posts = [{ title: 'Post One', 
body: 'This is post one' ,createdAt: new Date().getTime()
},

{ title: 'Post Two',
 body: 'This is post two',createdAt: new Date().getTime()
}
];

let intervalId ;
function getPosts(){
clearInterval(intervalId);
/*  const timerId */
intervalId =   setInterval(() =>{
        let output ='';
    for(let i=0 ; i<posts.length ;i++){
        output+=`<li>${posts[i].title} - last Update ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago </li>`;
     }
    console.log('timer running Id = ' , intervalId);
      document.body.innerHTML = output ;
    
},1000);
}
// getPosts()


function createPost(post){
    setTimeout(()=>{
        posts.push({ ...post, createdAt:new Date().getTime()});
        
    }, 10000);
}

function create4thPost(post,callback ){
    setTimeout(()=>{
        posts.push({ ...post, createdAt:new Date().getTime()});
        callback(); 
    },6000);
}
getPosts();
createPost(
    {
        title:'Post Three' , body: 'This is post'
    } , getPosts
)
create4thPost({
    title:'Post Four' , body:'This is post four' ,getPosts
},getPosts
);

var timer ;
var count =0  ;
function LastInEditSecondAgo(){
    count = 0 ;
    clearInterval(timer)
    timer = setInterval(()=>{
        count++;
        console.log(count)
    }, 5000);
}


function createNewPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({ ...post, createdAt:new Date().getTime()});
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something is went wrong');
            }
        }, 1000);
    })
}







const user ={
    userName :'Rudra',
    lastActivityTime: new Date().getTime()
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
              user.lastActivityTime = new Date().getTime();
             
              resolve(user.lastActivityTime);
        }, 1000);
    })
}
updateLastUserActivityTime().then(getPosts);
function deletePosts(){
    return new Promise((resolve , reject)=>{
          setTimeout(()=>{
            if(posts.length > 0){
                let pop = posts.pop();
                resolve(pop);
            }else{
                reject('Array is Empty now');
            }
          }, 1000);
    });
}
createNewPost({title:"Post new ",body:'This is new post'}).then(getPosts)
.then(()=>{
    getPosts();
    deletePosts().then(()=>{
        getPosts();
        deletePosts().then(()=>{
            getPosts();
                deletePosts().then(()=>{
                    getPosts();
                    deletePosts().then(()=>{})
                    .catch((err)=>{
                        console.log('Inside catch block ', err);
                    })
                })
        })
    })
})
.catch(err =>console.log(err));
// Promises.all
const promise1 = Promise.resolve("Hello world");
const promise2 =  10; 
const promise3 = new Promise((resolve , reject)=>
setTimeout(resolve, 2000 ,'GoodBye' )
);
Promise.all([promise1, promise2,promise3]).then(values => console.log(values));



function userUpdateThePost()
{
  
    Promise.all([createNewPost,  updateLastUserActivityTime])
    .then(([createNewPostresolves ,updateLastUserActivityTimeresolves])=>{
        console.log(updateLastUserActivityTimeresolves)
    })
    .catch(err => console.log(err));
}
let x = userUpdateThePost();
console.log(x);



console.log(user.lastActivityTime);
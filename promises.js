// const posts = [{ title: 'Post One', 
// body: 'This is post one' ,createdAt: new Date().getTime()
// },

// { title: 'Post Two',
//  body: 'This is post two',createdAt: new Date().getTime()
// }
// ];

// let intervalId ;
// function getPosts(){
// clearInterval(intervalId);
// /*  const timerId */
// intervalId =   setInterval(() =>{
//         let output ='';
//     for(let i=0 ; i<posts.length ;i++){
//         output+=`<li>${posts[i].title} - last Update ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago </li>`;
//      }
//     console.log('timer running Id = ' , intervalId);
//       document.body.innerHTML = output ;
    
// },1000);
// }
// // getPosts()


// function createPost(post){
//     setTimeout(()=>{
//         posts.push({ ...post, createdAt:new Date().getTime()});
        
//     }, 10000);
// }

// function create4thPost(post,callback ){
//     setTimeout(()=>{
//         posts.push({ ...post, createdAt:new Date().getTime()});
//         callback(); 
//     },6000);
// }
// getPosts();
// createPost(
//     {
//         title:'Post Three' , body: 'This is post'
//     } , getPosts
// )
// create4thPost({
//     title:'Post Four' , body:'This is post four' ,getPosts
// },getPosts
// );

// var timer ;
// var count =0  ;
// function LastInEditSecondAgo(){
//     count = 0 ;
//     clearInterval(timer)
//     timer = setInterval(()=>{
//         count++;
//         console.log(count)
//     }, 5000);
// }


// function createNewPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({ ...post, createdAt:new Date().getTime()});
//             const error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error: Something is went wrong');
//             }
//         }, 1000);
//     })
// }







// const user ={
//     userName :'Rudra',
//     lastActivityTime: new Date().getTime()
// }

// function updateLastUserActivityTime(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//               user.lastActivityTime = new Date().getTime();
             
//               resolve(user.lastActivityTime);
//         }, 1000);
//     })
// }
// updateLastUserActivityTime().then(getPosts);
// function deletePosts(){
//     return new Promise((resolve , reject)=>{
//           setTimeout(()=>{
//             if(posts.length > 0){
//                 let pop = posts.pop();
//                 resolve(pop);
//             }else{
//                 reject('Array is Empty now');
//             }
//           }, 1000);
//     });
// }
// createNewPost({title:"Post new ",body:'This is new post'}).then(getPosts)
// .then(()=>{
//     getPosts();
//     deletePosts().then(()=>{
//         getPosts();
//         deletePosts().then(()=>{
//             getPosts();
//                 deletePosts().then(()=>{
//                     getPosts();
//                     deletePosts().then(()=>{})
//                     .catch((err)=>{
//                         console.log('Inside catch block ', err);
//                     })
//                 })
//         })
//     })
// })
// .catch(err =>console.log(err));
// // Promises.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 =  10; 
// const promise3 = new Promise((resolve , reject)=>
// setTimeout(resolve, 2000 ,'GoodBye' )
// );
// Promise.all([promise1, promise2,promise3]).then(values => console.log(values));



// function userUpdateThePost()
// {
  
//     Promise.all([createNewPost,  updateLastUserActivityTime])
//     .then(([createNewPostresolves ,updateLastUserActivityTimeresolves])=>{
//         console.log(updateLastUserActivityTimeresolves)
//     })
//     .catch(err => console.log(err));
// }
// let x = userUpdateThePost();
// console.log(x);



// console.log(user.lastActivityTime);



// console.log('person1: shows ticket');
// console.log('person2: shows ticket');


// const promiseWifeBringingTickets = new Promise((resolve ,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });
// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log(`person3 : shows ${t}`);
//     console.log('wife : i have the tick');
//      console.log('husband: we should in');
//      console.log('wife : no i am hungry');
//      return new Promise((resolve , reject )=> resolve(`${t} popcorn`));
// });
// const getButter   = getPopcorn.then((t)=>{
//     console.log('husband : i got some popcorn');
//     console.log('husband: we should go in ');
//     console.log('wife : I need butter on my popcorn')
//     return new Promise((resolve , reject )=> resolve(`${t} butter`));
// })
// //getPopcorn.then(( t)=> console.log(t));
// getButter.then((t)=> console.log(t));

/*Async*/
// const preMovie = async () => 'preMovie';

// preMovie().then((m)=> console.log(m));


/* promises */ 
// function buycar(cb1,cb2,cb3,cb4){
//        setTimeout(()=>{
//         console.log('Buy a car');
//         cb1(cb2,cb3,cb4);
//         } ,1000);
// }

function buycar(){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve('buy a car');
        }, 1000)
    })
}


// function  plan_a_trip(cb1,cb2){
//     setTimeout(()=>{
//           console.log('lets go to manali');
//           cb1(cb2);
//     } ,2000)

// }

function plan_a_trip(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('lets go to manali');
        },2000);
    })
}

// function reach_manali(cb){
//     setTimeout(()=>{
//         console.log('reached manali');
//   cb();
//     },1000);
// }

function reach_manali(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('reached manali')
        }, 2000)
    })
}




    
// function got_of_famous_mountain(){
//     setTimeout(()=>{
//         console.log('reached mountain');
        
//     },1000);
// }
function got_of_famous_mountain(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('accident happened');
        },3000)
    })
}
async function func1(){
    try{
        const msg1= await buycar();
        console.log(msg1);
        
        const msg2 = await plan_a_trip();
        console.log(msg2)
        
        let msg3 = await reach_manali();
        console.log(msg3);
        
        let msg4 = await got_of_famous_mountain();
        console.log(msg4);
    }catch(err){
        console.log(err);
    }

}
func1();
    // plan_a_trip().then((msg)=>{
    //     console.log(msg);
    //      reach_manali().then((msg)=>{
    //         console.log(msg);
    //         got_of_famous_mountain().then((msg)=>{
    //             console.log(msg);
    //         })
    //      })
    // })

//buycar(plan_a_trip , reach_manali, got_of_famous_mountain)
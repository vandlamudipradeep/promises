// // console.log('person 1 : shows ticket');
// // console.log('person 2 : shows ticket');

// // let preMovie = async ()=>{
// //     let promiseWifeBringingTickets  = new Promise((resolve , reject)=>
// //     {
// //         setTimeout(()=> reject('ticket', 3000))
// //     });

// // // const getPopcorn = new Promise((resolve ,reject)=>
// // //  resolve(`popcorn`));

// //  //const addButter = new Promise((resolve ,reject)=> resolve(`butter`))
// //   //  let ticket = await promiseWifeBringingTickets ;
// //     // console.log('wife : i have the ticks');
// //     // console.log('husband : we should go in ');
// //     // console.log('wie: no i am hungry');

// //    // let popcorn = await getPopcorn ;
// // // console.log(`husband : i got some ${popcorn}`);
// // // console.log('husband: we should  go in ');
// // // console.log('wife : I heed butter  on my popcorn');

// // //let butter = await addButter;
// // // console.log(`husband: i got some ${butter} on popcorn`);
// // // console.log(`husband : anything else darling`);
// // // console.log(`wife: lets got we  are  getting late`);
// // // console.log(`husband : thank you for the reminder *grind*`);
// // //const getColdDrinks = new Promise((resolve ,reject)=> resolve(`coldDrinks`));
// // // let coldDrinks = await getColdDrinks;
// // // console.log(`wife : darling i am tristy lets grab some  cold drinks`);
// // // console.log('husband : OK lets get some cold drinks');
// // // console.log('wifi : pleses get me  coke for me');
// // // console.log(`husband : ok!`);

// // // let [popcorn , butter , coldDrinks] = await Promise.all([getPopcorn , addButter , getColdDrinks]) ;

// // // console.log(`${popcorn}, ${butter}, ${coldDrinks}`)



// // //try catch 
// // let ticket ;
// // try{
// //      ticket = await promiseWifiBringingTicks;
// // }catch (e){
// //     ticket = 'sad face';
// // }
// //     return ticket ; 
// // }
// // preMovie().then((m)=> console.log(`person 3 : shows ${m} `));


// // console.log('person 4 : shows ticket');
// // console.log('person 5: shows the ticket');


// // console.log(" ********  ");

// // function createNewPost(post){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             posts.push({ ...post, createdAt:new Date().getTime()});
// //             const error = false;
// //             if(!error){
// //                 resolve();
// //             }else{
// //                 reject('Error: Something is went wrong');
// //             }
// //         }, 1000);
// //     })
// // }

// const posts = [
// {title: 'post  one ', body:'This is post one'},
// ];

// function getPost (){
// setTimeout(()=>{
// posts.forEach((post, index )=>{
//     console.log(post.title);
// })
// },1000)
// }

// function createpost(post){
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=>{
//         posts.push(post);
// let error = false ;
// if(!error){
//     resolve()
// }else{
//    reject('Error : somting went wrong!');
// }
//      },2000);
//     })
// }
// async function create(){
//     await createpost({title:'Post one  is created',
//      body :'This is the post' });
// getPost(); 
// }
// create();


const posts= [
    { title: `Post one`, body:`This is the post One`},
    { title: `Post Two`, body: `This is the  post Two` }
]

function getPosts(){
setTimeout(() => {
    posts.forEach((post, index) => {
        console.log(post.title)
    })
}, 1000);
}

function createPosts(post){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.push(post);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function init(){
await createPosts({ title: `New post`, body:`This is the new post`});

getPosts(); 
}

init();

 function del(){
    const deletePost  = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(posts.length >  0){
                let delete1 = posts.pop();
            resolve(delete1);
            }else{
                reject("Array is Empty");
            }
        }, 1000);
    })
}
async function display(){
await del();
await del();
await del();


}
display();
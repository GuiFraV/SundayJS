// const vote = ['y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n']
// const res = vote.reduce((acc, curr) => {

//     if(acc[curr]){
//         acc[curr]++
//     }else{
//         acc[curr] = 1
//     }

//     return acc;


// }, {})

// console.log(res)

// 2, 3, 5, 7, 11, 13, 17, 19
// const isPrime = (nbr) => {

//     if(nbr <= 1){
//         return false;
//     }

//     if(nbr <= 3){
//         return true;
//     }

//     if(nbr % 2 === 0 || nbr % 3 === 0 ){
//         return false;
//     }

//     let i = 5;
//     while(i * i <= nbr){

//         if(nbr % i === 0 || nbr % (i + 2) === 0){
//             return false;
//         }
//         i += 6

//     }

//     return true;


// }

// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(5))
// console.log(isPrime(6))
// console.log(isPrime(7))
// console.log(isPrime(8))
// console.log(isPrime(11))

// const num = [ 87, 64, 96, 92, 88, 99, 73]
// const x = num.reduce((acc, curr) => {
    
//     return (curr > acc) ? curr : acc;

// })

// console.log(x)


// function SkillList() {
//     return (
//       <div className="skill-list">
//             {skills.map((skill) => {
//                 <Skill name={skill.skill} level={skill.level} />
//             })}
//       </div>
//     );
//   }

// fetch(url)
//     .then((data) => data.json())
//     .then((res) => console.log(res))

// async function Api(){

//     const url = await fetch(url)
//     const data = await url.json();
    
//     console.log(data)


// }

// booksAferDelete.map((book) => {

//     return (book.id === 1) ? {...book, pages:1210} : book


// })

// booksAfterDelete.filter((b) => {
//     return (b.id !== 3) ?? b
// })
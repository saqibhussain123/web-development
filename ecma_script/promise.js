// class 35

// JSON javascript object notation

// api application programing interface (data array of object form)or (object of object)

// call back function (function inside function inside parameter)

let pro =new Promise((res,rej)=>{
     
let khilao='zinger khalio'
if(khilao=='zinger khalio'){
res('ha bhai thk ha')

}else{
    rej('nikal bhai')
}

})
pro.then((data)=>{
    console.log(data)
})

pro.catch((err)=>{
    console,log(err)
})

// Destructring (array or object)


// array
// let arr=['ali','rehman',1,2,3,4,5,6]
// let [a,b,c,d,e,f,g,h]=arr
// console.log(f)

// object

const obj ={
    abc:'abcd',
    def:'23',
    ghi:'hello word',
    arr:[1,2,3,4,5]
}
//const {a,b,c}=obj
const {abc,def,ghi,arr}=obj
const[a,b,c]=arr



console.log(a);



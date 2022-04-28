const btn=document.querySelector("button")
a=async(url)=>{
let dt= await fetch(url);
let d= await dt.json();
return d
}
let url="https://api.chucknorris.io/jokes/categories"
let rnd="https://api.chucknorris.io/jokes/random"
a(url).then((d)=>{
let arr=d
for(let i=0;i<arr.length;i++){
let slt=document.querySelector("select");
let opt=document.createElement("option");
opt.text=arr[i];
opt.value=arr[i]
slt.appendChild(opt);

}
console.log(d)
})
sel=()=>{
let slt=document.querySelector("select");
slt.addEventListener('change',(e)=>{
    console.log(e.target.value)
   let category=e.target.value
   let ctgjk=`https://api.chucknorris.io/jokes/random?category=${category}`
   btn.addEventListener('click',()=>{
   a(ctgjk).then((res)=>{console.log(res.value)
   let txt=document.querySelector("#txt1")
   txt.innerText=res.value}) })
   
})}

sel()



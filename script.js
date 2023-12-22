let inp = document.getElementById('inp')
let but = document.getElementById('but')
let b = document.getElementById('b')
let h2 = document.querySelector('h2')
but.addEventListener('click',()=>{
        let div = document.createElement('div')
        div.innerHTML=`
        <h2>${inp.value}</h2>
   
        `
        h2.append(div)

})
b.addEventListener('click',()=>{
    h2.innerHTML = ""
})
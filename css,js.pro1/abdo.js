let btn = document.getElementById('btn');
let boxs = document.querySelectorAll('.box');
let inp = document.getElementById('inp')
let drag = null
btn.onclick = function(){
    if(inp.value != ''){
        boxs[0].innerHTML += `
        <p class="item" draggable ="true">${inp.value}</p>`
        inp.value = ''
    }
    dragitem()
}
function dragitem(){
    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
item.addEventListener('dragstart',function(){
 drag = item;
 this.style.opacity = '.5'
})
item.addEventListener('dragend',function(){
this.style.opacity = '1'.
drag = null;
})
boxs.forEach(box=>{
box.addEventListener('dragover', function(r){
    this.style.background ='#d23'
    this.style.color ='#fff'
    r.preventDefault()
})
box.addEventListener('dragleave', function(){
    this.style.background ='#fff'
    this.style.color ='#111'

})
box.addEventListener('drop', function(){
    this.append(drag);
    

})

})

    })
}
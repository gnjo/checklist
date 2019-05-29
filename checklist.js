/*history
 v1.0 create
*/
;(function(root){
 function click(caller){return function(e){
   let el=e.target
   ,str=el.textContent
   ,re=/\[(.+)\]|\[\]/
   ;
   el.dataset.checked=(el.dataset.checked)?'':'true'
   el.textContent =(el.dataset.checked)?str.replace(re,'[*]'):str.replace(re,'[ ]')
   let savedata=el.parentElement.textContent
   ;
   if(caller)caller(el,savedata)  
 }}
 function entry(text,caller){
  let el=document.createElement('div')
  ,re=/\[(.+)\]|\[\]/
  ,re_checked=/\[\*\]/ 
  el.classList.add('checklist');
  el.innerHTML=text.split('\n').map(d=>{
   if(!re.test(d)) return d;
   return re_checked.test(d)?`<span data-checked="true">${d}</span>` :`<span data-checked="">${d}</span>` 
  }).join('\n')
  ;
  Array.from(el.querySelectorAll('span')).map(d=>{d.onclick=click(caller)})
  return el
 }
 ;
 root.checklist=entry
 ;
 /*usage
let data=`
# xyz
[*] option1
[ ] option2
[ ] option3
[ ] option4
`
let caller=(el,savedata)=>{
 //el.dataset.checked
 //el.textContent
 console.log(savedata)
}
let el=checklist(data,caller)
document.body.appendChild(el) 
 */ 
})(this);

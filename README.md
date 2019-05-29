# checklist
text to checklist element

# usage
```pug
//pug
 script(src="https://gnjo.github.io/checklist/checklist.js")
 link(href="https://gnjo.github.io/checklist/checklist.css" rel="stylesheet")
```
```js
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
```

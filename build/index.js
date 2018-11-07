"use strict";var noteDiv=document.querySelector("#note"),content=localStorage.getItem("note");content&&(noteDiv.innerHTML=content);var quill=new Quill(noteDiv,{modules:{toolbar:{container:"#toolbar-container"},history:{maxStack:1e3}},theme:"snow",placeholder:"Maybe I'll have a todo list here?"});function save(){localStorage.setItem("note",quill.container.innerHTML),localStorage.setItem("noteTime",(new Date).toString())}quill.on("text-change",save);var svg=document.querySelector(".settings svg"),dialog=document.querySelector(".settings-dialog");svg.addEventListener("click",function(){dialog.classList.add("visible")}),document.addEventListener("click",function(e){if(e.target.classList.contains("dialog-container")){var t=e.target;t.classList.remove("visible"),setTimeout(function(){t.classList.remove("displayed")},1e3)}});
//# sourceMappingURL=index.js.map

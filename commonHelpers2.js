import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const e={email:"",message:""},t=document.querySelector(".feedback-form"),m="feedback-form-state",a=JSON.parse(localStorage.getItem(m));a&&(t.elements.email.value=a.email||"",t.elements.message.value=a.message||"",e.email=a.email||"",e.message=a.message||"");t.addEventListener("input",s=>{e[s.target.name]=s.target.value.trim(),localStorage.setItem(m,JSON.stringify(e))});t.addEventListener("submit",s=>{if(s.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}else localStorage.removeItem(m);t.reset(),e.email="",e.message=""});
//# sourceMappingURL=commonHelpers2.js.map
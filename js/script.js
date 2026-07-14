const words=['Corporate Governance Professional','Human Capital Specialist','Digital Transformation','Excel VBA Developer','Web Developer'];
let wi=0,ci=0,del=false;const el=document.getElementById('typing');
setInterval(()=>{let w=words[wi];
if(!del){el.textContent=w.slice(0,++ci);if(ci===w.length)setTimeout(()=>del=true,500);}
else{el.textContent=w.slice(0,--ci);if(ci===0){del=false;wi=(wi+1)%words.length;}}
},90);
const arr=['Corporate Governance Professional','Human Capital Specialist','Digital Transformation','Excel VBA Developer'];
let i=0,c=0,d=false,e=document.getElementById('typing');
setInterval(()=>{let w=arr[i];if(!d){e.textContent=w.slice(0,++c);if(c==w.length)d=true;}else{e.textContent=w.slice(0,--c);if(c==0){d=false;i=(i+1)%arr.length}}},100);

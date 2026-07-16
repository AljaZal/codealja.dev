const lines=[
'codealja@ai:~$ boot',
'Loading AI Core...',
'AI Employees .... OK',
'Automation ...... OK',
'Knowledge AI .... OK',
'Ready.'
];
let i=0,out='';const el=document.getElementById('terminal');
function next(){if(i<lines.length){out+=lines[i++]+'\n';el.textContent=out;setTimeout(next,500)}}
next();
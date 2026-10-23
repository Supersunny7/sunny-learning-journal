Object.assign(window.journalContent,{
phoenix:[['Busy does not always mean progress.','Doing more things at once does not always help. Sometimes, I need to stop and ask, “What is slowing us down?”'],['People should feel safe to speak up.','One question stayed with me: “Can we disagree with the CEO?” A good leader should listen, even when the answer is something they do not want to hear.'],['I saw this in my own project.','I changed my video plan many times. Some clips looked good alone, but did not fit together. I learned to check how everything works together before making more.']],
disc:[['I learned more about myself.','My DISC result is S. It helped me think about being calm, patient, and helpful. It is a useful guide, but it does not define who I am.'],['Listening matters.','I do not have to be the loudest person to help a team. Listening and giving others time to share can also make a difference.'],['I can be kind and still speak up.','Helping others does not mean saying yes to everything. I want to share my concerns earlier, explain my thoughts, and help find a solution.']],
germany:[['A boss can lead and still listen.','In my research on Germany, I learned that clear roles and team input can go together. The boss may approve the plan, but the team’s ideas still matter.'],['Not every decision needs a quick yes.','People may need time to check the details. Instead of pushing for an answer, I can ask, “What do we still need to check?”'],['Small things matter in meetings.','Be on time. Know what the meeting is about. Bring the information people need. If something is late, tell the team early.'],['Ask instead of assuming.','The Culture Map helps me understand possible differences. But people from the same country are not all the same. I still need to get to know the people I work with.']],
next:[['Work with tech and data.','I want to become a tech guy in the data industry. I want to build useful things, understand problems, and help people make better decisions.'],['Stay curious.','I want to keep asking questions and trying new things. When something does not work, I want to find out why.'],['Stay humble.','I will not know everything, and that is okay. I want to ask for help, listen to feedback, and be willing to change my mind.'],['Keep learning from others.','I can learn from classmates, teammates, and people with different backgrounds. Everyone knows something I do not.'],['Start small and keep improving.','For my next data project, I will start with one clear question, build a small version, and ask for feedback. I want to get better at both the technical work and working with people.']]});
window.journalContent.phoenix=[
 ['Find what is slowing the team down.','Too much work depends on Brent. Asking him to do even more does not fix the problem. The team needs to protect his time and help others learn what he knows.'],
 ['Finish work before starting more.','Urgent requests keep interrupting planned work. Making the work visible and limiting new tasks helps the team focus and finish what matters.'],
 ['IT and the business need the same goal.','The Phoenix project shows that IT problems can affect the whole company. Development, operations, and business leaders need to work together instead of blaming each other.'],
 ['Find problems early and keep learning.','Small changes and fast feedback help teams catch problems sooner. The team improves by learning from mistakes and making its daily work better.'],
 ['Make it safe to speak up.','Bill asks whether the team is allowed to say no. His conversation with Steve shows why leaders need to listen when people raise concerns about priorities and deadlines.']
];
copy[0]=['Welcome to my Journey','Learning, one<br>step at a time.','A few lessons.<br>A new way forward.'];
copy[4]=['My future','Stay curious.<br>Stay humble.','My next chapter in tech and data.'];
document.title='Sunny’s Journal';$('#home').textContent='Sunny’s Journal';
function article(key){const a=document.createElement('article');for(const [title,text] of content[key]){const section=document.createElement('section'),h=document.createElement('h3'),p=document.createElement('p');h.textContent=title;p.textContent=text;section.append(h,p);a.append(section)}return a}
const priorOpenNotes=openNotes;
openNotes=function(i){
 if(!['hero','reading'].includes(state))return;
 priorOpenNotes(i);
 const b=$('#note-body'),source=i===3?b.querySelector('details'):null;
 b.replaceChildren();b.className='journal-scroll';b.tabIndex=0;b.setAttribute('aria-label','Scroll through my notes');
 $('#notes-title').textContent=['My Journal','The Phoenix Project','DISC — My S Style','The Culture Map — Germany','My Future'][i];
 $('#notes-kicker').textContent='Notes from my journey';
 if(i===0){for(let j=1;j<=4;j++){const d=document.createElement('details'),s=document.createElement('summary');s.textContent=copy[j][0];d.append(s,article(keys[j]));b.append(d)}}
 else {
  const intro=document.createElement('p');intro.className='note-intro';intro.textContent=['','Look at the whole process.','A quiet voice can still make a difference.','Get to know the people, not just the country.','Stay curious. Stay humble. Keep learning.'][i];b.append(intro);
  if(i===3){const d=document.createElement('details');d.className='map-fold';d.innerHTML='<summary>Find Germany on the map</summary><div id="map-slot">Loading the map…</div><p class="note">The video shows a globe. This map marks Germany.</p>';b.append(d);drawMap()}
  b.append(article(keys[i]));
  if(source){for(const p of source.querySelectorAll('p')){if(p.textContent.includes('Classmates'))p.remove()}b.append(source)}
 }
 b.scrollTop=0;
};
showGermany=function(){const a=$('#note-body article');if(a)a.scrollIntoView({block:'start',behavior:mq.matches?'instant':'smooth'})};
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
ui();
// Sequential navigation shares the same state guard as the object targets.
const nextButton=document.createElement('button');nextButton.id='next-chapter';nextButton.textContent='Next →';nextButton.setAttribute('aria-label','Next chapter');document.querySelector('footer').append(nextButton);nextButton.onclick=()=>go(active+1,false,true);
const journalUI=ui;ui=function(){journalUI();nextButton.hidden=active===4;nextButton.disabled=!['hero','reading'].includes(state)};ui();


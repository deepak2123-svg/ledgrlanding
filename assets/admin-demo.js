(() => {
  const root = document.querySelector("[data-admin-demo]");
  if (!root) return;

  const institutes = [
    { id:"north", name:"North Hub, Haryana", teachers:33, logged:24, classes:[
      {id:"a1",name:"A1 Alpha",group:"11th-12th",teachers:6,updated:5,tone:"blue"},
      {id:"a4",name:"A4 Virat",group:"11th-12th",teachers:6,updated:4,tone:"blue"},
      {id:"b2",name:"B2 Beta",group:"11th-12th",teachers:6,updated:3,tone:"blue"},
      {id:"c3",name:"C3 Gamma",group:"11th-12th",teachers:5,updated:4,tone:"blue"},
      {id:"nda",name:"NDA 11",group:"Competitive",teachers:7,updated:5,tone:"green"},
      {id:"neet",name:"NEET 12",group:"Competitive",teachers:7,updated:6,tone:"green"},
      {id:"jee",name:"JEE 11",group:"Competitive",teachers:7,updated:3,tone:"green"},
      {id:"board",name:"Board 10",group:"Competitive",teachers:7,updated:7,tone:"green"},
    ]},
    { id:"central", name:"Central Academy, Karnal", teachers:28, logged:19, classes:[
      {id:"ca11",name:"CA 11 Science",group:"Senior school",teachers:7,updated:6,tone:"blue"},
      {id:"ca12",name:"CA 12 Science",group:"Senior school",teachers:7,updated:5,tone:"blue"},
      {id:"foundation",name:"Foundation 10",group:"Foundation",teachers:6,updated:4,tone:"green"},
    ]},
    { id:"competition", name:"Competition Wing", teachers:18, logged:10, classes:[
      {id:"nda2",name:"NDA Target",group:"Defence",teachers:6,updated:4,tone:"green"},
      {id:"ssc",name:"SSC CGL",group:"Government exams",teachers:5,updated:3,tone:"orange"},
      {id:"bank",name:"Bank PO",group:"Government exams",teachers:5,updated:3,tone:"orange"},
    ]},
    { id:"east", name:"East Study Centre", teachers:15, logged:12, classes:[
      {id:"e11",name:"East 11",group:"School",teachers:5,updated:4,tone:"blue"},
      {id:"e12",name:"East 12",group:"School",teachers:5,updated:5,tone:"blue"},
    ]},
    { id:"blue", name:"Blue Road Campus", teachers:12, logged:6, classes:[
      {id:"br1",name:"Blue Alpha",group:"Main batches",teachers:4,updated:3,tone:"blue"},
      {id:"br2",name:"Blue Beta",group:"Main batches",teachers:4,updated:2,tone:"blue"},
    ]},
    { id:"south", name:"South Annex", teachers:5, logged:2, classes:[
      {id:"sa1",name:"South Combined",group:"Combined",teachers:5,updated:2,tone:"orange"},
    ]},
  ];
  const teachers = ["A. Mehta","N. Singh","R. Verma","K. Rao","P. Sharma","M. Gill","S. Yadav"];
  const lessons = [
    ["Chemical equilibrium and Le Chatelier’s principle","Chemistry","Numerical practice"],
    ["Newton’s laws: free-body diagrams","Physics","Concept application"],
    ["Limits and continuity","Mathematics","Worked examples"],
    ["Cell cycle and mitosis","Biology","Diagram revision"],
    ["Reading comprehension: inference questions","English","Guided practice"],
    ["Indian Constitution: fundamental rights","Political Science","Discussion"],
    ["Modern history: national movement","History","Timeline review"],
    ["Current affairs: science and technology","General Studies","Weekly recap"],
    ["Organic chemistry reaction mechanisms","Chemistry","Board questions"],
    ["Electrostatics and electric field","Physics","Problem solving"],
    ["Probability distributions","Mathematics","Question drill"],
    ["Human physiology: circulation","Biology","NCERT review"],
    ["Trigonometric identities","Mathematics","Worksheet"],
    ["Grammar: clauses and sentence correction","English","Error spotting"],
    ["Indian geography: monsoon system","Geography","Map work"],
    ["Economy: inflation and monetary policy","Economics","Current examples"],
  ];
  const state = { institute:"north", item:"a4", mode:"Class", period:"This Week", sort:"Recent", instituteQuery:"", itemQuery:"", rail:4, report:false, format:"PDF" };
  const esc = value => String(value??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const currentInstitute = () => institutes.find(item=>item.id===state.institute)||institutes[0];
  const visibleInstitutes = () => institutes.filter(item=>item.name.toLowerCase().includes(state.instituteQuery.toLowerCase()));
  const periodDays = {Today:0,Yesterday:1,"This Week":7,"This Month":31}[state.period];
  const activeName = () => state.mode==="Teacher" ? state.item : (currentInstitute().classes.find(item=>item.id===state.item)?.name||currentInstitute().classes[0]?.name||"All classes");
  const hash = value => [...String(value||"")].reduce((sum,character)=>sum+character.charCodeAt(0),0);
  const classEntries = () => {
    const selectionKey = `${state.institute}:${state.mode === "Teacher" ? "teacher-view" : state.item}`;
    const lessonOffset = hash(selectionKey) % lessons.length;
    const teacherOffset = hash(state.item || state.institute) % teachers.length;
    return Array.from({length:7},(_,index)=>{
      const lesson=lessons[(lessonOffset+index*3)%lessons.length];
      const teacher=state.mode === "Teacher" ? state.item : teachers[(teacherOffset+index*2)%teachers.length];
      return {topic:lesson[0],subject:lesson[1],teacher,detail:lesson[2],status:index%3===1?"In Progress":"Completed",age:[0,0,2,2,3,8,14][index],day:index<2?"Monday, July 13":index<4?"Saturday, July 11":index<5?"Friday, July 10":"Earlier this month",start:index%2?"9:00":"10:45",end:index%2?"10:30":"12:00",duration:index%2?"1h 30m":"1h 15m"};
    });
  };
  const entries = () => classEntries().filter((entry,index)=>state.period==="Today"?index<2:state.period==="Yesterday"?index>=2&&index<4:entry.age<=periodDays);
  const groupedEntries = () => entries().reduce((map,entry)=>{(map[entry.day]??=[]).push(entry);return map;},{});
  const percent = institute => Math.round(institute.logged/institute.teachers*100);

  function instituteRows(){return visibleInstitutes().map(institute=>`<button class="inst-row ${institute.id===state.institute?"active":""}" data-institute="${institute.id}"><span class="inst-dot" style="background:${percent(institute)>=70?"#10a37f":percent(institute)>=40?"#f59e0b":"#f43f46"}"></span><span>${esc(institute.name)}<small>${institute.classes.length} classes · ${institute.teachers} teachers</small></span><span class="inst-count">${institute.logged}/${institute.teachers}</span><span class="inst-percent">${percent(institute)}%</span></button>`).join("")||'<div class="demo-empty">No institute matches that search.</div>'}
  function itemCards(){const institute=currentInstitute();let items=state.mode==="Teacher"?teachers.map((name,index)=>({id:name,name,teachers:1,updated:index%2,group:"Teaching team",tone:index%3===0?"green":"blue"})):institute.classes;if(state.itemQuery)items=items.filter(item=>item.name.toLowerCase().includes(state.itemQuery.toLowerCase()));if(state.sort==="A–Z")items=[...items].sort((a,b)=>a.name.localeCompare(b.name));else items=[...items].sort((a,b)=>(b.updated||0)-(a.updated||0));return items.map(item=>`<button class="class-chip ${item.id===state.item||item.name===state.item?"selected":""} ${item.tone||""}" data-item="${esc(item.id)}">${esc(item.name)} <span>${item.updated}/${item.teachers}</span></button>`).join("")||'<div class="demo-empty" style="grid-column:1/-1">No matching result.</div>'}
  function timeline(){const groups=groupedEntries();const className=activeName();return Object.entries(groups).map(([day,rows])=>`<article class="day-card"><div class="day-head"><span>${day}</span><span>${rows.length} entr${rows.length===1?"y":"ies"} · ${rows.length===1?rows[0].duration:"2h 45m"}</span></div>${rows.map(entry=>`<div class="entry"><div class="time">${entry.start} - <span>${entry.end}</span><span class="duration">${entry.duration}</span></div><div><div class="entry-title"><span class="flag">Note</span><span class="status ${entry.status==="Completed"?"done":""}">● ${entry.status}</span> ${esc(entry.topic)}</div><div class="meta-line"><span>${entry.subject}</span><span class="class-badge">${esc(className)}</span>${entry.detail?`<span>${entry.detail}</span>`:""}</div></div><div class="teacher">${entry.teacher}</div></div>`).join("")}</article>`).join("")||'<div class="demo-empty">No entries for this selection and period.</div>'}
  function reportModal(){return state.report?`<div class="demo-report-modal" data-close-report><div class="demo-report-dialog" role="dialog" aria-modal="true" aria-labelledby="fake-report-title"><h3 id="fake-report-title">Prepare Ledgr Report</h3><p>Preview a fictional report for ${esc(currentInstitute().name)}. Nothing will be downloaded or sent.</p><div class="demo-report-options">${["PDF","Summary","Teacher status"].map(format=>`<button data-format="${format}" class="${state.format===format?"active":""}">${format}</button>`).join("")}</div><div class="demo-dialog-actions"><button data-cancel-report>Cancel</button><button class="primary" data-prepare-report>Prepare ${state.format}</button></div></div></div>`:""}
  function render(){const institute=currentInstitute();const crumbs=activeName();root.innerHTML=`<div class="mock-top"><div class="crumbs"><span class="mock-rail-logo">L</span><span>Overview</span><span>/</span><span>${esc(institute.name)}</span><span>/</span><strong>${esc(crumbs)}</strong></div><button class="report-button" data-report>Ledgr Report</button></div><div class="mock-body"><aside class="icon-rail" aria-label="Demo admin tools">${[["⌘","Overview"],["▦","Teachers"],["▤","Syllabus"],["⌂","Institutes"],["▣","Tracking"],["↗","Messenger"]].map((tool,index)=>`<button class="rail-icon ${index===state.rail?"active":""}" data-rail="${index}" title="${tool[1]}" aria-label="${tool[1]}">${tool[0]}</button>`).join("")}</aside><section class="institutes"><div class="panel-head"><span>${institutes.length} institutes · today</span><span class="danger-count">${institutes.reduce((sum,item)=>sum+item.logged,0)}/${institutes.reduce((sum,item)=>sum+item.teachers,0)}</span></div><input class="mock-search" data-institute-search aria-label="Search institutes" placeholder="Search institutes" value="${esc(state.instituteQuery)}"><div class="update-pill">Live update health</div><div class="institute-list">${instituteRows()}</div></section><section class="class-panel"><div class="institute-title"><span>Institute</span><h2>${esc(institute.name)}</h2></div><div class="tabs">${["Class","Teacher","Class+teacher"].map(mode=>`<button class="tab ${state.mode===mode?"active":""}" data-mode="${mode}">${mode}</button>`).join("")}</div><input class="mock-search" data-item-search aria-label="Search class or teacher" placeholder="Search class or teacher" value="${esc(state.itemQuery)}"><div class="sort-row"><span>Sort</span><button class="sort-chip" data-sort>${state.sort}</button></div><div class="batch-card"><div class="batch-title">${state.mode==="Teacher"?"Teaching team":state.mode==="Class+teacher"?"Classes with assigned teachers":"Active classes"}</div><div class="class-grid">${itemCards()}</div></div><div class="program-row">NEET - 11th - Sankalp</div><div class="program-row orange">JEE and NEET Dropper Batches</div></section><section class="timeline-panel"><div class="timeline-title"><h2>${esc(crumbs)}</h2><div class="range-pills">${["Today","Yesterday","This Week","This Month"].map(period=>`<button class="range-pill ${state.period===period?"active":""}" data-period="${period}">${period}</button>`).join("")}</div></div><div class="timeline-card">${timeline()}</div></section></div>${reportModal()}`;}
  let toastTimer;
  function toast(message){root.querySelector(".demo-toast")?.remove();const node=document.createElement("div");node.className="demo-toast";node.textContent=message;root.append(node);clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.remove(),2200);}
  root.addEventListener("click",event=>{const instituteButton=event.target.closest("[data-institute]");if(instituteButton){state.institute=instituteButton.dataset.institute;state.item=currentInstitute().classes[0]?.id||"";render();return;}const item=event.target.closest("[data-item]");if(item){state.item=item.dataset.item;render();return;}const mode=event.target.closest("[data-mode]");if(mode){state.mode=mode.dataset.mode;state.item=state.mode==="Teacher"?teachers[0]:currentInstitute().classes[0]?.id||"";render();return;}const period=event.target.closest("[data-period]");if(period){state.period=period.dataset.period;render();return;}if(event.target.closest("[data-sort]")){state.sort=state.sort==="Recent"?"A–Z":"Recent";render();return;}const rail=event.target.closest("[data-rail]");if(rail){state.rail=Number(rail.dataset.rail);render();toast(`${rail.getAttribute("aria-label")} selected — demo data only.`);return;}if(event.target.closest("[data-report]")){state.report=true;render();return;}const format=event.target.closest("[data-format]");if(format){state.format=format.dataset.format;render();return;}if(event.target.closest("[data-cancel-report]")||event.target.matches("[data-close-report]")){state.report=false;render();return;}if(event.target.closest("[data-prepare-report]")){state.report=false;render();toast(`${state.format} preview prepared with fictional data.`);}});
  root.addEventListener("input",event=>{if(event.target.matches("[data-institute-search]")){state.instituteQuery=event.target.value;const list=root.querySelector(".institute-list");if(list)list.innerHTML=instituteRows();}if(event.target.matches("[data-item-search]")){state.itemQuery=event.target.value;const grid=root.querySelector(".class-grid");if(grid)grid.innerHTML=itemCards();}});
  root.addEventListener("keydown",event=>{if(event.key==="Escape"&&state.report){state.report=false;render();}});
  render();
})();

(() => {
  const root = document.querySelector("[data-admin-demo]");
  if (!root) return;

  const institutes = [
    { id: "north", name: "Northstar Academy, Karnal", teachers: 34, logged: 2 },
    { id: "merit", name: "Merit Competition Wing", teachers: 18, logged: 0 },
    { id: "horizon", name: "Horizon School Campus", teachers: 18, logged: 2 },
    { id: "summit", name: "Summit Learning, Kurukshetra", teachers: 16, logged: 0 },
    { id: "scholars", name: "Scholars Point, Panipat", teachers: 13, logged: 0 },
    { id: "bright", name: "Bright Future, Shamli", teachers: 10, logged: 0 },
    { id: "axis", name: "Axis Classes, Karnal", teachers: 5, logged: 0 },
    { id: "pioneer", name: "Pioneer Academy, Moradabad", teachers: 4, logged: 0 },
    { id: "gurukul", name: "New Gurukul, Ambala", teachers: 3, logged: 0 },
    { id: "kaithal", name: "Kaithal Study Circle", teachers: 2, logged: 0 },
    { id: "junior", name: "Junior Wing, Karnal", teachers: 1, logged: 0 },
  ];

  const classes = [
    { id: "virat", name: "JEE-11th-VIRAT", tone: "blue" },
    { id: "sankalp", name: "NEET - 11th - SANKALP", tone: "green" },
    { id: "dropper", name: "JEE and NEET Dropper Batches", tone: "orange" },
    { id: "madhav", name: "JEE- 12th - Madhav", tone: "purple" },
    { id: "keshav", name: "NEET - 12th - KESHAV", tone: "cyan" },
    { id: "foundation", name: "Foundation Batches", tone: "blue" },
  ];

  const teacherProfiles = [
    { id: "aarav", name: "Aarav Mehta", subject: "Chemistry", institute: "north", classes: ["virat", "dropper"], logged: 3 },
    { id: "naina", name: "Naina Singh", subject: "English", institute: "north", classes: ["virat", "foundation"], logged: 2 },
    { id: "rohan", name: "Rohan Verma", subject: "Social Science", institute: "north", classes: ["foundation", "virat"], logged: 4 },
    { id: "kavya", name: "Kavya Rao", subject: "Maths", institute: "merit", classes: ["virat", "madhav"], logged: 1 },
    { id: "piyush", name: "Piyush Gupta", subject: "MAT", institute: "horizon", classes: ["foundation", "madhav"], logged: 3 },
    { id: "jaya", name: "Jaya Sharma", subject: "Chemistry", institute: "horizon", classes: ["sankalp", "dropper"], logged: 2 },
    { id: "anuradha", name: "Anuradha Gupta", subject: "English", institute: "summit", classes: ["foundation", "keshav"], logged: 2 },
    { id: "usha", name: "Usha Adhikari", subject: "Social Science", institute: "scholars", classes: ["foundation", "dropper"], logged: 1 },
    { id: "girish", name: "Girish Bansal", subject: "Maths", institute: "bright", classes: ["virat", "madhav"], logged: 3 },
  ];

  const teachers = teacherProfiles.map((teacher) => teacher.name);
  const lessons = [
    ["Triangles", "Maths, MAT", "Properties of triangles", "Completed", "7th A"],
    ["Paper discussed", "Chemistry", "Practice paper review", "Doubts", "8th A"],
    ["Tenses", "English", "Simple present tense", "Completed", "6th A"],
    ["Syllogism", "MAT", "Statement and conclusion", "Started", "Aarambh-1"],
    ["The rise of an empire", "Social Science", "Explained early kingdoms and administration", "In Progress", "7th A"],
    ["Applications of Differentiation", "Maths", "Angle of intersection", "Completed", "Madhav-7"],
    ["Chemical equilibrium", "Chemistry", "Le Chatelier’s principle", "Completed", "Virat-2"],
    ["Cell cycle and mitosis", "Biology", "Diagram-based revision", "In Progress", "Sankalp-4"],
  ];

  const phoneMedia = window.matchMedia("(max-width: 599.98px)");
  const state = {
    institute: "north",
    mode: "Class",
    item: "virat",
    period: "This Month",
    sort: "Recent",
    instituteQuery: "",
    itemQuery: "",
    report: false,
    format: "PDF",
    mobileSurface: "home",
    mobilePane: "institutes",
    mobileTeacher: "aarav",
    mobileTeacherView: "list",
    mobileTool: "",
    teacherQuery: "",
    timelineScope: "class",
    reportPastOpen: false,
    reportScheduleOpen: false,
    reportScheduleEnabled: false,
    toast: "",
  };

  const esc = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[char]);

  const icon = (name) => ({
    overview: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7" cy="7" r="2"/><circle cx="17" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><path d="M8.7 8.2l2.2 6.6m4.4-6.6l-2.2 6.6M9 7h6"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21V4h14v17M3 21h18M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2"/></svg>',
    books: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h5v14H4zM10 4h5v15h-5zM16 6l4-1 2 13-4 1z"/></svg>',
    school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10l9-5 9 5-9 5zM7 12v5c3 2 7 2 10 0v-5"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19 12l2-1-2-4-2 1-2-2V4h-6v2L7 8 5 7l-2 4 2 1v2l-2 1 2 4 2-1 2 2v2h6v-2l2-2 2 1 2-4-2-1z"/></svg>',
    report: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h6m-6 4h6"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11l18-8-7 18-3-7zM11 14l10-11"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6"/><path d="M16 16l4 4"/></svg>',
    class: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-5 9 5-9 5zM7 12v5c3 2 7 2 10 0v-5"/></svg>',
    teacher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="7" r="3"/><path d="M6 21v-2a6 6 0 0112 0v2"/></svg>',
    group: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="2.5"/><circle cx="17" cy="9" r="2"/><path d="M3 20v-2a5 5 0 0110 0v2m2-6a4 4 0 014 4v2"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/></svg>',
    tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.5 6.5l3-3 3 3-3 3M13 8l-9 9v3h3l9-9M4 4l4 4m8 8l4 4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 20h14"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4m8-4v4M4 10h16"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7v5h-5M4 17v-5h5M6.5 8a7 7 0 0111-1l2.5 5M17.5 16a7 7 0 01-11 1L4 12"/></svg>',
    message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v12H9l-5 4z"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 7h14M9 7V4h6v3m-8 0l1 13h8l1-13M10 11v5m4-5v5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  })[name] || "";

  const currentInstitute = () => institutes.find((item) => item.id === state.institute) || institutes[0];
  const currentClass = () => classes.find((item) => item.id === state.item) || classes[0];
  const currentTeacher = () => teacherProfiles.find((item) => item.id === state.mobileTeacher) || teacherProfiles[0];
  const currentItem = () => state.mode === "Teacher" ? state.item : currentClass().name;
  const className = (id) => classes.find((item) => item.id === id)?.name || id;
  const instituteName = (id) => institutes.find((item) => item.id === id)?.name || institutes[0].name;
  const subjectMatchesLesson = (subject, lesson) => String(lesson[1]).split(",").map((part) => part.trim()).includes(subject);

  function fakeRows(forMobile = false) {
    if (!forMobile) {
      const seed = [...`${state.institute}:${state.item}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const count = { Today: 3, Yesterday: 4, "This Week": 6, "This Month": 8, Range: 5 }[state.period] || 8;
      return Array.from({ length: count }, (_, index) => {
        const lesson = lessons[(seed + index) % lessons.length];
        return {
          start: ["6:00", "5:40", "5:40", "5:40", "5:20", "5:10", "4:45", "4:10"][index],
          end: ["6:45", "6:40", "6:40", "6:25", "6:00", "6:30", "5:30", "5:10"][index],
          duration: ["45m", "1h", "1h", "45m", "40m", "1h 20m", "45m", "1h"][index],
          topic: lesson[0],
          subject: lesson[1],
          detail: lesson[2],
          status: lesson[3],
          section: lesson[4],
          teacher: state.mode === "Teacher" ? state.item : teachers[(seed + index * 2) % teachers.length],
        };
      });
    }
    const seed = [...`${state.institute}:${state.item}:${state.mobileTeacher}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const count = { Today: 3, Yesterday: 4, "This Week": 6, "This Month": 8, Range: 5 }[state.period] || 8;
    const scopedTeacher = ["teacher", "pair"].includes(state.timelineScope) ? currentTeacher() : null;
    const lessonPool = scopedTeacher ? lessons.filter((lesson) => subjectMatchesLesson(scopedTeacher.subject, lesson)) : lessons;
    return Array.from({ length: count }, (_, index) => {
      const lesson = lessonPool[(seed + index) % lessonPool.length] || lessons[(seed + index) % lessons.length];
      const matchingTeachers = teacherProfiles.filter((teacher) => subjectMatchesLesson(teacher.subject, lesson));
      const teacher = scopedTeacher || matchingTeachers[(seed + index) % matchingTeachers.length] || teacherProfiles[index % teacherProfiles.length];
      return {
        start: ["6:00", "5:40", "5:40", "5:40", "5:20", "5:10", "4:45", "4:10"][index],
        end: ["6:45", "6:40", "6:40", "6:25", "6:00", "6:30", "5:30", "5:10"][index],
        duration: ["45m", "1h", "1h", "45m", "40m", "1h 20m", "45m", "1h"][index],
        topic: lesson[0],
        subject: scopedTeacher?.subject || lesson[1],
        detail: lesson[2],
        status: lesson[3],
        section: ["class", "pair"].includes(state.timelineScope) ? currentClass().name : lesson[4],
        teacher: teacher.name,
      };
    });
  }

  function searchBox(kind, label, value) {
    return `<div class="demo-search-wrap">${icon("search")}<input class="mock-search" data-${kind}-search aria-label="${label}" placeholder="${label}" value="${esc(value)}"></div>`;
  }

  function instituteRows() {
    const query = state.instituteQuery.toLowerCase();
    return institutes.filter((item) => item.name.toLowerCase().includes(query)).map((item) => `<button class="inst-row ${item.id === state.institute ? "active" : ""}" data-institute="${item.id}"><span class="inst-dot" style="background:#9aa5b5"></span><span>${esc(item.name)}<small>${item.teachers} teachers · open details</small></span><span class="inst-count">${item.logged ? `${item.logged}/${item.teachers}` : "Open"}</span></button>`).join("") || '<div class="demo-empty">No institute found.</div>';
  }

  function panelItems() {
    let items = state.mode === "Teacher" ? teachers.map((name, index) => ({ id: name, name, tone: ["blue", "green", "purple", "cyan"][index % 4] })) : classes;
    const query = state.itemQuery.toLowerCase();
    items = items.filter((item) => item.name.toLowerCase().includes(query));
    if (state.sort === "A-Z") items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    return items.map((item) => `<button class="demo-class-row ${item.tone || "blue"} ${(item.id === state.item || item.name === state.item) ? "active" : ""}" data-item="${esc(item.id)}"><span>›</span>${esc(item.name)}</button>`).join("") || '<div class="demo-empty">No result found.</div>';
  }

  function timeline() {
    const rows = fakeRows();
    return `<article class="day-card"><div class="day-head"><span>Monday, July 13</span><span class="line"></span><span>${rows.length} entries · ${rows.length + 3}h</span></div>${rows.map((row) => `<div class="entry"><div class="time">${row.start} - <span>${row.end}</span><span class="duration">${row.duration}</span></div><div><div class="entry-title"><span class="flag">Note</span> <span class="status ${row.status === "Completed" ? "done" : ""}">● ${row.status}</span> ${esc(row.topic)}</div><div class="meta-line"><span>${esc(row.subject)}</span><span class="class-badge">${esc(row.section)}</span></div><div class="entry-detail">${esc(row.detail)}</div></div><div class="teacher">${esc(row.teacher)}</div></div>`).join("")}</article>`;
  }

  function reportModal() {
    return state.report ? `<div class="demo-report-modal" data-close-report><div class="demo-report-dialog" role="dialog" aria-modal="true"><h3>Ledgr Report</h3><p>Prepare a fictional report preview for ${esc(currentInstitute().name)}.</p><div class="demo-report-options">${["PDF", "Summary", "Teacher status"].map((format) => `<button data-format="${format}" class="${format === state.format ? "active" : ""}">${format}</button>`).join("")}</div><div class="demo-dialog-actions"><button data-cancel-report>Cancel</button><button class="primary" data-prepare-report>Prepare ${state.format}</button></div></div></div>` : "";
  }

  // The desktop renderer intentionally remains structurally identical to the approved contained preview.
  function renderDesktop() {
    const institute = currentInstitute();
    root.innerHTML = `<div class="mock-top"><div class="crumbs"><span class="mock-rail-logo">L</span><span>Overview</span><span class="slash">/</span><strong>${esc(institute.name)}</strong></div><div class="demo-top-actions"><button class="report-button" data-report>${icon("report")} Ledgr Report</button><div class="demo-user"><span class="demo-avatar">FA</span><span>Fictional Admin</span></div></div></div><div class="mock-body"><aside class="icon-rail">${[["overview", "Overview"], ["building", "Institutes"], ["books", "Syllabus"], ["school", "Classes"], ["settings", "Settings"], ["report", "Ledgr Report"], ["send", "Messenger"]].map(([key, label], index) => `<button class="rail-icon ${index === 5 ? "active" : ""}" title="${label}" aria-label="${label}">${icon(key)}</button>`).join("")}</aside><section class="institutes"><div class="panel-head"><span>${institutes.length} institutes · today</span><span class="danger-count">${institutes.reduce((sum, item) => sum + item.logged, 0)}/${institutes.reduce((sum, item) => sum + item.teachers, 0)}</span></div>${searchBox("institute", "Search institutes", state.instituteQuery)}<div class="update-pill">Not opened yet</div><div class="institute-list">${instituteRows()}</div></section><section class="class-panel"><div class="demo-class-head"><div class="institute-title"><span>Institute</span><h2>${esc(institute.name)}</h2></div><span class="demo-head-count">${institute.logged}/${institute.teachers}</span></div><div class="tabs">${[["Class", "class"], ["Teacher", "teacher"], ["Class+teacher", "group"]].map(([mode, key]) => `<button class="tab ${state.mode === mode ? "active" : ""}" data-mode="${mode}">${icon(key)}${mode}</button>`).join("")}</div>${searchBox("item", "Search class or teacher", state.itemQuery)}<div class="sort-row"><span>Sort</span><div class="demo-sort-toggle"><button data-sort="Recent" class="${state.sort === "Recent" ? "active" : ""}">Recent</button><button data-sort="A-Z" class="${state.sort === "A-Z" ? "active" : ""}">A-Z</button></div></div><div class="demo-class-label">${state.mode === "Teacher" ? "Teachers" : "Classes"}</div><div class="demo-class-list">${panelItems()}</div></section><section class="timeline-panel"><div class="timeline-title"><h2>${esc(institute.name)}</h2><div class="range-pills">${["Today", "Yesterday", "This Week", "This Month", "Range"].map((period) => `<button class="range-pill ${period === state.period ? "active" : ""}" data-period="${period}">${period}</button>`).join("")}</div></div><div class="timeline-card">${timeline()}</div></section></div>${reportModal()}`;
  }

  function mobileHeader({ title, subtitle = "", eyebrow = "Ledgr Admin", back = false, report = false }) {
    return `<header class="mobile-admin-top"><span class="mobile-admin-logo">L</span><div class="mobile-admin-heading"><span>${esc(eyebrow)}</span><strong>${esc(title)}</strong>${subtitle ? `<small>${esc(subtitle)}</small>` : ""}</div><div class="mobile-admin-actions">${back ? `<button class="mobile-icon-button" data-mobile-back aria-label="Back">${icon("back")}</button>` : ""}${report ? `<button class="mobile-icon-button report" data-mobile-report aria-label="Open Ledgr Report">${icon("report")}</button>` : ""}</div></header>`;
  }

  function mobileMetricGrid(items) {
    return `<div class="mobile-metric-grid">${items.map((item) => `<article class="mobile-metric-card"><span>${esc(item.label)}</span><strong>${esc(item.value)}</strong><small>${esc(item.hint)}</small></article>`).join("")}</div>`;
  }

  function mobileInstituteCards(items) {
    return items.map((item) => {
      const percentage = item.teachers ? Math.round((item.logged / item.teachers) * 100) : 0;
      return `<button class="mobile-inst-card" data-institute="${item.id}"><span class="mobile-inst-dot ${item.logged ? "started" : ""}"></span><span class="mobile-inst-copy"><strong>${esc(item.name)}</strong><small>${item.teachers} teacher${item.teachers === 1 ? "" : "s"} · ${item.logged ? `${percentage}% updated` : "open details"}</small></span><span class="mobile-inst-count">${item.logged ? `${item.logged}/${item.teachers}` : "Open"}</span></button>`;
    }).join("");
  }

  function mobileInstituteRows() {
    const query = state.instituteQuery.trim().toLowerCase();
    const filtered = institutes.filter((item) => item.name.toLowerCase().includes(query));
    if (!filtered.length) return '<div class="demo-empty">No institute found.</div>';
    const updated = filtered.filter((item) => item.logged > 0);
    const unopened = filtered.filter((item) => item.logged === 0);
    return `${updated.length ? `<section class="mobile-list-group"><h3>Updated today</h3>${mobileInstituteCards(updated)}</section>` : ""}${unopened.length ? `<section class="mobile-list-group"><h3>Not opened yet</h3>${mobileInstituteCards(unopened)}</section>` : ""}`;
  }

  function mobileHomeRoot() {
    const totalLogged = institutes.reduce((sum, item) => sum + item.logged, 0);
    const totalTeachers = institutes.reduce((sum, item) => sum + item.teachers, 0);
    return `${mobileHeader({ title: "Home", subtitle: "All institutes", report: true })}<main class="mobile-admin-content"><section class="mobile-summary-card"><div><span>Today’s update health</span><strong>${institutes.length} institutes</strong></div><div class="mobile-summary-count">${totalLogged}<small>/${totalTeachers}</small></div></section>${mobileMetricGrid([{ label: "Started", value: institutes.filter((item) => item.logged).length, hint: "institutes today" }, { label: "Pending", value: institutes.filter((item) => !item.logged).length, hint: "not opened yet" }])}<label class="mobile-search">${icon("search")}<input data-institute-search aria-label="Search institutes" placeholder="Search institutes" value="${esc(state.instituteQuery)}"></label><div class="mobile-institute-list">${mobileInstituteRows()}</div></main>`;
  }

  function mobileWorkspaceTabs() {
    const active = state.mobilePane === "timeline" ? "entries" : state.mode === "Teacher" ? "teachers" : "classes";
    return `<div class="mobile-workspace-tabs">${[["classes", "Classes", "school"], ["teachers", "Teachers", "group"], ["entries", "Entries", "clock"]].map(([key, label, iconName]) => `<button data-workspace-tab="${key}" class="${active === key ? "active" : ""}">${icon(iconName)}<span>${label}</span></button>`).join("")}</div>`;
  }

  function profilesForInstitute() {
    const scoped = teacherProfiles.filter((teacher) => teacher.institute === state.institute);
    return scoped.length ? scoped : teacherProfiles.slice(0, 4);
  }

  function mobileClassRows() {
    const query = state.itemQuery.trim().toLowerCase();
    if (state.mode === "Teacher") {
      let items = profilesForInstitute().filter((teacher) => `${teacher.name} ${teacher.subject}`.toLowerCase().includes(query));
      if (state.sort === "A-Z") items = [...items].sort((a, b) => a.name.localeCompare(b.name));
      return items.map((teacher) => `<button class="mobile-person-row" data-workspace-teacher="${teacher.id}"><span class="mobile-person-avatar">${esc(teacher.name.split(" ").map((part) => part[0]).join(""))}</span><span><strong>${esc(teacher.name)}</strong><small>${esc(teacher.subject)} · ${teacher.logged} ${teacher.logged === 1 ? "entry" : "entries"}</small></span><span class="mobile-chevron">›</span></button>`).join("") || '<div class="demo-empty">No teacher found.</div>';
    }

    let items = classes.filter((item) => item.name.toLowerCase().includes(query));
    if (state.sort === "A-Z") items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    if (state.mode === "Class+teacher") {
      const teachersInInstitute = profilesForInstitute();
      return items.map((item, index) => {
        const teacher = teachersInInstitute[index % teachersInInstitute.length];
        return `<button class="mobile-pair-row ${item.tone}" data-pair-class="${item.id}" data-pair-teacher="${teacher.id}"><span><strong>${esc(item.name)}</strong><small>${esc(teacher.name)} · ${esc(teacher.subject)}</small></span><span class="mobile-chevron">›</span></button>`;
      }).join("") || '<div class="demo-empty">No class-teacher pair found.</div>';
    }
    return items.map((item) => `<button class="mobile-class-card ${item.tone || "blue"}" data-item="${item.id}"><span>›</span><strong>${esc(item.name)}</strong><span class="mobile-row-arrow">${icon("back")}</span></button>`).join("") || '<div class="demo-empty">No class found.</div>';
  }

  function mobileClassPanel() {
    const heading = state.mode === "Teacher" ? "Teachers" : state.mode === "Class+teacher" ? "Class + teacher" : "Classes";
    return `<section class="mobile-institute-card"><div><span>Institute</span><strong>${esc(currentInstitute().name)}</strong></div><span>${currentInstitute().logged}/${currentInstitute().teachers}</span></section>${state.mode !== "Teacher" ? `<div class="mobile-browse-toggle"><button data-mode="Class" class="${state.mode === "Class" ? "active" : ""}">Class</button><button data-mode="Class+teacher" class="${state.mode === "Class+teacher" ? "active" : ""}">Class + teacher</button></div>` : ""}<label class="mobile-search">${icon("search")}<input data-item-search aria-label="Search class or teacher" placeholder="Search class or teacher" value="${esc(state.itemQuery)}"></label><div class="mobile-sort"><span>Sort</span><div>${["Recent", "A-Z"].map((sort) => `<button data-sort="${sort}" class="${state.sort === sort ? "active" : ""}">${sort}</button>`).join("")}</div></div><section class="mobile-class-section"><h3>${heading}</h3><div class="mobile-class-list">${mobileClassRows()}</div></section>`;
  }

  function mobileTimelineTitle() {
    if (state.timelineScope === "institute") return { eyebrow: "Institute entries", title: currentInstitute().name, subtitle: "All recent teaching activity" };
    if (state.timelineScope === "teacher") return { eyebrow: "Teacher entries", title: currentTeacher().name, subtitle: currentTeacher().subject };
    if (state.timelineScope === "pair") return { eyebrow: "Class + teacher", title: currentClass().name, subtitle: `${currentTeacher().name} · ${currentTeacher().subject}` };
    return { eyebrow: "Class entries", title: currentClass().name, subtitle: currentInstitute().name };
  }

  function mobileTimelinePanel() {
    const rows = fakeRows(true);
    const title = mobileTimelineTitle();
    return `<section class="mobile-timeline-title"><span>${esc(title.eyebrow)}</span><h2>${esc(title.title)}</h2><p>${esc(title.subtitle)}</p></section><div class="mobile-periods">${["Today", "Yesterday", "This Week", "This Month", "Range"].map((period) => `<button class="${period === state.period ? "active" : ""}" data-period="${period}">${period}</button>`).join("")}</div><article class="mobile-day-card"><header><span>Monday, July 13</span><strong>${rows.length} entries · ${rows.length + 3}h</strong></header>${rows.map((row) => `<section class="mobile-entry"><div class="mobile-entry-top"><strong>${row.start} - <span>${row.end}</span></strong><span>${esc(row.teacher)}</span></div><div class="mobile-entry-main"><div><span class="mobile-note">Note</span><span class="mobile-entry-status ${row.status === "Completed" ? "done" : ""}">● ${row.status}</span></div><h3>${esc(row.topic)}</h3></div><div class="mobile-entry-meta"><span>${esc(row.subject)}</span><span>${esc(row.section)}</span><strong>${row.duration}</strong></div><p>${esc(row.detail)}</p></section>`).join("")}</article>`;
  }

  function mobileWorkspace() {
    return `${mobileHeader({ title: currentInstitute().name, subtitle: "Classes, teachers, entries", back: true, report: true })}<main class="mobile-admin-content mobile-workspace-content">${mobileWorkspaceTabs()}${state.mobilePane === "timeline" ? mobileTimelinePanel() : mobileClassPanel()}</main>`;
  }

  function mobileTeacherRows() {
    const query = state.teacherQuery.trim().toLowerCase();
    const items = teacherProfiles.filter((teacher) => `${teacher.name} ${teacher.subject} ${instituteName(teacher.institute)}`.toLowerCase().includes(query));
    return items.map((teacher) => `<button class="mobile-teacher-card" data-teacher-card="${teacher.id}"><span class="mobile-person-avatar">${esc(teacher.name.split(" ").map((part) => part[0]).join(""))}</span><span class="mobile-teacher-copy"><strong>${esc(teacher.name)}</strong><small>${esc(teacher.subject)} · ${esc(instituteName(teacher.institute))}</small><em>${teacher.classes.length} classes · ${teacher.logged} ${teacher.logged === 1 ? "entry" : "entries"} today</em></span><span class="mobile-chevron">›</span></button>`).join("") || '<div class="demo-empty">No teacher found.</div>';
  }

  function mobileTeachersList() {
    return `${mobileHeader({ title: "Teachers", subtitle: "Profiles and teaching activity", report: true })}<main class="mobile-admin-content">${mobileMetricGrid([{ label: "Teachers", value: teacherProfiles.length, hint: "fictional profiles" }, { label: "Updated", value: teacherProfiles.filter((teacher) => teacher.logged).length, hint: "today" }])}<label class="mobile-search">${icon("search")}<input data-teacher-search aria-label="Search teachers" placeholder="Search teachers" value="${esc(state.teacherQuery)}"></label><div class="mobile-teacher-list">${mobileTeacherRows()}</div></main>`;
  }

  function mobileTeacherDetail() {
    const teacher = currentTeacher();
    return `${mobileHeader({ title: teacher.name, subtitle: `${teacher.subject} · ${instituteName(teacher.institute)}`, back: true, report: true })}<main class="mobile-admin-content"><section class="mobile-profile-card"><div class="mobile-profile-avatar">${esc(teacher.name.split(" ").map((part) => part[0]).join(""))}</div><div><span>Teacher profile</span><h2>${esc(teacher.name)}</h2><p>${esc(teacher.subject)} · ${teacher.logged} entries today</p></div></section>${mobileMetricGrid([{ label: "Classes", value: teacher.classes.length, hint: "assigned" }, { label: "Today", value: teacher.logged, hint: "entries logged" }])}<section class="mobile-detail-section"><h3>Assigned classes</h3>${teacher.classes.map((classId) => `<button class="mobile-detail-row" data-teacher-class="${classId}"><span><strong>${esc(className(classId))}</strong><small>Open class + teacher entries</small></span><span>›</span></button>`).join("")}</section><button class="mobile-primary-action" data-teacher-timeline>${icon("clock")} View all teaching entries</button></main>`;
  }

  function mobileTeachersSurface() {
    if (state.mobileTeacherView === "timeline") {
      return `${mobileHeader({ title: currentTeacher().name, subtitle: "Teaching entries", back: true, report: true })}<main class="mobile-admin-content mobile-timeline-content">${mobileTimelinePanel()}</main>`;
    }
    return state.mobileTeacherView === "detail" ? mobileTeacherDetail() : mobileTeachersList();
  }

  function mobileReportSurface() {
    const reports = [
      ["Monday, July 13", "11 institutes", "PDF"],
      ["Sunday, July 12", "9 institutes", "Summary"],
      ["Saturday, July 11", "10 institutes", "Teacher status"],
    ];
    return `${mobileHeader({ title: "Ledgr Report", subtitle: "Exports and schedules" })}<main class="mobile-admin-content"><section class="mobile-report-hero"><span>All institutes</span><h2>Daily report</h2><p>Submissions, pending teachers, sections, hours, and export actions. This public preview uses fictional data.</p></section>${mobileMetricGrid([{ label: "Institutes", value: 11, hint: "in report" }, { label: "Entries", value: 34, hint: "today" }, { label: "Teachers", value: "4/124", hint: "updated" }, { label: "Hours", value: "29h", hint: "recorded" }])}<section class="mobile-report-card"><h3>Prepare sample</h3><div class="mobile-format-grid">${["PDF", "Summary", "Teacher status"].map((format) => `<button data-format="${format}" class="${state.format === format ? "active" : ""}">${format}</button>`).join("")}</div><div class="mobile-report-actions"><button data-report-action="export" class="primary">${icon("download")} Export</button><button data-report-action="past">${icon("chart")} Past records</button><button data-report-action="schedule">${icon("calendar")} Schedule</button><button data-report-action="refresh">${icon("refresh")} Refresh</button></div></section>${state.reportScheduleOpen ? `<section class="mobile-report-card"><div class="mobile-card-heading"><div><span>Schedule</span><h3>Daily at 8:00 PM</h3></div><button class="mobile-switch ${state.reportScheduleEnabled ? "active" : ""}" data-report-action="toggle-schedule" aria-label="Toggle report schedule"><span></span></button></div><p>Demo only — no Telegram route or external schedule will be created.</p></section>` : ""}${state.reportPastOpen ? `<section class="mobile-detail-section"><h3>Past records</h3>${reports.map((report) => `<button class="mobile-detail-row" data-demo-action="Open sample report"><span><strong>${report[0]}</strong><small>${report[1]} · ${report[2]}</small></span><span>Open</span></button>`).join("")}</section>` : ""}</main>`;
  }

  const toolCards = [
    { key: "teachers", title: "Teachers", subtitle: "Profiles, classes, access", icon: "group", count: teacherProfiles.length },
    { key: "institutes", title: "Institutes", subtitle: "Centres and structure", icon: "building", count: institutes.length },
    { key: "syllabus", title: "Syllabus", subtitle: "Main topics and subtopics", icon: "books", count: 6 },
    { key: "sections", title: "Sections", subtitle: "Groups and timetables", icon: "school", count: 12 },
    { key: "admins", title: "Admins", subtitle: "Roles and permissions", icon: "shield", count: 3 },
    { key: "report", title: "Ledgr Report", subtitle: "Export and schedule", icon: "report", count: "Ready" },
    { key: "messenger", title: "Messenger", subtitle: "Routes and daily batch", icon: "send", count: 4 },
    { key: "feedback", title: "Feedback", subtitle: "Inbox and replies", icon: "message", count: 2 },
    { key: "recycle", title: "Recycle Bin", subtitle: "Restore deleted records", icon: "trash", count: 1, tone: "danger" },
  ];

  const toolPanels = {
    syllabus: {
      title: "Syllabus",
      subtitle: "Main topics and subtopics",
      rows: [["Chemistry", "12 chapters · 68 topics"], ["Mathematics", "14 chapters · 84 topics"], ["English", "9 chapters · 45 topics"], ["Social Science", "11 chapters · 57 topics"]],
    },
    sections: {
      title: "Sections",
      subtitle: "Groups and timetable structure",
      rows: [["JEE-11th-VIRAT", "6 teachers · active"], ["NEET - 11th - SANKALP", "7 teachers · active"], ["JEE and NEET Dropper Batches", "8 teachers · active"], ["Foundation Batches", "5 teachers · active"]],
    },
    admins: {
      title: "Admins",
      subtitle: "Roles and permissions",
      rows: [["Fictional Admin", "Owner · all institutes"], ["Operations Admin", "Reports and institutes"], ["Academic Admin", "Syllabus and sections"]],
    },
    messenger: {
      title: "Messenger",
      subtitle: "Routes and daily batch",
      rows: [["Northstar Academy route", "Ready · 2 recipients"], ["Horizon School route", "Ready · 1 recipient"], ["Daily institute batch", "Scheduled · 8:00 PM"], ["Full report route", "Needs review"]],
    },
    feedback: {
      title: "Feedback",
      subtitle: "Inbox and replies",
      rows: [["Add weekly filter", "Unread · Academic Admin"], ["Report layout looks clear", "Unread · Operations Admin"], ["Class naming corrected", "Resolved"]],
    },
    recycle: {
      title: "Recycle Bin",
      subtitle: "Restore deleted records",
      rows: [["Archived demo section", "Deleted 2 days ago · restorable"]],
    },
  };

  function mobileToolsGrid() {
    return toolCards.map((tool) => `<button class="mobile-tool-card ${tool.tone === "danger" ? "danger" : ""}" data-mobile-tool="${tool.key}"><span class="mobile-tool-icon">${icon(tool.icon)}</span><span><strong>${esc(tool.title)}</strong><small>${esc(tool.subtitle)}</small></span><em>${esc(tool.count)}</em></button>`).join("");
  }

  function mobileToolDetail() {
    const panel = toolPanels[state.mobileTool] || toolPanels.syllabus;
    return `${mobileHeader({ title: panel.title, subtitle: panel.subtitle, eyebrow: "Control Centre", back: true })}<main class="mobile-admin-content"><section class="mobile-report-hero"><span>Demo workspace</span><h2>${esc(panel.title)}</h2><p>${esc(panel.subtitle)}. All records and actions on this public preview are fictional.</p></section><section class="mobile-detail-section"><h3>${panel.title === "Feedback" ? "Inbox" : "Current records"}</h3>${panel.rows.map((row) => `<button class="mobile-detail-row" data-demo-action="Open ${esc(panel.title)} record"><span><strong>${esc(row[0])}</strong><small>${esc(row[1])}</small></span><span>›</span></button>`).join("")}</section><button class="mobile-primary-action" data-demo-action="${panel.title} action">${icon(panel.title === "Messenger" ? "send" : "tools")} ${panel.title === "Recycle Bin" ? "Review restore options" : `Open ${esc(panel.title)} action`}</button></main>`;
  }

  function mobileToolsSurface() {
    if (state.mobileTool) return mobileToolDetail();
    return `${mobileHeader({ title: "Tools", subtitle: "Control Centre" })}<main class="mobile-admin-content"><section class="mobile-report-hero"><span>Control Centre</span><h2>Admin tools</h2><p>Open one focused tool page at a time. Every record in this preview is fictional.</p></section><div class="mobile-tool-grid">${mobileToolsGrid()}</div></main>`;
  }

  function mobileBottomNav() {
    const active = state.mobileSurface === "tool" ? "tools" : state.mobileSurface;
    return `<nav class="mobile-bottom-nav" aria-label="Admin preview navigation">${[["home", "Home", "building"], ["teachers", "Teachers", "group"], ["report", "Report", "report"], ["tools", "Tools", "settings"]].map(([key, label, iconName]) => `<button data-mobile-nav="${key}" class="${active === key ? "active" : ""}">${icon(iconName)}<span>${label}</span></button>`).join("")}</nav>`;
  }

  function renderMobile() {
    let content = "";
    if (state.mobileSurface === "teachers") content = mobileTeachersSurface();
    else if (state.mobileSurface === "report") content = mobileReportSurface();
    else if (["tools", "tool"].includes(state.mobileSurface)) content = mobileToolsSurface();
    else content = state.mobilePane === "institutes" ? mobileHomeRoot() : mobileWorkspace();
    root.innerHTML = `<div class="mobile-admin-demo">${content}${mobileBottomNav()}${state.toast ? `<div class="mobile-demo-toast" role="status">${esc(state.toast)}</div>` : ""}</div>`;
  }

  function render() {
    phoneMedia.matches ? renderMobile() : renderDesktop();
  }

  function showToast(message) {
    state.toast = message;
    render();
  }

  function handleMobileBack() {
    state.toast = "";
    if (state.mobileSurface === "home") {
      state.mobilePane = state.mobilePane === "timeline" ? "classes" : "institutes";
      return;
    }
    if (state.mobileSurface === "teachers") {
      state.mobileTeacherView = state.mobileTeacherView === "timeline" ? "detail" : "list";
      return;
    }
    if (["tools", "tool"].includes(state.mobileSurface) && state.mobileTool) {
      state.mobileSurface = "tools";
      state.mobileTool = "";
    }
  }

  root.addEventListener("click", (event) => {
    const mobileNav = event.target.closest("[data-mobile-nav]");
    if (mobileNav) {
      const target = mobileNav.dataset.mobileNav;
      state.toast = "";
      state.mobileSurface = target;
      if (target === "home") state.mobilePane = "institutes";
      if (target === "teachers") state.mobileTeacherView = "list";
      if (target === "tools") state.mobileTool = "";
      render();
      return;
    }

    if (event.target.closest("[data-mobile-back]")) {
      handleMobileBack();
      render();
      return;
    }

    if (event.target.closest("[data-mobile-report]")) {
      state.mobileSurface = "report";
      state.toast = "";
      render();
      return;
    }

    const workspaceTab = event.target.closest("[data-workspace-tab]");
    if (workspaceTab) {
      const target = workspaceTab.dataset.workspaceTab;
      state.itemQuery = "";
      if (target === "entries") {
        state.mobilePane = "timeline";
        state.timelineScope = "institute";
      } else {
        state.mobilePane = "classes";
        state.mode = target === "teachers" ? "Teacher" : "Class";
        if (state.mode === "Teacher") {
          const first = profilesForInstitute()[0];
          state.mobileTeacher = first.id;
          state.item = first.name;
        } else {
          state.item = classes[0].id;
        }
      }
      render();
      return;
    }

    const institute = event.target.closest("[data-institute]");
    if (institute) {
      state.institute = institute.dataset.institute;
      if (phoneMedia.matches) {
        state.mobileSurface = "home";
        state.mobilePane = "classes";
        state.mode = "Class";
        state.item = classes[0].id;
        state.itemQuery = "";
      }
      render();
      return;
    }

    const workspaceTeacher = event.target.closest("[data-workspace-teacher]");
    if (workspaceTeacher) {
      const teacher = teacherProfiles.find((item) => item.id === workspaceTeacher.dataset.workspaceTeacher) || teacherProfiles[0];
      state.mobileTeacher = teacher.id;
      state.mode = "Teacher";
      state.item = teacher.name;
      state.timelineScope = "teacher";
      state.mobilePane = "timeline";
      render();
      return;
    }

    const pair = event.target.closest("[data-pair-class]");
    if (pair) {
      state.item = pair.dataset.pairClass;
      state.mobileTeacher = pair.dataset.pairTeacher;
      state.mode = "Class+teacher";
      state.timelineScope = "pair";
      state.mobilePane = "timeline";
      render();
      return;
    }

    const item = event.target.closest("[data-item]");
    if (item) {
      state.item = item.dataset.item;
      if (phoneMedia.matches) {
        state.timelineScope = "class";
        state.mobilePane = "timeline";
      }
      render();
      return;
    }

    const teacherCard = event.target.closest("[data-teacher-card]");
    if (teacherCard) {
      const teacher = teacherProfiles.find((item) => item.id === teacherCard.dataset.teacherCard) || teacherProfiles[0];
      state.mobileTeacher = teacher.id;
      state.institute = teacher.institute;
      state.mode = "Teacher";
      state.item = teacher.name;
      state.mobileTeacherView = "detail";
      render();
      return;
    }

    const teacherClass = event.target.closest("[data-teacher-class]");
    if (teacherClass) {
      state.item = teacherClass.dataset.teacherClass;
      state.mode = "Class+teacher";
      state.timelineScope = "pair";
      state.mobileTeacherView = "timeline";
      render();
      return;
    }

    if (event.target.closest("[data-teacher-timeline]")) {
      state.mode = "Teacher";
      state.item = currentTeacher().name;
      state.timelineScope = "teacher";
      state.mobileTeacherView = "timeline";
      render();
      return;
    }

    const mode = event.target.closest("[data-mode]");
    if (mode) {
      state.mode = mode.dataset.mode;
      state.item = state.mode === "Teacher" ? teachers[0] : classes[0].id;
      if (phoneMedia.matches) state.mobilePane = "classes";
      render();
      return;
    }

    const period = event.target.closest("[data-period]");
    if (period) {
      state.period = period.dataset.period;
      render();
      return;
    }

    const sort = event.target.closest("[data-sort]");
    if (sort) {
      state.sort = sort.dataset.sort;
      render();
      return;
    }

    const format = event.target.closest("[data-format]");
    if (format) {
      state.format = format.dataset.format;
      render();
      return;
    }

    const reportAction = event.target.closest("[data-report-action]");
    if (reportAction) {
      const action = reportAction.dataset.reportAction;
      if (action === "past") state.reportPastOpen = !state.reportPastOpen;
      if (action === "schedule") state.reportScheduleOpen = !state.reportScheduleOpen;
      if (action === "toggle-schedule") state.reportScheduleEnabled = !state.reportScheduleEnabled;
      if (action === "export") {
        showToast(`${state.format} sample prepared with fictional data.`);
        return;
      }
      if (action === "refresh") {
        showToast("Fictional report data refreshed.");
        return;
      }
      render();
      return;
    }

    const mobileTool = event.target.closest("[data-mobile-tool]");
    if (mobileTool) {
      const tool = mobileTool.dataset.mobileTool;
      state.toast = "";
      if (tool === "teachers") {
        state.mobileSurface = "teachers";
        state.mobileTeacherView = "list";
      } else if (tool === "institutes") {
        state.mobileSurface = "home";
        state.mobilePane = "institutes";
      } else if (tool === "report") {
        state.mobileSurface = "report";
      } else {
        state.mobileSurface = "tool";
        state.mobileTool = tool;
      }
      render();
      return;
    }

    const demoAction = event.target.closest("[data-demo-action]");
    if (demoAction) {
      showToast(`${demoAction.dataset.demoAction} is simulated in this public preview.`);
      return;
    }

    if (event.target.closest("[data-report]")) {
      if (phoneMedia.matches) {
        state.mobileSurface = "report";
      } else {
        state.report = true;
      }
      render();
      return;
    }

    if (event.target.closest("[data-cancel-report]") || event.target.matches("[data-close-report]")) {
      state.report = false;
      render();
      return;
    }

    if (event.target.closest("[data-prepare-report]")) {
      state.report = false;
      render();
    }
  });

  root.addEventListener("input", (event) => {
    if (event.target.matches("[data-institute-search]")) {
      state.instituteQuery = event.target.value;
      const list = root.querySelector(phoneMedia.matches ? ".mobile-institute-list" : ".institute-list");
      if (list) list.innerHTML = phoneMedia.matches ? mobileInstituteRows() : instituteRows();
    }
    if (event.target.matches("[data-item-search]")) {
      state.itemQuery = event.target.value;
      const list = root.querySelector(phoneMedia.matches ? ".mobile-class-list" : ".demo-class-list");
      if (list) list.innerHTML = phoneMedia.matches ? mobileClassRows() : panelItems();
    }
    if (event.target.matches("[data-teacher-search]")) {
      state.teacherQuery = event.target.value;
      const list = root.querySelector(".mobile-teacher-list");
      if (list) list.innerHTML = mobileTeacherRows();
    }
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.report) {
      state.report = false;
      render();
    }
  });

  if (phoneMedia.addEventListener) phoneMedia.addEventListener("change", render);
  else phoneMedia.addListener(render);
  render();
})();

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
    { id: "meera", name: "Meera Joshi", subject: "Maths", institute: "north", classes: ["virat", "madhav"], logged: 4 },
    { id: "dev", name: "Dev Arora", subject: "Physics", institute: "north", classes: ["virat", "dropper"], logged: 3 },
    { id: "isha", name: "Isha Malhotra", subject: "Biology", institute: "north", classes: ["sankalp", "keshav"], logged: 3 },
    { id: "rahul", name: "Rahul Khanna", subject: "MAT", institute: "north", classes: ["foundation", "madhav"], logged: 2 },
    { id: "kavya", name: "Kavya Rao", subject: "Maths", institute: "merit", classes: ["virat", "madhav"], logged: 1 },
    { id: "piyush", name: "Piyush Gupta", subject: "MAT", institute: "horizon", classes: ["foundation", "madhav"], logged: 3 },
    { id: "jaya", name: "Jaya Sharma", subject: "Chemistry", institute: "horizon", classes: ["sankalp", "dropper"], logged: 2 },
    { id: "sahil", name: "Sahil Batra", subject: "Physics", institute: "horizon", classes: ["virat", "foundation"], logged: 2 },
    { id: "tanvi", name: "Tanvi Menon", subject: "Biology", institute: "horizon", classes: ["sankalp", "keshav"], logged: 2 },
    { id: "anuradha", name: "Anuradha Gupta", subject: "English", institute: "summit", classes: ["foundation", "keshav"], logged: 2 },
    { id: "usha", name: "Usha Adhikari", subject: "Social Science", institute: "scholars", classes: ["foundation", "dropper"], logged: 1 },
    { id: "girish", name: "Girish Bansal", subject: "Maths", institute: "bright", classes: ["virat", "madhav"], logged: 3 },
    { id: "zoya", name: "Zoya Mirza", subject: "English", institute: "axis", classes: ["foundation", "virat"], logged: 1 },
    { id: "omkar", name: "Omkar Desai", subject: "Chemistry", institute: "pioneer", classes: ["dropper", "sankalp"], logged: 1 },
  ];

  const teachers = teacherProfiles.map((teacher) => teacher.name);
  const lessons = [
    { topic: "Linear equations in two variables", subject: "Maths", detail: "Graphical solutions and consistency of equation pairs" },
    { topic: "Quadratic roots and discriminant", subject: "Maths", detail: "Nature of roots with factorisation practice" },
    { topic: "Arithmetic progressions", subject: "Maths", detail: "Finding the nth term and sum of a sequence" },
    { topic: "Applications of differentiation", subject: "Maths", detail: "Increasing functions, maxima and minima" },
    { topic: "Probability distributions", subject: "Maths", detail: "Mean and variance of discrete outcomes" },
    { topic: "Coordinate geometry revision", subject: "Maths", detail: "Distance, section formula and locus questions" },
    { topic: "Chemical bonding", subject: "Chemistry", detail: "Hybridisation, bond angles and molecular shape" },
    { topic: "Mole concept", subject: "Chemistry", detail: "Stoichiometric ratios and limiting reagent problems" },
    { topic: "Chemical equilibrium", subject: "Chemistry", detail: "Le Chatelier’s principle and equilibrium constants" },
    { topic: "Redox reactions", subject: "Chemistry", detail: "Oxidation numbers and balancing equations" },
    { topic: "Thermodynamics", subject: "Chemistry", detail: "Enthalpy changes and Hess’s law examples" },
    { topic: "Organic reaction mechanisms", subject: "Chemistry", detail: "Electrophiles, nucleophiles and intermediates" },
    { topic: "Reported speech", subject: "English", detail: "Tense, pronoun and time-expression changes" },
    { topic: "Reading comprehension drill", subject: "English", detail: "Inference, tone and contextual vocabulary" },
    { topic: "Clauses and sentence correction", subject: "English", detail: "Identifying dependent clauses and common errors" },
    { topic: "Formal letter writing", subject: "English", detail: "Structure, tone and concise supporting details" },
    { topic: "Active and passive voice", subject: "English", detail: "Transformations across common tense forms" },
    { topic: "Poetry close reading", subject: "English", detail: "Imagery, rhythm and central idea discussion" },
    { topic: "Constitutional values", subject: "Social Science", detail: "Justice, liberty, equality and fraternity in practice" },
    { topic: "The rise of an empire", subject: "Social Science", detail: "Early kingdoms, administration and trade routes" },
    { topic: "Resources and development", subject: "Social Science", detail: "Resource planning and sustainable land use" },
    { topic: "Indian national movement", subject: "Social Science", detail: "Major phases, leaders and regional participation" },
    { topic: "Federalism in India", subject: "Social Science", detail: "Union, state and local government responsibilities" },
    { topic: "Climate and monsoon patterns", subject: "Social Science", detail: "Seasonal winds and regional rainfall variation" },
    { topic: "Syllogism", subject: "MAT", detail: "Statements, conclusions and Venn-diagram checks" },
    { topic: "Number series", subject: "MAT", detail: "Mixed patterns using differences and ratios" },
    { topic: "Coding and decoding", subject: "MAT", detail: "Letter shifts, symbol rules and pattern detection" },
    { topic: "Direction sense", subject: "MAT", detail: "Multi-step paths and shortest-distance questions" },
    { topic: "Data sufficiency", subject: "MAT", detail: "Testing whether given statements resolve a problem" },
    { topic: "Analogy and classification", subject: "MAT", detail: "Relationship-based grouping and odd-one-out sets" },
    { topic: "Motion in a straight line", subject: "Physics", detail: "Position-time and velocity-time graph analysis" },
    { topic: "Laws of motion", subject: "Physics", detail: "Free-body diagrams, friction and connected blocks" },
    { topic: "Work, energy and power", subject: "Physics", detail: "Work-energy theorem and conservation problems" },
    { topic: "Ray optics", subject: "Physics", detail: "Mirror formula, lenses and sign conventions" },
    { topic: "Current electricity", subject: "Physics", detail: "Resistivity, series circuits and Kirchhoff’s rules" },
    { topic: "Electromagnetic induction", subject: "Physics", detail: "Magnetic flux, Faraday’s law and Lenz’s law" },
    { topic: "Cell structure", subject: "Biology", detail: "Organelles, membranes and cell specialisation" },
    { topic: "Cell cycle and mitosis", subject: "Biology", detail: "Phase sequence with diagram-based revision" },
    { topic: "Mendelian genetics", subject: "Biology", detail: "Monohybrid crosses and inheritance ratios" },
    { topic: "Human physiology", subject: "Biology", detail: "Digestion, absorption and enzyme functions" },
    { topic: "Plant transport", subject: "Biology", detail: "Xylem, phloem and transpiration pull" },
    { topic: "Ecosystem interactions", subject: "Biology", detail: "Food webs, energy flow and population balance" },
  ];

  const phoneMedia = window.matchMedia("(max-width: 599.98px)");
  const state = {
    institute: "north",
    mode: "Class",
    item: "virat",
    period: "This Month",
    rangeStart: "2026-06-24",
    rangeEnd: "2026-07-06",
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
    desktopPane: 0,
    panelWidths: { institutes: 300, classes: 360 },
    mobileDirection: 0,
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
  const DEMO_TODAY = "2026-07-13";
  const DEMO_FIRST_DAY = "2026-06-13";
  const dateFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" });
  const timeSlots = [
    ["6:00", 45], ["5:40", 60], ["5:10", 80], ["4:35", 55],
    ["3:50", 70], ["3:05", 45], ["2:20", 60], ["1:30", 50],
  ];
  const statuses = ["Completed", "In Progress", "Completed", "Doubts", "Started", "Completed"];

  const hashText = (value) => [...String(value)].reduce((hash, char) => ((hash * 31) + char.charCodeAt(0)) >>> 0, 2166136261);
  const parseDateKey = (key) => new Date(`${key}T12:00:00`);
  const toDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const shiftDateKey = (key, days) => {
    const date = parseDateKey(key);
    date.setDate(date.getDate() + days);
    return toDateKey(date);
  };
  const formatDateKey = (key) => dateFormatter.format(parseDateKey(key));
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    if (!hours) return `${remainder}m`;
    return remainder ? `${hours}h ${remainder}m` : `${hours}h`;
  };
  const addTime = (start, minutes) => {
    const [hour, minute] = start.split(":").map(Number);
    const total = hour * 60 + minute + minutes;
    const nextHour = Math.floor(total / 60) % 12 || 12;
    return `${nextHour}:${String(total % 60).padStart(2, "0")}`;
  };
  const statusClass = (status) => status === "Completed" ? "done" : status === "Started" ? "started" : status === "Doubts" ? "doubts" : "";
  const subjectMatchesLesson = (subject, lesson) => lesson.subject === subject;

  function selectedTeacherProfile() {
    if (state.timelineScope === "pair") return currentTeacher();
    if (state.timelineScope === "teacher" || state.mode === "Teacher") {
      return teacherProfiles.find((teacher) => teacher.name === state.item || teacher.id === state.item) || currentTeacher();
    }
    return null;
  }

  function activityDataset() {
    const scopedTeacher = selectedTeacherProfile();
    const scopedClass = ["class", "pair"].includes(state.timelineScope) ? currentClass() : null;
    const instituteTeachers = teacherProfiles.filter((teacher) => teacher.institute === state.institute);
    const availableTeachers = instituteTeachers.length ? instituteTeachers : teacherProfiles;
    const availableSubjects = new Set(availableTeachers.map((teacher) => teacher.subject));
    const lessonPool = scopedTeacher
      ? lessons.filter((lesson) => subjectMatchesLesson(scopedTeacher.subject, lesson))
      : lessons.filter((lesson) => availableSubjects.has(lesson.subject));
    const seed = hashText(`${state.institute}:${state.item}:${state.mobileTeacher}:${state.timelineScope}`);
    const rows = [];

    for (let dayOffset = 0; dayOffset <= 30; dayOffset += 1) {
      const dateKey = shiftDateKey(DEMO_TODAY, -dayOffset);
      const dailyCount = 4 + ((seed + dayOffset * 11) % 4);
      for (let index = 0; index < dailyCount; index += 1) {
        const lesson = lessonPool[(seed + dayOffset * 7 + index * 5) % lessonPool.length] || lessons[(seed + index) % lessons.length];
        const matchingTeachers = availableTeachers.filter((teacher) => teacher.subject === lesson.subject);
        const teacher = scopedTeacher || matchingTeachers[(seed + dayOffset + index * 3) % matchingTeachers.length] || teacherProfiles[(seed + index) % teacherProfiles.length];
        const teacherClasses = teacher.classes.length ? teacher.classes : classes.map((item) => item.id);
        const section = scopedClass || classes.find((item) => item.id === teacherClasses[(dayOffset + index) % teacherClasses.length]) || classes[(seed + index) % classes.length];
        const [start, minutes] = timeSlots[(seed + dayOffset * 3 + index) % timeSlots.length];
        const status = statuses[(seed + dayOffset + index * 2) % statuses.length];
        rows.push({
          id: `${dateKey}-${dayOffset}-${index}`,
          dateKey,
          start,
          end: addTime(start, minutes),
          minutes,
          duration: formatDuration(minutes),
          topic: lesson.topic,
          subject: scopedTeacher?.subject || lesson.subject,
          detail: lesson.detail,
          status,
          section: section.name,
          teacher: teacher.name,
        });
      }
    }
    return rows;
  }

  function periodBounds() {
    if (state.period === "Today") return [DEMO_TODAY, DEMO_TODAY];
    if (state.period === "Yesterday") {
      const yesterday = shiftDateKey(DEMO_TODAY, -1);
      return [yesterday, yesterday];
    }
    if (state.period === "This Week") return [shiftDateKey(DEMO_TODAY, -6), DEMO_TODAY];
    if (state.period === "Range") return [state.rangeStart, state.rangeEnd];
    return [`${DEMO_TODAY.slice(0, 7)}-01`, DEMO_TODAY];
  }

  function filteredRows() {
    const [start, end] = periodBounds();
    return activityDataset().filter((row) => row.dateKey >= start && row.dateKey <= end);
  }

  function groupedRows() {
    const groups = new Map();
    filteredRows().forEach((row) => {
      if (!groups.has(row.dateKey)) groups.set(row.dateKey, []);
      groups.get(row.dateKey).push(row);
    });
    return [...groups].map(([dateKey, rows]) => ({
      dateKey,
      rows,
      minutes: rows.reduce((sum, row) => sum + row.minutes, 0),
    }));
  }

  function rangeControls() {
    if (state.period !== "Range") return "";
    return `<div class="demo-range-controls" aria-label="Custom date range"><label><span>From</span><input type="date" min="${DEMO_FIRST_DAY}" max="${state.rangeEnd}" value="${state.rangeStart}" data-range-start></label><label><span>To</span><input type="date" min="${state.rangeStart}" max="${DEMO_TODAY}" value="${state.rangeEnd}" data-range-end></label></div>`;
  }

  function periodButtons(className) {
    return `<div class="${className}">${["Today", "Yesterday", "This Week", "This Month", "Range"].map((period) => `<button class="${className === "range-pills" ? "range-pill " : ""}${period === state.period ? "active" : ""}" data-period="${period}" aria-pressed="${period === state.period}">${period}</button>`).join("")}</div>${rangeControls()}`;
  }

  function searchBox(kind, label, value) {
    return `<div class="demo-search-wrap">${icon("search")}<input class="mock-search" data-${kind}-search aria-label="${label}" placeholder="${label}" value="${esc(value)}"></div>`;
  }

  function instituteRows() {
    const query = state.instituteQuery.toLowerCase();
    const filtered = institutes.filter((item) => item.name.toLowerCase().includes(query));
    if (!filtered.length) return '<div class="demo-empty">No institute found.</div>';

    const renderRow = (item) => {
      const opened = item.logged > 0;
      const percent = opened ? Math.round((item.logged / item.teachers) * 100) : 0;
      return `<button class="inst-row ${item.id === state.institute ? "active" : ""}" data-institute="${item.id}"><span class="inst-dot" style="background:${opened ? "#ef4444" : "#9ca3af"}"></span><span>${esc(item.name)}<small>${opened ? `3 classes · ${item.teachers} teachers` : `${item.teachers} teachers · open details`}</small></span><span class="inst-count">${opened ? `${item.logged}/${item.teachers}` : "Open"}</span><span class="inst-percent">${opened ? `${percent}%` : ""}</span></button>`;
    };

    const opened = filtered.filter((item) => item.logged > 0);
    const unopened = filtered.filter((item) => item.logged === 0);
    return `${opened.length ? `<div class="update-pill red">0-24% updated</div>${opened.map(renderRow).join("")}` : ""}${unopened.length ? `<div class="update-pill">Not opened yet</div>${unopened.map(renderRow).join("")}` : ""}`;
  }

  function panelItems() {
    let items = state.mode === "Teacher" ? teachers.map((name, index) => ({ id: name, name, tone: ["blue", "green", "purple", "cyan"][index % 4] })) : classes;
    const query = state.itemQuery.toLowerCase();
    items = items.filter((item) => item.name.toLowerCase().includes(query));
    if (state.sort === "A-Z") items = [...items].sort((a, b) => a.name.localeCompare(b.name));
    return items.map((item) => `<button class="demo-class-row ${item.tone || "blue"} ${(item.id === state.item || item.name === state.item) ? "active" : ""}" data-item="${esc(item.id)}"><span>›</span>${esc(item.name)}</button>`).join("") || '<div class="demo-empty">No result found.</div>';
  }

  function timeline() {
    const groups = groupedRows();
    if (!groups.length) return '<div class="demo-empty timeline-empty"><strong>No teaching entries</strong><span>Try a wider date range.</span></div>';
    return groups.map((group) => `<article class="day-card"><div class="day-head"><span>${esc(formatDateKey(group.dateKey))}</span><span class="line"></span><span>${group.rows.length} ${group.rows.length === 1 ? "entry" : "entries"} · ${formatDuration(group.minutes)}</span></div>${group.rows.map((row) => `<div class="entry"><div class="time">${row.start} - <span>${row.end}</span><span class="duration">${row.duration}</span></div><div class="entry-main"><div class="entry-top"><div class="entry-copy"><div class="entry-title"><span class="flag">Note</span><span class="status ${statusClass(row.status)}">● ${row.status}</span> ${esc(row.topic)}</div></div><div class="teacher">${esc(row.teacher)}</div></div><div class="meta-line"><span>${esc(row.subject)}</span><span class="class-badge">${esc(row.section)}</span></div><div class="entry-detail">${esc(row.detail)}</div></div></div>`).join("")}</article>`).join("");
  }

  function reportModal() {
    return state.report ? `<div class="demo-report-modal" data-close-report><div class="demo-report-dialog" role="dialog" aria-modal="true"><h3>Ledgr Report</h3><p>Prepare a sample report preview for ${esc(currentInstitute().name)}.</p><div class="demo-report-options">${["PDF", "Summary", "Teacher status"].map((format) => `<button data-format="${format}" class="${format === state.format ? "active" : ""}">${format}</button>`).join("")}</div><div class="demo-dialog-actions"><button data-cancel-report>Cancel</button><button class="primary" data-prepare-report>Prepare ${state.format}</button></div></div></div>` : "";
  }

  const panelLimits = {
    institutes: { min: 170, max: 430, collapsed: 44, layer: 112, default: 300 },
    classes: { min: 220, max: 560, collapsed: 46, layer: 124, default: 360 },
  };

  function responsivePanelLimits(key) {
    const limits = panelLimits[key];
    const width = root.clientWidth || window.innerWidth;
    if (width >= 900) return limits;
    const fraction = key === "institutes" ? 0.34 : 0.38;
    const responsiveMax = Math.max(limits.min, Math.min(limits.max, Math.round(width * fraction)));
    return { ...limits, max: responsiveMax, default: Math.min(limits.default, responsiveMax) };
  }

  function clampPanelWidth(key, value) {
    const limits = responsivePanelLimits(key);
    return Math.max(limits.collapsed, Math.min(limits.max, Number(value) || limits.default));
  }

  function desktopPanelLayout() {
    const width = root.clientWidth || window.innerWidth;
    const handle = window.matchMedia("(pointer: coarse)").matches || width < 900 ? 16 : 10;
    return {
      handle,
      institutes: clampPanelWidth("institutes", state.panelWidths.institutes),
      classes: clampPanelWidth("classes", state.panelWidths.classes),
    };
  }

  function panelLayer(key, label, eyebrow, metric) {
    const iconName = key === "institutes" ? "building" : "school";
    return `<button class="demo-panel-layer" data-expand-panel="${key}" aria-label="Expand ${key} panel"><span class="demo-panel-layer-icon">${icon(iconName)}</span><span class="demo-panel-layer-label">${esc(label)}</span><span class="demo-panel-layer-meta">${esc(eyebrow)}${metric ? `<b>${esc(metric)}</b>` : ""}</span></button>`;
  }

  function resizeHandle(key, width) {
    const limits = responsivePanelLimits(key);
    return `<div class="demo-panel-resizer" data-resize-panel="${key}" data-current-width="${width}" role="separator" aria-label="Resize ${key} panel" aria-orientation="vertical" aria-valuemin="${limits.collapsed}" aria-valuemax="${limits.max}" aria-valuenow="${width}" tabindex="0" title="Drag to resize this panel. Double-click to reset."><span></span></div>`;
  }

  function bindPanelResizers() {
    root.querySelectorAll("[data-resize-panel]").forEach((handle) => {
      const key = handle.dataset.resizePanel;
      const limits = responsivePanelLimits(key);

      handle.addEventListener("dblclick", () => {
        state.panelWidths[key] = limits.default;
        renderDesktop();
      });

      handle.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) return;
        event.preventDefault();
        const startX = event.clientX;
        const startWidth = Number(handle.dataset.currentWidth) || limits.default;
        let nextWidth = startWidth;
        root.classList.add("is-resizing");
        handle.setPointerCapture?.(event.pointerId);

        const move = (moveEvent) => {
          nextWidth = clampPanelWidth(key, startWidth + moveEvent.clientX - startX);
          state.panelWidths[key] = nextWidth;
          root.style.setProperty(key === "institutes" ? "--demo-institutes-w" : "--demo-classes-w", `${nextWidth}px`);
          handle.setAttribute("aria-valuenow", String(Math.round(nextWidth)));
        };

        const end = () => {
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", end);
          window.removeEventListener("pointercancel", end);
          root.classList.remove("is-resizing");
          if (nextWidth < limits.min) state.panelWidths[key] = limits.collapsed;
          renderDesktop();
        };

        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", end);
        window.addEventListener("pointercancel", end);
      });
    });
  }

  function renderDesktop() {
    const institute = currentInstitute();
    const selectedLabel = state.mode === "Teacher" ? state.item : currentClass().name;
    const layout = desktopPanelLayout();
    const institutesLayered = layout.institutes <= responsivePanelLimits("institutes").layer;
    const classesLayered = layout.classes <= responsivePanelLimits("classes").layer;
    const totalLogged = institutes.reduce((sum, item) => sum + item.logged, 0);
    const totalTeachers = institutes.reduce((sum, item) => sum + item.teachers, 0);

    root.style.setProperty("--demo-institutes-w", `${layout.institutes}px`);
    root.style.setProperty("--demo-classes-w", `${layout.classes}px`);
    root.style.setProperty("--demo-resizer-w", `${layout.handle}px`);

    const institutesPanel = institutesLayered
      ? panelLayer("institutes", institute.name, "Institute", `${institute.logged}/${institute.teachers}`)
      : `<section class="institutes"><div class="demo-institute-head"><div class="panel-head"><span>${institutes.length} institutes · today</span><span class="danger-count">${totalLogged}/${totalTeachers}</span></div>${searchBox("institute", "Search institutes", state.instituteQuery)}</div><div class="institute-list">${instituteRows()}</div></section>`;
    const classesPanel = classesLayered
      ? panelLayer("classes", selectedLabel, state.mode, String(classes.length))
      : `<section class="class-panel"><div class="demo-class-head-shell"><div class="demo-class-head"><div class="institute-title"><span>Institute</span><h2>${esc(institute.name)}</h2></div><span class="demo-head-count">${institute.logged}/${institute.teachers}</span></div><div class="tabs">${[["Class", "class"], ["Teacher", "teacher"], ["Class+teacher", "group"]].map(([mode, key]) => `<button class="tab ${state.mode === mode ? "active" : ""}" data-mode="${mode}">${icon(key)}<span>${mode}</span></button>`).join("")}</div>${searchBox("item", "Search class or teacher", state.itemQuery)}<div class="sort-row"><span>Sort</span><div class="demo-sort-toggle"><button data-sort="Recent" class="${state.sort === "Recent" ? "active" : ""}">Recent</button><button data-sort="A-Z" class="${state.sort === "A-Z" ? "active" : ""}">A-Z</button></div></div></div><div class="demo-class-label">${state.mode === "Teacher" ? "Teachers" : state.mode === "Class+teacher" ? "Class + teacher" : "Classes"}</div><div class="demo-class-list">${panelItems()}</div></section>`;
    const railItems = [["overview", "Teachers"], ["building", "Institutes"], ["books", "Syllabus"], ["school", "Sections"], ["settings", "Admins"], ["report", "Ledgr Report"], ["send", "Messenger"]];

    root.innerHTML = `<div class="mock-top"><div class="demo-top-left"><div class="demo-top-logo-cell"><span class="mock-rail-logo">L</span></div><div class="crumbs"><button data-focus-panel="institutes">Overview</button><span class="slash">/</span><button data-focus-panel="classes">${esc(institute.name)}</button><span class="slash">/</span><button data-focus-panel="timeline" class="current">${esc(selectedLabel)}</button></div></div><div class="demo-top-actions"><button class="report-button" data-report>${icon("report")} Ledgr Report</button></div></div><div class="mock-body"><aside class="icon-rail">${railItems.map(([key, label], index) => `<button class="rail-icon ${index === 5 ? "active" : ""}" title="${label}" aria-label="${label}" data-demo-action="Open ${label}">${icon(key)}</button>`).join("")}<span class="demo-rail-spacer"></span><button class="rail-icon" title="Feedback" aria-label="Feedback" data-demo-action="Open Feedback">${icon("message")}</button></aside>${institutesPanel}${resizeHandle("institutes", layout.institutes)}${classesPanel}${resizeHandle("classes", layout.classes)}<section class="timeline-panel"><div class="timeline-title"><h2>${esc(selectedLabel)}</h2><div class="demo-period-control">${periodButtons("range-pills")}</div></div><div class="timeline-card">${timeline()}</div></section></div>${reportModal()}`;
    bindPanelResizers();
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
    const groups = groupedRows();
    const title = mobileTimelineTitle();
    const days = groups.length ? groups.map((group) => `<article class="mobile-day-card"><header><span>${esc(formatDateKey(group.dateKey))}</span><strong>${group.rows.length} ${group.rows.length === 1 ? "entry" : "entries"} · ${formatDuration(group.minutes)}</strong></header>${group.rows.map((row) => `<section class="mobile-entry"><div class="mobile-entry-top"><strong>${row.start} - <span>${row.end}</span></strong><span>${esc(row.teacher)}</span></div><div class="mobile-entry-main"><div><span class="mobile-note">Note</span><span class="mobile-entry-status ${statusClass(row.status)}">● ${row.status}</span></div><h3>${esc(row.topic)}</h3></div><div class="mobile-entry-meta"><span>${esc(row.subject)}</span><span>${esc(row.section)}</span><strong>${row.duration}</strong></div><p>${esc(row.detail)}</p></section>`).join("")}</article>`).join("") : '<div class="demo-empty timeline-empty"><strong>No teaching entries</strong><span>Try a wider date range.</span></div>';
    return `<section class="mobile-timeline-title"><span>${esc(title.eyebrow)}</span><h2>${esc(title.title)}</h2><p>${esc(title.subtitle)}</p></section><div class="mobile-period-control">${periodButtons("mobile-periods")}</div><div class="mobile-timeline-days">${days}</div>`;
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
      rows: [["Lead Admin", "Owner · all institutes"], ["Operations Admin", "Reports and institutes"], ["Academic Admin", "Syllabus and sections"]],
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
    const motionClass = state.mobileDirection > 0 ? "mobile-slide-forward" : state.mobileDirection < 0 ? "mobile-slide-back" : "";
    root.innerHTML = `<div class="mobile-admin-demo ${motionClass}">${content}${mobileBottomNav()}${state.toast ? `<div class="mobile-demo-toast" role="status">${esc(state.toast)}</div>` : ""}</div>`;
    window.requestAnimationFrame(() => root.querySelector(".mobile-periods .active")?.scrollIntoView({ block: "nearest", inline: "center" }));
    state.mobileDirection = 0;
  }

  function render(fromPane = null) {
    phoneMedia.matches ? renderMobile() : renderDesktop(fromPane == null ? state.desktopPane : fromPane);
  }

  function showToast(message) {
    state.toast = message;
    render();
  }

  function handleMobileBack() {
    state.toast = "";
    state.mobileDirection = -1;
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
    const expandPanel = event.target.closest("[data-expand-panel]");
    if (expandPanel && !phoneMedia.matches) {
      const key = expandPanel.dataset.expandPanel;
      if (panelLimits[key]) state.panelWidths[key] = responsivePanelLimits(key).default;
      renderDesktop();
      return;
    }

    const focusPanel = event.target.closest("[data-focus-panel]");
    if (focusPanel && !phoneMedia.matches) {
      const key = focusPanel.dataset.focusPanel;
      if (panelLimits[key] && state.panelWidths[key] <= panelLimits[key].layer) {
        state.panelWidths[key] = responsivePanelLimits(key).default;
        renderDesktop();
      }
      return;
    }

    const desktopPane = event.target.closest("[data-desktop-pane]");
    if (desktopPane && !phoneMedia.matches) {
      const fromPane = state.desktopPane;
      state.desktopPane = Math.max(0, Math.min(2, Number(desktopPane.dataset.desktopPane) || 0));
      render(fromPane);
      return;
    }

    const mobileNav = event.target.closest("[data-mobile-nav]");
    if (mobileNav) {
      const target = mobileNav.dataset.mobileNav;
      state.toast = "";
      state.mobileDirection = target === "home" ? -1 : 1;
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
      state.mobileDirection = 1;
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
        state.mobileDirection = 1;
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
      const fromPane = state.desktopPane;
      state.institute = institute.dataset.institute;
      if (phoneMedia.matches) {
        state.mobileSurface = "home";
        state.mobilePane = "classes";
        state.mobileDirection = 1;
        state.mode = "Class";
        state.item = classes[0].id;
        state.itemQuery = "";
        render();
      } else {
        state.desktopPane = 1;
        render(fromPane);
      }
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
      state.mobileDirection = 1;
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
      state.mobileDirection = 1;
      render();
      return;
    }

    const item = event.target.closest("[data-item]");
    if (item) {
      const fromPane = state.desktopPane;
      state.item = item.dataset.item;
      if (phoneMedia.matches) {
        state.timelineScope = "class";
        state.mobilePane = "timeline";
        state.mobileDirection = 1;
        render();
      } else {
        state.timelineScope = state.mode === "Teacher" ? "teacher" : state.mode === "Class+teacher" ? "pair" : "class";
        state.desktopPane = 2;
        render(fromPane);
      }
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
      state.mobileDirection = 1;
      render();
      return;
    }

    const teacherClass = event.target.closest("[data-teacher-class]");
    if (teacherClass) {
      state.item = teacherClass.dataset.teacherClass;
      state.mode = "Class+teacher";
      state.timelineScope = "pair";
      state.mobileTeacherView = "timeline";
      state.mobileDirection = 1;
      render();
      return;
    }

    if (event.target.closest("[data-teacher-timeline]")) {
      state.mode = "Teacher";
      state.item = currentTeacher().name;
      state.timelineScope = "teacher";
      state.mobileTeacherView = "timeline";
      state.mobileDirection = 1;
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

  root.addEventListener("change", (event) => {
    if (event.target.matches("[data-range-start]")) {
      state.rangeStart = event.target.value || state.rangeStart;
      if (state.rangeStart > state.rangeEnd) state.rangeEnd = state.rangeStart;
      render();
    }
    if (event.target.matches("[data-range-end]")) {
      state.rangeEnd = event.target.value || state.rangeEnd;
      if (state.rangeEnd < state.rangeStart) state.rangeStart = state.rangeEnd;
      render();
    }
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.report) {
      state.report = false;
      render();
      return;
    }
    const resizeHandle = event.target.closest("[data-resize-panel]");
    if (!phoneMedia.matches && resizeHandle && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      const key = resizeHandle.dataset.resizePanel;
      const limits = responsivePanelLimits(key);
      event.preventDefault();
      if (event.key === "Home") state.panelWidths[key] = limits.collapsed;
      else if (event.key === "End") state.panelWidths[key] = limits.default;
      else state.panelWidths[key] = clampPanelWidth(key, (Number(resizeHandle.dataset.currentWidth) || limits.default) + (event.key === "ArrowRight" ? 12 : -12));
      renderDesktop();
    }
  });

  if (phoneMedia.addEventListener) phoneMedia.addEventListener("change", render);
  else phoneMedia.addListener(render);
  let resizeFrame = 0;
  window.addEventListener("resize", () => {
    if (phoneMedia.matches || resizeFrame) return;
    resizeFrame = window.requestAnimationFrame(() => {
      resizeFrame = 0;
      renderDesktop();
    });
  });
  render();
})();

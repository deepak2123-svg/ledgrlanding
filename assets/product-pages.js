const demoModal = document.querySelector("#demoModal");
const closeDemo = document.querySelector("#closeDemo");
const openDemoButtons = document.querySelectorAll(".open-demo");
const contactForm = document.querySelector("#contactForm");
const submitButton = document.querySelector("#submitButton");
const formStatus = document.querySelector("#formStatus");

const setDemoOpen = (open) => {
  if (!demoModal) return;
  demoModal.classList.toggle("open", open);
  demoModal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open);
  if (open) {
    setTimeout(() => document.querySelector("#name")?.focus(), 50);
  }
};

openDemoButtons.forEach((button) => {
  button.addEventListener("click", () => setDemoOpen(true));
});

const openDemoFromHash = () => {
  if (window.location.hash === "#demo") setDemoOpen(true);
};

window.addEventListener("hashchange", openDemoFromHash);
openDemoFromHash();

if (closeDemo) {
  closeDemo.addEventListener("click", () => setDemoOpen(false));
}

if (demoModal) {
  demoModal.addEventListener("click", (event) => {
    if (event.target === demoModal) setDemoOpen(false);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setDemoOpen(false);
  }
});

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.textContent = "";
    formStatus.className = "form-status";

    const payload = Object.fromEntries(new FormData(contactForm).entries());
    const requiredMissing = !payload.name?.trim() || !payload.phone?.trim() || !payload.instituteName?.trim();

    if (requiredMissing) {
      formStatus.textContent = "Please add your name, phone and institute name.";
      formStatus.classList.add("error");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Could not send your request right now.");
      }

      contactForm.reset();
      formStatus.textContent = "Thanks. We received your request and will get back to you.";
      formStatus.classList.add("success");
    } catch (error) {
      formStatus.textContent = error.message || "Could not send your request right now.";
      formStatus.classList.add("error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send request";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const cta = document.getElementById("cta");
  cta.addEventListener("click", () => {
    alert("Hello from MyCopilotDemo!");
  });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    console.log("Contact submit", { name, email });
    alert(`Thanks, ${name}! We'll be in touch at ${email}.`);
    form.reset();
  });

  // Demo counter
  const demoBtn = document.getElementById("demoBtn");
  const demoCount = document.getElementById("demoCount");
  let count = 0;
  if (demoBtn && demoCount) {
    demoBtn.addEventListener("click", () => {
      count += 1;
      demoCount.textContent = `Clicked ${count} times`;
    });
  }
});

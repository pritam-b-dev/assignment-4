let totalJobs = document.getElementById("total-jobs");
let totalInterviews = document.getElementById("total-interviews");
let totalRejects = document.getElementById("total-rejects");
let availJobs = document.getElementById("avail-jobs");
let jobCards = document.getElementById("job-cards");

function showTotalNumbersOfJobsSelectReject() {
  totalJobs.innerText = jobCards.children.length;
  availJobs.innerText = jobCards.children.length;
}
showTotalNumbersOfJobsSelectReject();

// toggle buttons
let buttons = document.querySelectorAll("#btn-tab button");
console.log(buttons);
for (let button of buttons) {
  button.addEventListener("click", function () {
    for (btn of buttons) {
      btn.classList.remove("bg-blue-500", "text-white");
      btn.classList.add("bg-white", "text-[#64748B]");
    }
    button.classList.remove("bg-white", "text-[#64748B]");
    button.classList.add("bg-blue-500", "text-white");
  });
}

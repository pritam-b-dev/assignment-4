let totalJobs = document.getElementById("total-jobs");
let totalInterviews = document.getElementById("total-interviews");
let totalRejects = document.getElementById("total-rejects");
let availJobs = document.getElementById("avail-jobs");
let jobCards = document.getElementById("job-cards");
let mainContainer = document.querySelector("main");
let btnAll = document.getElementById("btn-all");
let btnInterview = document.getElementById("btn-interview");
let btnRejected = document.getElementById("btn-rejected");
let interviewArr = [];
let rejectedArr = [];
let interviewSection = document.getElementById("interviews-section");

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

//add and show the job cards to interview and rejected buttons when clicked.

mainContainer.addEventListener("click", function (event) {
  const parent = event.target.parentNode;

  const company = parent.querySelector(".company").innerText;
  const position = parent.querySelector(".position").innerText;
  const salary = parent.querySelector(".salary").innerText;
  const status = parent.querySelector(".status").innerText;
  const description = parent.querySelector(".description").innerText;

  const jobInfo = {
    company,
    position,
    salary,
    status,
    description,
  };

  const exist = interviewArr.find((item) => item.company === jobInfo.company);
  if (!exist) {
    interviewArr.push(jobInfo);
  }
});

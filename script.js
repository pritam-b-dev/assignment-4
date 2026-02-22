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
  totalInterviews.innerText = interviewArr.length;
}
showTotalNumbersOfJobsSelectReject();

// toggle buttons
let buttons = document.querySelectorAll("#btn-tab button");
for (let button of buttons) {
  button.addEventListener("click", function () {
    for (btn of buttons) {
      btn.classList.remove("bg-blue-500", "text-white");
      btn.classList.add("bg-white", "text-[#64748B]");
    }
    button.classList.remove("bg-white", "text-[#64748B]");
    button.classList.add("bg-blue-500", "text-white");
    if (button.classList.contains("btnInterviewTab")) {
      jobCards.classList.add("hidden");
      interviewSection.classList.remove("hidden");
    } else if (button.classList.contains("btnAllTab")) {
      jobCards.classList.remove("hidden");
      interviewSection.classList.add("hidden");
    }
  });
}

//add and show the job cards to interview and rejected buttons when clicked.

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parent = event.target.parentNode;

    const company = parent.querySelector(".company").innerText;
    const position = parent.querySelector(".position").innerText;
    const salary = parent.querySelector(".salary").innerText;
    const status = parent.querySelector(".status").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".status").innerText = "Interview";
    const jobInfo = {
      company,
      position,
      salary,
      status: "Interview",
      description,
    };

    const exist = interviewArr.find((item) => item.company === jobInfo.company);

    if (!exist) {
      interviewArr.push(jobInfo);
    }
    showTotalNumbersOfJobsSelectReject();
    renderInterview();
  }
});

function renderInterview() {
  interviewSection.innerHTML = "";
  for (let interview of interviewArr) {
    let div = document.createElement("div");
    div.className = "card bg-white shadow-sm rounded-md p-4 mb-4";
    div.innerHTML = `
    <div class="job-title flex justify-between">
            <div>
              <h1 class="company font-semibold text-xl">${interview.company}</h1>
              <p class="position text-[#64748B]">${interview.position}</p>
            </div>
            <button class="cursor-pointer">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <p class="salary text-[14px] text-[#64748B]">
            ${interview.salary}
          </p>
          <button class="status p-2 rounded-md bg-[#EEF4FF]">
            ${interview.status}
          </button>
          <p class="description text-[#323B49] text-[14px]">
            ${interview.description}
          </p>
          <br />
          <button
            class="text-green-500 border border-green-500 py-2 px-3 mr-4 rounded-md cursor-pointer"
          >
            interview
          </button>
          <button
            class="text-red-500 border border-red-500 py-2 px-3 rounded-md cursor-pointer"
          >
            Rejected
          </button>
    `;
    interviewSection.appendChild(div);
  }
}

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
let rejectedSection = document.getElementById("rejected-section");
let currentStatus = "";

function showTotalNumbersOfJobsSelectReject() {
  totalJobs.innerText = jobCards.children.length;
  availJobs.innerText = jobCards.children.length;
  totalInterviews.innerText = interviewArr.length;
  totalRejects.innerText = rejectedArr.length;

  if (currentStatus === "interview") {
    availJobs.innerText =
      interviewArr.length + " of " + jobCards.children.length;
  } else if (currentStatus === "reject") {
    availJobs.innerText =
      rejectedArr.length + " of " + jobCards.children.length;
  } else {
    availJobs.innerText = jobCards.children.length;
  }
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
    currentStatus = button.className;
    button.classList.remove("bg-white", "text-[#64748B]");
    button.classList.add("bg-blue-500", "text-white");
    if (button.classList.contains("btnInterviewTab")) {
      currentStatus = "interview";
      jobCards.classList.add("hidden");
      rejectedSection.classList.add("hidden");
      interviewSection.classList.remove("hidden");
      renderInterview();
    } else if (button.classList.contains("btnAllTab")) {
      currentStatus = "all";
      jobCards.classList.remove("hidden");
      rejectedSection.classList.add("hidden");
      interviewSection.classList.add("hidden");
    } else if (button.classList.contains("btnRejectTab")) {
      currentStatus = "reject";
      jobCards.classList.add("hidden");
      rejectedSection.classList.remove("hidden");
      interviewSection.classList.add("hidden");
      renderRejected();
    }
    showTotalNumbersOfJobsSelectReject();
  });
}

//add and show the job cards to interview and rejected buttons when clicked.

mainContainer.addEventListener("click", function (event) {
  if (event.target.closest(".fa-trash-can")) {
    const card = event.target.closest(".card");
    const company = card.querySelector(".company").innerText;
    card.remove();

    interviewArr = interviewArr.filter((item) => item.company !== company);
    rejectedArr = rejectedArr.filter((item) => item.company !== company);

    const allCards = jobCards.children;
    for (let card of allCards) {
      const cardCompany = card.querySelector(".company").innerText;
      if (cardCompany === company) {
        card.querySelector(".status").innerHTML = `<div class="status"></div>`;
      }
    }

    renderRejected();
    renderInterview();
    showTotalNumbersOfJobsSelectReject();
  }

  // when clicked in Interview Button on a card
  if (event.target.classList.contains("interview-btn")) {
    const parent = event.target.parentNode;

    const company = parent.querySelector(".company").innerText;
    const position = parent.querySelector(".position").innerText;
    const salary = parent.querySelector(".salary").innerText;
    const status = parent.querySelector(".status").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".status").innerHTML = `
            <button
            class="interview-btn text-green-500 border border-green-500 px-1 rounded-sm"
            >
            interview
            </button>
    `;
    const jobInfo = {
      company,
      position,
      salary,
      status: `
            <button
            class="interview-btn text-green-500 border border-green-500 px-1 rounded-sm"
            >
            interview
            </button>
    `,
      description,
    };

    const exist = interviewArr.find((item) => item.company === jobInfo.company);

    if (!exist) {
      interviewArr.push(jobInfo);
    }

    rejectedArr = rejectedArr.filter(
      (item) => item.company !== jobInfo.company,
    );

    showTotalNumbersOfJobsSelectReject();
    if (currentStatus == "reject") {
      renderRejected();
    }
  }

  // when clicked in Reject Button on a card
  else if (event.target.classList.contains("rejected-btn")) {
    const parent = event.target.parentNode;

    const company = parent.querySelector(".company").innerText;
    const position = parent.querySelector(".position").innerText;
    const salary = parent.querySelector(".salary").innerText;
    const status = parent.querySelector(".status").innerText;
    const description = parent.querySelector(".description").innerText;
    parent.querySelector(".status").innerHTML = `
            <button
            class="interview-btn text-red-500 border border-red-500 px-1 rounded-sm"
            >
            Rejected
            </button>
    `;
    const jobInfo = {
      company,
      position,
      salary,
      status: `
            <button
            class="interview-btn text-red-500 border border-red-500 px-1 rounded-sm"
            >
            Rejected
            </button> 
            `,
      description,
    };

    const exist = rejectedArr.find((item) => item.company === jobInfo.company);

    if (!exist) {
      rejectedArr.push(jobInfo);
    }
    interviewArr = interviewArr.filter(
      (item) => item.company !== jobInfo.company,
    );

    showTotalNumbersOfJobsSelectReject();
    if (currentStatus == "interview") {
      renderInterview();
    }
  }
});

//rendering data after select Interview button and Showing data to the Interview Tab
function renderInterview() {
  interviewSection.innerHTML = "";

  if (interviewArr.length === 0) {
    let empty = document.createElement("div");
    empty.innerHTML = `
    <div class="bg-white shadow-sm rounded-md p-10 text-center">
      <img class="w-[100px] h-[100px] mx-auto" src="file.png" alt="" />
      <p class="font-bold text-2xl">No jobs available</p>
      <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    </div>
    `;
    interviewSection.appendChild(empty);
  } else if (interviewArr.length > 0) {
    for (let interview of interviewArr) {
      let div = document.createElement("div");
      div.className = "card bg-white shadow-sm rounded-md p-4 mb-4 space-y-2";
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
          <div class="status">${interview.status}</div>
          <p class="description text-[#323B49] text-[14px]">
            ${interview.description}
          </p>
          <button
            class="interview-btn text-green-500 border border-green-500 py-2 px-3 mr-4 rounded-md cursor-pointer hover:bg-green-100"
          >
            interview
          </button>
          <button
            class="rejected-btn text-red-500 border border-red-500 py-2 px-3 rounded-md cursor-pointer hover:bg-red-100"
          >
            Rejected
          </button>
    `;
      interviewSection.appendChild(div);
    }
  }
}

function renderRejected() {
  rejectedSection.innerHTML = "";

  if (rejectedArr.length === 0) {
    let empty = document.createElement("div");
    empty.innerHTML = `
    <div class="bg-white shadow-sm rounded-md p-10 text-center">
      <img class="w-[100px] h-[100px] mx-auto" src="file.png" alt="" />
      <p class="font-bold text-2xl">No jobs available</p>
      <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    </div>
    `;
    rejectedSection.appendChild(empty);
  } else if (rejectedArr.length > 0) {
    for (let rejected of rejectedArr) {
      let div = document.createElement("div");
      div.className = "card bg-white shadow-sm rounded-md p-4 mb-4 space-y-2";
      div.innerHTML = `
    <div class="job-title flex justify-between">
            <div>
              <h1 class="company font-semibold text-xl">${rejected.company}</h1>
              <p class="position text-[#64748B]">${rejected.position}</p>
            </div>
            <button class="cursor-pointer">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
          <p class="salary text-[14px] text-[#64748B]">
            ${rejected.salary}
          </p>
          <div class="status">${rejected.status}</div>
          <p class="description text-[#323B49] text-[14px]">
            ${rejected.description}
          </p>
          <button
            class="interview-btn text-green-500 border border-green-500 py-2 px-3 mr-4 rounded-md cursor-pointer hover:bg-green-100"
          >
            interview
          </button>
          <button
            class="rejected-btn text-red-500 border border-red-500 py-2 px-3 rounded-md cursor-pointer hover:bg-red-100"
          >
            Rejected
          </button>
    `;
      rejectedSection.appendChild(div);
    }
  }
}

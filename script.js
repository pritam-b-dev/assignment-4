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

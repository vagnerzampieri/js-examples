export async function fetchData() {
  const response = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
  const records = await response.json();

  console.log(records);
  let record = records.data[0];

  document.getElementById("date")!.innerHTML = record.date;
  document.getElementById("areaName")!.innerHTML = record.areaName;
  document.getElementById("latestBy")!.innerHTML = record.latestBy;
  document.getElementById("deathNew")!.innerHTML = record.deathNew;
}
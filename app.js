const Data = {
  user: "Rex",
  revenue: 5000,
  alert: "High",
};

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Data.user);
    }, 1000);
  });
}

function getRevenue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed to fetch revenue data");
    }, 2000);
  });
}

function getAlert() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Data.alert);
    }, 1500);
  });
}

async function loadKleanDashboard() {
  const allResults = await Promise.allSettled([
    getUser(),
    getRevenue(),
    getAlert(),
  ])
    const results = allResults
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  console.log("Klean Dashboard loaded with data:", results);
  return results;
}
loadKleanDashboard();
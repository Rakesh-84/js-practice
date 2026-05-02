
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Rex", company: "KleanDash" });
    }, 1000);
  });
}

// Your task:
// Write an async function called showUser
// Use await to get the user from getUser()
// Then console.log the user's name
async function showUser() {
  const user = await getUser();
  console.log(user.name);
}

function getDashboards(company) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["BizDash", "SalesDev", "OmniTask"]), 1000);
  });
}

async function showDashboards() {
  const user = await getUser();
  const dashboards = await getDashboards(user.company);
  console.log(dashboards);
  console.log(user.name)
}


function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("User not found"), 1000);
  });
}

async function showUser() {
  try {
    const user = await getUser();


    
  } catch (error) {
    console.error(error);
  }
}
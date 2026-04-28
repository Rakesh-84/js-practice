function fetchUserStats() {
  return
  new Promise(resolve, reject) =>{
    setTimeout(() =>
    resolve("state uploaded"),1000)
  }
.then(() => {
    console.log("state uploaded")
  })
    .catch((error) => {
    console.error("Error fetching user stats:", error)
  })
  .finally(() => {
    console.log("fetching user stats complete")
  })
}
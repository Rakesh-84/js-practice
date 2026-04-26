async function getUserID(userid) {
  if (typeof userid !== "number"){
    throw new Error ("user id must be a number")

  }
try {
  const response = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!response.ok){
    throw new Error ("server error" + response.status)
  }
  const data = await response.json()
  console.log (data)

} catch (error) {
  console.log ("something went wrong", error.message)
}


finally {console.log ("fetch complete")}


}


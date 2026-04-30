async function loadProfile() {
  const getUserID = (token) => {
    return new Promise((resolve) => {
      resolve fetch profile("api/user/profile");
      .then fetch (json)
      .then((Profile) => {
        console.log(profile);
      });
    });
  };
}
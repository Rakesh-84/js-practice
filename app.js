function getUserID(token) {
  if (token === "valid-token") {
    return function userProfile() {
      const profile = fetch ('/api/profile')
        .then(res => res.json());
      return profile;
    }
  }
}
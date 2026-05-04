async function refresh() {
  {setLoading(true);
  try {
    const data = await fetch("/api/refresh");
    if (data.ok) {
      console.log("Refreshed");
    } else {
      console.error("Failed to refresh:", data.statusText);
    }
  } catch (error) {
    console.error("Error occurred while refreshing:", error);
  }
}
  finally {
    setLoading(false);
    console.log("Finished refresh");
}
}

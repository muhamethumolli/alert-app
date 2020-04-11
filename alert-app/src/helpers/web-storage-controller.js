export const setUser = (token) => {
  try {
    const detailsJSON = JSON.stringify(token);
    localStorage.setItem("__uid", detailsJSON);
  } catch (error) {
    return null;
  }
};

export const getUser = (_) => {
  try {
    const detailsJSON = localStorage.getItem("__uid");
    return JSON.parse(detailsJSON);
  } catch (error) {}
};

//TODO: add scroll offset for navbar
export const scrollIntoViewWithID = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const scrollIntoViewWithOffset = (id) => {
  const element = document.getElementById(id);
  const windowWidth = window.innerWidth;
  //might need to change this
  //add a ternary operator that changes navbar height according to window height
  // const navBarOffset = -128;
  const navBarOffset =
    windowWidth >= 1024 ? -108 : windowWidth > 640 ? -80 : -96;
  const y = element.getBoundingClientRect().top + window.scrollY + navBarOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

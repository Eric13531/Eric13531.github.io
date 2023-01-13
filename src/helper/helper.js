export const theme = (bool) => {
  if (bool) {
    return {
      bg: "white",
      src: "/sun.png",
      head1: "grey",
      head2: "grey",
      head3: "grey",
      head4: "grey",
      h1fontz: "black",
      h2fontz: "black",
      bodyfontz: "black",
      linkz: "dark grey",
      visitz: "dark grey",
      hoverz: "black",
      activez: "green",
      filter: "none",
      sectiontitle: "black",
      projbg: "grey",
      projbody: "grey",
      projsub: "grey",
      concol: "white",
      congrad: "light grey",
      conlink: "pink",
      conhover: "pink",
      convis: "#aa336a",
      conact: "d70040",
      contacttest: "light grey",

      darklink: "dark",
      darktext: "darktext",
    };
  } else {
    return {
      bg: "#001a2b",
      src: "/moon.png",
      head1: "rgba(0, 26, 43, 1) 0%",
      head2: "rgba(9, 35, 63, 1) 0%",
      head3: "rgba(34, 63, 122, 1) 100%",
      head4: "rgba(42, 72, 139, 1) 100%",
      h1fontz: "#f1f1ef",
      h2fontz: "#e7f2fa",
      //card, projcard uses bodyfontz
      //projtitle, concard (title)
      bodyfontz: "#e7f2fa",
      linkz: "#55bed7",
      visitz: "#55bed7",
      hoverz: "#b4eaee",
      activez: "#0a467e",
      //brightness here
      filter: "",
      //about, projects, contact title
      sectiontitle: "#f7f9fc",
      projbg: "#215f65",
      //context2 too
      projbody: "#b0e7ee",
      projsub: "#263548",
      concol: "rgba(0, 26, 43, 1) 0%",
      congrad: "rgba(37, 45, 68, 1) 100%",
      conlink: "pink",
      conhover: "pink",
      convis: "#aa336a",
      conact: "d70040",
      contacttest: "#cbdce1",
      darklink: "",
      darktext: "",
    };
  }
};

export const theme = (bool) => {
  if (bool) {
    return {
      bg: "#F0EFF4",
      src: "/sun.png",
      head1: "#e6d6e1",
      head2: "#e6d6e1",
      head3: "#d5aec2",
      head4: "#d5aec2",
      h1fontz: "#02020A",
      h2fontz: "#02020A",
      bodyfontz: "#02020A",
      cardtitle: "#02020A",
      linkz: "dark grey",
      visitz: "dark grey",
      hoverz: "black",
      activez: "green",
      filter: "brightness(-50%)",
      sectiontitle: "black",
      projbg: "#C6C1D7",
      // possible"
      // 6E8387 928C6F
      // 5B85AA
      projbody: "#02020A",
      projsub: "#890620",
      concol: "#F0EFF4",
      congrad: "#d5aec2",
      conlink: "pink",
      conhover: "pink",
      convis: "#aa336a",
      conact: "d70040",
      contacttext: "#02020A",

      darklink: "dark",
      darktext: "darktext",

      projstar: "#e3c9d6",
      projend: "#C6C1D7",

      condeg: 300,

      imginvert: "0%",
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
      cardtitle: "#e4fcff",
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
      projsub: "#6c909d",
      concol: "rgba(0, 26, 43, 1) 0%",
      congrad: "rgba(37, 45, 68, 1) 100%",
      conlink: "pink",
      conhover: "pink",
      convis: "#aa336a",
      conact: "d70040",
      contacttext: "#b0e7ee",
      darklink: "",
      darktext: "",

      projstar: "#052433",
      projend: "#1c6d75",

      condeg: 120,

      imginvert: "85%",
    };
  }
};

// sun color:
// F3A712

tailwind.config = {
    theme: {
      colors: {
        primary: "#263238",
        secondary: "#ff8c92",
        box: "#f2f2f2",
        content: "#4e4e4e",
        pinkBackground: "#fdf1fd",
        whiteBackground: "#f2f2f2",
        primaryLightBackground: "#f3eaeb",
        lightGrayBackground: "#f2f6f7",
        white: "#fff",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: [
          "clamp(2rem, 1.786vw + 1.643rem, 2.5rem)",
          {
            lineHeight: "clamp(2.6rem, 2.321vw + 2.136rem, 3.25rem)",
            fontWeight: "700",
          },
        ],
        h2: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h3: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h4: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h6: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        body: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        list: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        link: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        quote: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        button: [
          "1.125rem",
          {
            lineHeight: "1.6875rem",
            fontWeight: "500",
          },
        ],
      },
      extend: {
        aspectRatio: {
          "hrect": "4 / 3",
          "vrect": "3 / 4",
        },
      },
    },
  };
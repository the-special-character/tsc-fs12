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
        "clamp(1.75rem, 1.563vw + 1.438rem, 2.188rem)",
        {
          lineheight: "clamp(2.275rem, 2.031vw + 1.869rem, 2.844rem)",
          fontWeight: "700",
        },
      ],

      h3: [
        "clamp(1.625rem, 0.893vw + 1.446rem, 1.875rem)",
        {
          lineHeight: " clamp(2.275rem, 1.25vw + 2.025rem, 2.625rem)",
          fontWeight: "700",
        },
      ],

      h4: [
        "clamp(1.5rem, 0.893vw + 1.321rem, 1.75rem)",
        {
          lineHeight: "clamp(2.1rem, 1.25vw + 1.85rem, 2.45rem)",
          fontWeight: "700",
        },
      ],
      h5: [
        "clamp(1.375rem, 0.893vw + 1.196rem, 1.625rem)",
        {
          lineHeight: "clamp(2.063rem, 1.339vw + 1.795rem, 2.438rem)",
          fontWeight: "700",
        },
      ],
      h6: [
        "clamp(1.25rem, 0.446vw + 1.161rem, 1.375rem)",
        {
          lineHeight: "clamp(1.875rem, 0.67vw + 1.741rem, 2.063rem)",
          fontWeight: "700",
        },
      ],
      p: [
        "clamp(1.063rem, 0vw + 1.063rem, 1.063rem)",
        {
          lineHeight: "clamp(1.594rem, 0vw + 1.594rem, 1.594rem)",
          fontWeight: "400",
        },
      ],
      list: [
        "clamp(1.063rem, 0.223vw + 1.018rem, 1.125rem)",
        {
          lineHeight: "clamp(1.594rem, 0.335vw + 1.527rem, 1.688rem)",
          fontWeight: "400",
        },
      ],
      link: [
        "clamp(1rem, 0.446vw + 0.911rem, 1.125rem)",
        {
          lineHeight: "clamp(1.5rem, 0.67vw + 1.366rem, 1.688rem)",
          fontWeight: "400",
        },
      ],
      quote: [
        "clamp(1.25rem, 0.446vw + 1.161rem, 1.375rem)",
        {
          lineHeight: "clamp(1.875rem, 0.67vw + 1.741rem, 2.063rem)",
          fontWeight: "300",
        },
      ],
      button: [
        "clamp(1.125rem, 0vw + 1.125rem, 1.125rem)",
        {
          lineHeight: "clamp(1.688rem, 0vw + 1.688rem, 1.688rem)",
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
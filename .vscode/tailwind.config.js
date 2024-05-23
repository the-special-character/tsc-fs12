/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            primary: "#263238",
            secondary: "#ff8c92",
            box: "#f2f2f2",
            content: "#f2f2f2",
            pinkBcakground: "#fdf1fd",
            whiteBackgrond: "#f2f2f2",
            primrylightBackground: "#f3eab",
            lightgrayBackground: "#f2f6f7",
          },
          fontFamily: [
            {
              title: "open-sans, sans-serif",
              body: "Inter, sans-serif",
            },
          ],
          fontSize: {
            fontSize: {
              h1: [
                "2.5rem",
                {
                  lineHeight: "2rem",
                  letterSpacing: "-0.01em",
                  fontWeight: "500",
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
                "1.875rem",
                {
                  lineHeight: "2.25rem",
                  letterSpacing: "-0.02em",
                  fontWeight: "700",
                },
              ],
            },
      extend: {},
    },
    plugins: [],
  } 

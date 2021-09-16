module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gum_pink: "#FF808F",
      },
      backgroundImage: (theme) => ({
        top_bar: "url('images/top_bar.svg')",
        bottom_bar: "url('images/bottom_bar.svg')",
        background_image: "url('images/background.svg')",
        background_image_creative_mode: "url('images/background-cm.svg')",
        option_1_name_bg: "url('images/option-1-name/bg.svg')",
        text_bg_creative_mode: "url('images/cm-options/text-bg.svg')",
      }),
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

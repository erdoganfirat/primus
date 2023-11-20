import "../stories/assets/icon/style.css";
import "../stories/docs/docs.scss";
import "../stories/scss/fonts/fonts.scss";




/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      layout: 'fullscreen',
      toc: {
        disable: true, // 👈 Disables the table of contents
        unsafeTocbotOptions: {
          tocSelector: '.js-toc-content', 
          contentSelector: '.react-tabs__tab-panel--selected', 
          headingSelector: 'h1, h2, h3, h4, h5', 
          orderedList: true,
          hasInnerContainers: true,
          scrollSmoothOffset: -10,
          onClick: function (e) {
              e.preventDefault();
          }
        },
      },
    },
    options: {
      storySort: {
        includeNames: true,
        order: ['Overview','Design System', ['*', 'Components']],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
 
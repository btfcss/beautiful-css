import "/css/classic/classic.css";
import hljs from "highlight.js";
import 'highlight.js/styles/tokyo-night-dark.min.css';


hljs.highlightAll({ showLanguageLabel: true });
//hljs.highlightBlock(block, {showLanguageLabel: true});

// Get system color scheme (return light ot dark)
function getSystemTheme() {
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
}
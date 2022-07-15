import { createGlobalStyle } from "styled-components";
import { colors, space } from "./Theme";

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  scroll-behavior: smooth;
}

a {
  color: unset;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  background: ${colors["background-azul/primary-base"]};
}

p {
  color: ${colors["cinza/neutral"]};
  line-height: 30px;
}

h1, h2, h3, h4, h5, h6 {
  color: ${colors["white/neutral-0"]}
}

h2 {
  font-size: 2.5rem;
}

section {
  padding-top: 150px;
}

footer {
  padding-bottom: ${space[1]}px;
  padding-top: ${space[10]}px;
  /* border-top: 1px solid ${colors["borda/azul-escuro"]}; */
}

.primary-btn {
    background: ${colors["azul-escuro/secondary-base"]};
    padding: ${space[1]}px ${space[2]}px;
    border: 1px solid ${colors["verde-claro"]};
    border-radius: 5px;

    a {
      text-decoration: none;
      color: ${colors["verde-claro"]};
      background: ${colors["transparent"]};
    }

    &:hover {
      background-color: ${colors["verde-escuro"]};
    }
}  

.secondary-btn {
  background: ${colors["transparent"]};
    border: none;
    outline: none;
    padding: ${space[1]}px ${space[3]}px;

    a {
      color: ${colors["verde-claro"]};
    }
}

/* 
.primary-btn {
  background: ${colors["azul-escuro/secondary-base"]};
  padding: ${space[1]}px ${space[2]}px;
  border: 1px solid ${colors["verde-claro"]};
}  

.primary-btn a {
  text-decoration: none;
  color: ${colors["verde-claro"]};
  background: ${colors["transparent"]};
}

.secondary_btn {
  background: ${colors["transparent"]};
  border: none;
  outline: none;
  padding: ${space[1]}px ${space[3]}px;
}

.secondary_btn a {
  color: ${colors["verde-claro"]};
}

.primary_btn a:hover, .secondary_btn a:hover {
  color: unset;
}

  */

`;

export default GlobalStyle;

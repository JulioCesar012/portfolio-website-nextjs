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

::-webkit-scrollbar {
  width: ${space[1]}px;
  background: ${colors["cinza/neutral"]};
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  border: ${space[1]}px solid ${colors["azul-escuro/secondary-base"]};
  background: ${colors["scrollbar-border"]};
}

.header_shrink {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      line-height: 80px;
      box-shadow: ${space[1]}px ${space[1]}px 15px -${space[1]}px ${colors["verde-escuro"]} !important;
      z-index: 9999;
    }

.active_menu {
    display: block;
}

@media only screen and (max-width: 992px) {
  p {
    font-size: .9rem;

  }

  .primary-btn a, .secondary-btn a {
    font-size: .9rem;
  }
}

/*
.primary-btn a {
  text-decoration: none;
  color: ${colors["verde-claro"]};
  background: ${colors["transparent"]};
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

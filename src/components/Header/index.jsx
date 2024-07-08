import S from "./styles";

import Link from "next/link";
import { Container } from "reactstrap";
import { useEffect, useRef, useState } from "react";

const NAV_LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#study",
    display: "Study",
  },
  {
    path: '/blog',
    // path: "https://medium.com/@juliofilho12",
    display: "Blog",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header_shrink");
      return;
    }
    return headerRef.current.classList.remove("header_shrink");
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active_menu");

  return (
    <S.Header ref={headerRef}>
      <Container style={{ zIndex: 10 }}>
        <S.Wrapper>
          <S.Logo>
            <S.Title>
              <S.SlugTitle>Dev.</S.SlugTitle>Julio
            </S.Title>
          </S.Logo>

          <S.Navigation ref={menuRef}>
            <S.CloseButton onClick={toggleMenu}>
              <i className="ri-close-fill"></i>
            </S.CloseButton>
            <S.NavMenu onClick={toggleMenu}>
              {NAV_LINK.map((item, index) => (
                <Link href={`${item.path}`} key={index}>
                  {item.display}
                </Link>
              ))}

              <S.NavRight>
                <S.Phone className="d-flex align-items-center gap-2 mb-0" href="https://bit.ly/ContatoJulioFilho" target="_blank">
                  <S.IconPhone className="ri-phone-line"></S.IconPhone>+55
                  (12)99745-4645
                </S.Phone>
              </S.NavRight>
            </S.NavMenu>
          </S.Navigation>

          <S.MobileMenu onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </S.MobileMenu>
        </S.Wrapper>
      </Container>
    </S.Header>
  );
};

export default Header;

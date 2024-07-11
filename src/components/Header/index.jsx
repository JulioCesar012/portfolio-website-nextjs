import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container } from 'reactstrap';

import S from './styles';

const NAV_LINK = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/#about',
    display: 'About',
  },
  {
    path: '/#portfolio',
    display: 'Portfolio',
  },
  {
    path: '/#study',
    display: 'Study',
  },
  {
    path: '/blog',
    // path: "https://medium.com/@juliofilho12",
    display: 'Blog',
  },
  {
    path: '/#contact',
    display: 'Contact',
  },
];

const Header = () => {
  const router = useRouter(); // Obtém o objeto router do Next.js
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('header_shrink');
      return;
    }
    return headerRef.current.classList.remove('header_shrink');
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);

    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('active_menu');

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
              {NAV_LINK.map((item, index) => {
                const isActive = router.asPath === item.path;

                return (
                  <Link href={`${item.path}`} key={index}>
                    <S.NavItem active={isActive}>{item.display}</S.NavItem>
                  </Link>
                );
              })}

              <S.NavRight>
                <S.Phone
                  className="d-flex align-items-center gap-2 mb-0"
                  href="https://wa.me/5512981735112"
                  target="_blank"
                >
                  <S.IconPhone className="ri-phone-line"></S.IconPhone>+55
                  (12)98173-5112
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

import S from './styles';

import Link from "next/link";
import { Container } from "reactstrap";

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
    path: "#services",
    display: "Services",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Wrapper>
        <S.Logo>
          <S.Title>
            <S.SlugTitle>Dev.</S.SlugTitle>Julio
          </S.Title>
        </S.Logo>

        <S.Navigation>
          <S.NavMenu>
            {NAV_LINK.map((item, index) => (
              <Link href={item.path} key={index}>
                {item.display}
              </Link>
            ))}

              <S.NavRight>
                <S.Phone className="d-flex align-items-center gap-2 mb-0"><S.IconPhone className="ri-phone-line"></S.IconPhone>+55 (12)99709-5524</S.Phone>
              </S.NavRight>
          </S.NavMenu>
        </S.Navigation>
        </S.Wrapper>
      </Container>
    </S.Header>
  );
};

export default Header;

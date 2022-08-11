import { useRouter } from "next/router";
import S from "~/styles/404";
import { Container } from "reactstrap";

export const FourOhFour = () => {
  const route = useRouter();

  return (
    <section className="content-not-found">
          <Container>
          <S.NotFound>
              <img src={'/images/404.png'} alt="404" />
            </S.NotFound>
      </Container>
    </section>
  );
}

export default FourOhFour;
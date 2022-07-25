import S from "./styles";
import Link from "next/link";

function PortfolioItem({ item }) {
  const { title, img, keyword, liveUrl, status, preview } = item;

  return (
    <S.ContainerPortfolioItem>
      <S.ContentPortfolioItem>
        <S.Title>{title}</S.Title>

        {keyword.map((item, index) => (
          <S.PortfolioKeyword key={index}>{item}</S.PortfolioKeyword>
        ))}
      </S.ContentPortfolioItem>

      <S.PortfolioImg>
        <S.Image alt="portfolio-img" src={img} />
      </S.PortfolioImg>

      <S.PortfolioLive>
        {liveUrl && (
          <S.ButtonLive className="primary-btn">
            <Link href={liveUrl}>Acessar</Link>
          </S.ButtonLive>
        )}

        {preview && (
          <S.ButtonLive className="primary-btn" preview={preview}>
            <Link href={liveUrl}>ver</Link>
          </S.ButtonLive>
        )}

        {status && (
          <S.ButtonLive className="primary-btn">
            <Link href="">{status}</Link>
          </S.ButtonLive>
        )}
      </S.PortfolioLive>
    </S.ContainerPortfolioItem>
  );
}

export default PortfolioItem;

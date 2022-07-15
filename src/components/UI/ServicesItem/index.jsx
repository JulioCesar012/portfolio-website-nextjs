import S from './styles';

const ServicesItem = ({ title, icon }) => {
  return (
    <S.ContainerServiceItem>
        <S.Icon>
          <i className={icon}></i>
        </S.Icon>

        <S.Title>
          {title}
        </S.Title>

    </S.ContainerServiceItem>
  );
};

export default ServicesItem;

// import { IconSvg } from 'helpers/iconSvg';
import OrangeImg from '../../assets/img/orange-img.png';
import {
  Box,
  Btn,
  Container,
  Data,
  Info,
  InfoBlock,
  Span,
  StatBlock,
  Text,
  Title,
  Wrap,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Box>
        <InfoBlock>
          <Title>
            Unlock your potential with the best <Span>language</Span> tutors
          </Title>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <Btn type="button">Get started</Btn>
        </InfoBlock>
        <img src={OrangeImg} alt="Orange background" />
      </Box>
      <StatBlock>
        {/* <IconSvg id="icon-rectangle" /> */}
        <Wrap>
          <Data>32,000 +</Data>
          <Info>Experienced tutors</Info>
        </Wrap>
        <Wrap>
          <Data>300,000 +</Data>
          <Info>5-star tutor reviews</Info>
        </Wrap>
        <Wrap>
          <Data>120 +</Data>
          <Info>Subjects taught</Info>
        </Wrap>
        <Wrap>
          <Data>200 +</Data>
          <Info>Tutor nationalities</Info>
        </Wrap>
      </StatBlock>
    </Container>
  );
};

export default HomePage;

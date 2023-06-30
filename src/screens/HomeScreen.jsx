import { Container, Logo, Actions } from "../styled/screens/HomeScreen.styles";
import LogoAsset from '../assets/logo.svg';
import { LinkButton } from '../common';

/* 
    This Screen allows to render all content when the user access to route with the path "/"
    This screen render the home screen
*/

export const HomeScreen = () => {
  return (
    <Container>
        <Logo>
            <img src={LogoAsset} alt='Logo'/>
            <h2>Memory Game</h2>
        </Logo>
        <Actions>
            <LinkButton to='/game'>Start</LinkButton>
        </Actions>
    </Container>
  );
};
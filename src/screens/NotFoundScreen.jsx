import {  Container } from '../styled/screens/NotFoundScreen.styles';
import { LinkButton } from '../common';

/* 
    This Screen allows to render the not found screen when the user access to route which does nott exists
    This screen render the not found screen
*/

export const NotFoundScreen = () => {
  return (
    <Container>
        <h2>404</h2>
        <h3>Not found</h3>
        <p>Oops!, the route you want to access does not exist.</p>
        <LinkButton to='/'>Back to home</LinkButton>
    </Container>
  );
};
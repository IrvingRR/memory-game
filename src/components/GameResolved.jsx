/* 
    This component allows to render the content within of GameOverScreen if the user found all matches in the game.
*/

export const GameResolved = () => {
  return (
    <>
        <h2>
            You did it <span>!</span>
        </h2>
        <p>You have found all matches before the time end.</p>
    </>
  );
};
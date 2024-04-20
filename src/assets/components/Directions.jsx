import { East } from "./buttons/East";
import { North } from "./buttons/North";
import { South } from "./buttons/South";
import { West } from "./buttons/West";
import { MainButton } from "./buttons/MainButton";
import { useCallback } from "react";

export const Directions = ({
  actions,
  performAction,
  resetGame,
  coordinates,
}) => {
  console.log("performAction is", typeof performAction);

  const startPosition = coordinates === "0,0";
  const endPosition = coordinates === "1,3";

  const onClickRestart = () => {
    console.log("User clicked restart");
    resetGame();
  };

  const onClickGo = useCallback(
    (type, direction) => {
      console.log(`User clicked ${direction}`);
      performAction(type, direction);
    },
    [performAction]
  );

  return (
    <>
      {!endPosition && !startPosition && (
        <>
          {actions.map((action) => {
            let buttonElement = null;
            if (action.direction === "South") {
              buttonElement = (
                <South
                  handleClick={() => onClickGo(action.type, "South")}
                  key={action.direction}
                />
              );
            } else if (action.direction === "North") {
              buttonElement = (
                <North
                  handleClick={() => onClickGo(action.type, "North")}
                  key={action.direction}
                />
              );
            } else if (action.direction === "West") {
              buttonElement = (
                <West
                  handleClick={() => onClickGo(action.type, "West")}
                  key={action.direction}
                />
              );
            } else if (action.direction === "East") {
              buttonElement = (
                <East
                  handleClick={() => onClickGo(action.type, "East")}
                  key={action.direction}
                />
              );
            }
            return buttonElement;
          })}
        </>
      )}
      {!startPosition && (
        <MainButton
          onClickRestart={onClickRestart}
          style={{ position: "absolute", bottom: "20px", right: "20px" }}
        >
          Restart
        </MainButton>
      )}
    </>
  );
};
// <>
//   {!endPosition &&
//     !startPosition &&
//     actions.map((action) => {
//       const ButtonComponent =
//         {
//           North: North,
//           South: South,
//           West: West,
//           East: East,
//         }[action.direction] || null;

//       return (
//         ButtonComponent && (
//           <ButtonComponent
//             key={`${action.direction}-${action.type}`}
//             handleClick={() => onClickGo(action.type, action.direction)}
//           />
//         )
//       );
//     })}
//   {!startPosition && (
//     <MainButton
//       style={{ position: "absolute", bottom: 20, right: 20 }}
//       onClick={onClickRestart}
//     >
//       Restart
//     </MainButton>
//   )}
// </>

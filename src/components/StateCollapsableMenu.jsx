import { userState } from "react";

function StateCollapsableMenu(props) {
  const { children } = props;

  const [hover, setHover] = userState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <h1
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        menu
      </h1>
      <div className={"floating " + (hover ? "" : "hidden")}>{children}</div>
    </div>
  );
}

export default StateCollapsableMenu;

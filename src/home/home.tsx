import "./home.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="subContainer">
        <text className="title">So, you want to travel to</text>
        <div className="content">
          <div className="descriptionContainer">
            <text className="spaceText">Space</text>
            <text className="descriptionText">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </text>
          </div>
          <div className="exploreContainer">
            <text className="exploreText">EXPLORE</text>
          </div>
        </div>
      </div>
    </div>
  );
};

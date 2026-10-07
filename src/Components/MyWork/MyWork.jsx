import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work </h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.w_img} alt={work.w_name || "Project Image"} />
              <p>{work.w_name}</p>
            </a>
          );
        })}
      </div>
      <div className="mywork_showmore">
        <a
          href="https://github.com/juweana?tab=repositories"
          target="blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <p>Show More</p>{" "}
        </a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;

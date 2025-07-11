import "../App.css";
import projects_white from "../assets/projects_white.png";
import Footer from "../components/Footer";
import WellCoffeeProjectCard from "../components/WellCoffeeProjectCard";
import PrecisionCard from "../components/PrecisionCard";

function Projects() {
  return (
    <>
        <div className="magicpattern">
        <div className="projects-title">
          <img src={projects_white} />
        </div>
        <div class="container mt-5">
        <div class="row">
            <div class="d-flex align-items-stretch justify-content-center">
              <div class="m-4">
          <WellCoffeeProjectCard />
          </div>
          <div class="m-4">
          <PrecisionCard />
          </div>
        </div>
        </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Projects;
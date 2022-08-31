import SocialIcons from "../components/socialIcons"
import "../styles/home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sabir Hassan</h2>
        <div className="prompt">
          <p>
            I love to make and write about things I've loved and experienced
          </p>
          <SocialIcons />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Gatsby, Redux, MaterialUI, BootStrap, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, MongoDB, Postgresql</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Python, Java, C, C++, </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home

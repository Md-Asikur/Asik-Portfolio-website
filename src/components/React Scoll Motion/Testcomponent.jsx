import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
const TestComponent = () => {
  return (
    <>
      <div>
        <p>
          <a
            href="https://github.com/crossLineApex"
            style={{ fontSize: "2em", color: "white" }}
          >
            {`github : `} <AiFillGithub />
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/ayush-aryal-b100261a2/"
            style={{ fontSize: "2em" }}
          >
            {`linkedin : `} <AiFillLinkedin />
          </a>
        </p>
        <p style={{ fontSize: "2em", color: "#00ffff" }}>
          mail: ayusharyal49@gmail.com <AiOutlineMail />
        </p>
        <h3 style={{ fontSize: "1em", color: "white" }}>
          also thanks to Seonghyeok Chun github: 1000ship for letting me test this out
        </h3>
      </div>
    </>
  );
};

export default TestComponent;

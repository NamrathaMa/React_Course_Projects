export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div>
        <h1>
          hi, i'm{" "}
          <span className="nowrap">
            <span className="name">namratha</span>.
            <span className="cursor"></span>
          </span>
        </h1>
        <p className="lede">
          Full-stack engineer by day, yoga-practitioner by evening, and
          occasional potter. I like turning business requirements into software
          that’s dependable and fun to use. Welcome to my corner of the
          internet!
        </p>
        <div className="cta">
          <a className="btn" href="#contact">
            Say hi
          </a>
          <a className="btn btn-solid" href="#projects">
            See My Projects
          </a>
        </div>
      </div>
      <pre className="code">
        <span className="keyword">const</span> namratha = {"{"}
        {"\n"}
        {" role:     "}
        <span className="string">'Full-stack engineer'</span>,{"\n"}
        {" based:    "}
        <span className="string">'Bangalore, India'</span>,{"\n"}
        {" stack:    "}
        <span className="string">['Angular', 'React', 'Node', 'SQL']</span>,
        {"\n"}
        {" learning: "}
        <span className="string">'React, one project at a time'</span>,{"\n"}
        {" status:   "}
        <span className="string">'open to work'</span>,{"\n"}
        {"};"}
        {"\n"}
        <span className="comment">{"// export default namratha;"}</span>
      </pre>
    </section>
  );
}

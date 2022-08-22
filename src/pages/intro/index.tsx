const Intro = () => {
  return (
    <main className="intro-container">
      <div className="intro-content">
        <section className="intro-text-container">
          <h4>Hello, World!</h4>
          <h1>My name is Nicolas.</h1>
          <h3>
            I’m a software engineer specializing in building exceptional digital
            experiences.
          </h3>
        </section>
        <section className="intro-images-container">
          <img
            className="intro-image-1"
            src={require("src/assets/intro/intro.png")}
            height={300}
          />
          <img
            className="intro-image-2"
            src={require("src/assets/intro/intro2.png")}
            height={300}
          />
          <img
            className="intro-image-3"
            src={require("src/assets/intro/intro3.png")}
            height={300}
          />
        </section>
      </div>
    </main>
  );
};

export default Intro;

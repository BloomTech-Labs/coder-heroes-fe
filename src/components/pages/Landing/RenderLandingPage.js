import React from 'react';

function RenderLandingPage(props) {
  return (
    <div>
      <header>
        <div id="header-content">
          <div style={{ marginTop: '200px' }}>
            <h1>Coding is a superpower.</h1>
            <h2>
              Through a love of teaching and technology,<br></br> we empower
              youth to change the word <br></br> with their ideas.
            </h2>

            <div id="header-buttons">
              <a href="#.">Browse Programs</a>
              <a href="#.">Support us</a>
            </div>
          </div>
        </div>

        <div className="arrow down"></div>

        <div id="message">
          <h3>
            We chose to navigate the COVID-19 landscape with innovation,
            <br></br> and launched the first-ever coding program for kids with a
          </h3>
          <h2>Buy-one-give-one-charitable model.</h2>
        </div>
      </header>

      <section className="green-section">
        <div className="flex-row">
          <div className="half center">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt="computer"
            ></img>
          </div>
          <div className="half center">
            <h3 style={{ textTransform: 'uppercase' }}>
              give back to the community.
            </h3>
            <h2>Support code your dreams</h2>
            <p>
              All CoderHeroes proceeds provide direct<br></br> funding to our
              original mission, centered in<br></br> incubating tech skills
              within underserved<br></br> school districts
            </p>
            <a className="landing-page-button" href="#.">
              Visit website
            </a>
          </div>
        </div>
      </section>

      <section className="green-section">
        <div className="flex-row">
          <div className="half"></div>

          <div className="flex-row">
            <div>
              <img
                className="circle-img"
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="CEO"
              ></img>
            </div>

            <div>
              <div className="landing-card">
                <p>
                  "I have 7+ years of experience working in technology. I bring
                  <br></br> excitement and positivity to every class, virtual
                  and in-person.
                </p>
                <p>
                  I have experience teaching the following subjects for k-12
                  students: Python, Swift, JavaScript, App inventor, design
                  thinking, UI/UX Design, Sales &#38; marketing."
                </p>
              </div>

              <div className="landing-card">
                <h2>Brianne Caplan</h2>
                <h3>Founder &#38; CEO, Coderheroes &#38; code your dreams</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RenderLandingPage;

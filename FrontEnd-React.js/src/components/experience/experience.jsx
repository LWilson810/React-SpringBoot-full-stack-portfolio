import "./experience.css";

const Experience = () => {
  return (
    <div id="experience" className="container members-container">
      <h1 className="member-txt">Experiences</h1>
      <div className="member member-1">
        <div className="member-img1"></div>
        <div className="member-info">
          <h1 className="name">Senior Front End Engineer</h1>
          <h3 className="position">Oncue • San Francisco, CA</h3>
          <h3 className="position">06/2021 - 07/2023</h3>
          <h4 className="about">
          ● Built interactive real-time data web pages and dashboard UIs using React, React Hooks, TailwindCSS, MUI, Chart.js, and D3.js.<br></br>
          ● Collaborated with AI engineer to develop several pages, for instance ChatGPT.<br></br>
          ● Created and maintained front-end code for customer interface, resulting in improvement of customer satisfaction rating by 40%.<br></br>
          ● Updated front-end interface to optimize usability, resulting in increase of app downloads by 30%.<br></br>
          ● Guided and led junior engineers team to do the best software development practices and engineering process.<br></br>
          ● Constructed a scalable and reliable enterprise-level SaaS app for moving companies and customers using React, Node.js, and AWS with TypeScript.<br></br>
          ● Implemented and optimized AWS infrastructure, including EC2 instances, RDS, S3 buckets, and CloudFront CDN.          </h4>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img2"></div>
        <div className="member-info">
          <h1 className="name">Full Stack Developer</h1>
          <h3 className="position">StudioLabs • New York, NY</h3>
          <h3 className="position">10/2016 - 05/2021</h3>
          <h4 className="about">
          ● Contributed to the updating the management site of Whole Foods Market in California, resulting in 27% of application performance improvement.<br></br>
          ● Migrated web application from AngularJS to VueJS, which is of a large-scale.<br></br>
          ● Successfully implemented SEO best practices utilizing Next.js, resulting in improved search engine rankings.<br></br>
          ● Built the commodity delivery mobile app using React Native for iOS and Android.<br></br>
          ● Collaborated with AI engineer to develop several pages, for instance ChatGPT.<br></br>
          ● Helped re-prioritize the Software Development Roadmap to ensure timely completion of all critical projects.
          </h4>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img3"></div>
        <div className="member-info">
          <h1 className="name">Software Developer</h1>
          <h3 className="position">Copper • San Francisco, CA</h3>
          <h3 className="position">06/2014 - 10/2016</h3>
          <h4 className="about">
          ● Developed real-time web-site showing the ratings of staffs’ record of performance under the company guidelines.<br></br>
          ● Joined with web designers to develop web-based integrated searching system for sports commodities of various brands.<br></br>
          ● Developed and maintained RESTful APIs using Django, Express.js, PostgreSQL, and MongoDB.<br></br>
          ● Designed and developed front-end GUI for over 20 applications using JSP, HTML, CSS, JavaScript and Ajax.<br></br>
          ● Involved in integrating UI with API and loading data using GraphQL.          </h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;

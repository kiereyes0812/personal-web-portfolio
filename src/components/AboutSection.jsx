import { Code, User, Briefcase } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I’m a results-driven Full Stack Web Developer with a strong
              foundation in modern web technologies and a passion for building
              practical, user focused applications. My experience includes
              working with front end frameworks like React, HTML, and CSS, as
              well as back end tools such as Node.js, Express, and relational
              databases. I enjoy taking projects from concept to deployment,
              writing clean and maintainable code, and collaborating with others
              to solve real problems. I am eager to grow, learn from more
              experienced engineers, and contribute to a team that values
              quality, communication, and continuous improvement.
            </p>

            <p className="text-muted-forground">
              As a junior full stack developer, I enjoy working across the
              entire development stack, from designing responsive user
              interfaces to implementing secure APIs and database schemas.
              Through personal projects, coursework, and internships, I have
              gained hands on experience with JavaScript, RESTful services, and
              version control using Git. I am detail oriented, quick to pick up
              new tools and frameworks, and comfortable working in agile
              environments. My goal is to join a team where I can contribute
              immediately while continuing to expand my skills and take on
              increasing responsibility.
            </p>

            <p className="text-muted-forground">
              I am a recent graduate and aspiring full stack developer who
              enjoys turning ideas into functional web applications. I have
              built projects that integrate front end interfaces with back end
              services, focusing on clear structure, reusable components, and
              readable code. I value communication and teamwork, and I am
              comfortable explaining technical concepts to both technical and
              nontechnical stakeholders. I am looking for an opportunity where I
              can apply what I know, continue learning from real world
              challenges, and help deliver reliable software that makes a
              difference for users.
            </p>

            <p className="text-muted-forground">
              In addition to my technical skills, I bring a strong work ethic,
              attention to detail, and a collaborative mindset. I am excited to
              contribute to a development team where I can grow as an engineer
              while helping to build high quality applications that solve real
              problems. I am eager to take on new challenges, learn from
              experienced colleagues, and continuously improve my skills as a
              full stack developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and dynamic web applications using
                    modern technologies like React, Node.js, and Express.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and engaging user interfaces with a
                    focus on user experience, accessibility, and visual appeal.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from concept to deployment, ensuring timely
                    delivery and effective collaboration among team members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

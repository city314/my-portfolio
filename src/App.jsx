import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
  Badge,
} from "react-bootstrap";
import ParticlesBackground from "./components/ParticlesBackground";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";
import { TypeAnimation } from "react-type-animation";
import avatarImg from "./assets/avatar.jpg";
import "./App.css";

function App() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Node.js",
    "Express",
    "MongoDB",
    "Postgres",
    "Git",
    "GitHub",
    "RESTful APIs",
    "Responsive Design",
    "UI/UX Principles",
  ];

  const projects = [
    {
      title: "GoTripViet ~ AI-Based Tourism Tour Recommendation System",
      description:
        "Phát triển Website và Mobile app end-to-end và trải nghiệm chat AI. Thiết kế triển khai API Gateway routing đến 6 microservices. Tích hợp Cloudinary để lưu trữ hình ảnh và thanh toán qua VNPAY.",
      tech: [
        "ReactJS",
        "React-Bootstrap",
        "Flutter/Dart",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Qdrant",
        "Ollama",
        "Cloudinary",
        "Railway",
      ],
      github: "https://github.com/city314/GoTripVietWeb",
      demo: "https://gotripvietclient-production.up.railway.app/",
    },
    {
      title: "BKU’s LAB ~ Website & Admin Portal",
      description:
        "Xây dựng hệ thống full-stack gồm User site (6+ trang) và Admin portal để quản trị nội dung LAB cho Trung tâm Nghiên cứu công nghệ và thiết bị cơ khí",
      tech: [
        "ReactJS",
        "React-Bootstrap",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redux",
        "Render(BE)",
        "Vercel(FE)",
      ],
      github: "#",
      demo: "https://bkulabclient.vercel.app/",
    },
    {
      title: "Photography Learning Website ~ Portfolio cá nhân",
      description:
        "Xây dựng website dạy học Photography và trưng bày các tác phẩm chụp ảnh của tôi, với giao diện hiện đại và trải nghiệm người dùng tốt.",
      tech: ["ReactJS", "React-Bootstrap", "Vercel(FE)"],
      github: "https://github.com/city314/Photography",
      demo: "https://photography-eight-inky.vercel.app/",
    },
  ];
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="app-shell">
      <ParticlesBackground />
      <Navbar expand="lg" sticky="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
            <span className="brand-dot"></span>
            Le Cong Tuan's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="portfolio-navbar"
            className="border-0 shadow-none navbar-toggle-custom"
          />
          <Navbar.Collapse id="portfolio-navbar">
            <Nav className="ms-auto nav-links">
              <Nav.Link href="#about">Giới thiệu</Nav.Link>
              <Nav.Link href="#skills">Kỹ năng</Nav.Link>
              <Nav.Link href="#projects">Dự án</Nav.Link>
              <Nav.Link href="#journey">Hành trình</Nav.Link>
              <Nav.Link href="#contact">Liên hệ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </Container>
      </Navbar>

      <section id="home" className="hero-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={7}>
              <div className="hero-content">
                <p className="hero-kicker">Fullstack Developer</p>

                <h1 className="hero-title">
                  Tôi là <br />
                  <TypeAnimation
                    sequence={[
                      "Lê Công Tuấn",
                      1500,
                      "Fullstack Developer",
                      1500,
                      "Backend Developer",
                      1500,
                      "Frontend Developer",
                      1500,
                      "Web Developer",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={65}
                    repeat={Infinity}
                    cursor={true}
                    className="typing-text"
                  />
                </h1>

                <p className="hero-subtitle">
                  Tôi tập trung vào phát triển ứng dụng web với React, Node.js
                  và Express, ưu tiên giao diện đẹp, trải nghiệm mượt và cấu
                  trúc dễ mở rộng về sau.
                </p>

                <div className="hero-highlight-list">
                  <span>React UI</span>
                  <span>Responsive Design</span>
                  <span>Node / Express</span>
                </div>

                <div className="mt-4 d-flex gap-3 flex-wrap">
                  <Button className="btn-main" href="#projects">
                    Xem dự án
                  </Button>
                  <Button className="btn-ghost" href="#contact">
                    Liên hệ
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={5}>
              <div className="hero-visual">
                <div className="hero-glow glow-one"></div>
                <div className="hero-glow glow-two"></div>

                <div className="hero-bubble bubble-one"></div>
                <div className="hero-bubble bubble-two"></div>
                <div className="hero-bubble bubble-three"></div>

                <div className="hero-mini-sticker sticker-react">React</div>
                <div className="hero-mini-sticker sticker-fullstack">
                  Fullstack
                </div>
                <div className="hero-mini-sticker sticker-ui">UI / UX</div>

                <div className="hero-sticker-wrap">
                  <img
                    src={avatarImg}
                    alt="Ảnh đại diện"
                    className="hero-sticker-img"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="section-block">
        <Container>
          <div className="section-heading-wrap">
            <p className="section-label">About</p>
            <h2 className="section-title">Giới thiệu</h2>
          </div>

          <Row className="g-4 align-items-stretch">
            <Col md={7}>
              <div className="glass-panel h-100">
                <p className="section-text mb-0">
                  Tôi đang theo đuổi lộ trình Fullstack Developer, bắt đầu từ
                  frontend với React và tiếp tục mở rộng sang backend với
                  Node.js, Express. Tôi thích xây dựng các sản phẩm web rõ ràng,
                  dễ dùng, có tính thực tế và có cấu trúc dễ maintain.
                </p>
              </div>
            </Col>

            <Col md={5}>
              <div className="glass-panel h-100 stat-panel">
                <div className="stat-item">
                  <h3>Frontend</h3>
                  <p>React, UI layout, responsive, component-based design</p>
                </div>
                <div className="stat-item">
                  <h3>Backend mindset</h3>
                  <p>
                    REST API, Express, luồng dữ liệu và tư duy mở rộng hệ thống
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="section-block section-soft">
        <Container>
          <div className="section-heading-wrap">
            <p className="section-label">Stack</p>
            <h2 className="section-title">Kỹ năng</h2>
          </div>

          <div className="skills-wrap">
            {skills.map((skill, index) => (
              <Badge key={index} className="skill-pill">
                {skill}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="section-block">
        <Container>
          <div className="section-heading-wrap">
            <p className="section-label">Works</p>
            <h2 className="section-title">Dự án nổi bật</h2>
          </div>

          <Row className="g-4">
            {projects.map((project, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="project-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="project-topline">
                      <span className="project-index">0{index + 1}</span>
                    </div>

                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>

                    <Card.Text className="project-description">
                      {project.description}
                    </Card.Text>

                    <div className="mb-4 d-flex flex-wrap gap-2">
                      {project.tech.map((item, i) => (
                        <Badge key={i} className="tech-badge">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="d-flex gap-2 mt-auto flex-wrap">
                      <Button
                        className="btn-project-main"
                        size="sm"
                        href={project.github}
                      >
                        GitHub
                      </Button>
                      <Button
                        className="btn-project-ghost"
                        size="sm"
                        href={project.demo}
                      >
                        Demo
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="journey" className="section-block journey-section">
        <Container>
          <div className="section-heading-wrap">
            <p className="section-label">Path</p>
            <h2 className="section-title">Hành trình phát triển</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h5>Bắt đầu với nền tảng web</h5>
                <p>
                  Học HTML, CSS, JavaScript để hiểu cách web hoạt động từ gốc.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h5>Mở rộng sang React</h5>
                <p>
                  Xây giao diện component-based hiện đại, dễ tái sử dụng và dễ
                  maintain.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h5>Tiếp cận backend</h5>
                <p>
                  Tìm hiểu Node.js và Express để hiểu API, logic xử lý và luồng
                  dữ liệu.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h5>Định hướng Fullstack</h5>
                <p>
                  Xây dựng nền tảng để có thể phát triển ứng dụng web hoàn chỉnh
                  từ đầu đến cuối.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="section-block contact-section">
        <Container>
          <div className="contact-box">
            <p className="section-label">Contact</p>
            <h2 className="section-title contact-title">
              Cùng nhau tạo ra một sản phẩm tốt
            </h2>
            <p className="contact-text">
              Tôi luôn sẵn sàng cho cơ hội học hỏi, thực tập, cộng tác dự án và
              các công việc liên quan đến phát triển web.
            </p>

            <div className="contact-links">
              <a href="mailto:lecongtuan03012004@example.com">My Email</a>
              <a
                href="https://github.com/city314"
                target="_blank"
                rel="noreferrer"
              >
                My GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/c%C3%B4ng-tu%E1%BA%A5n-l%C3%AA-040a52380/"
                target="_blank"
                rel="noreferrer"
              >
                My LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;

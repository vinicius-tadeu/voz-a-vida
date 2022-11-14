import Header from "./components/Header";
import logo from "./assets/img/Logo.png";
import who_we_are_1 from "./assets/img/(34) 1.png";
import who_we_are_2 from "./assets/img/(43) 1.png";
import who_we_are_3 from "./assets/img/(38) 1.png";
import who_we_are_4 from "./assets/img/(20) 1.png";
import who_we_are_5 from "./assets/img/(6) 1.png";
import "./styles/App.sass";
import SectionTitle from "./components/SectionTitle.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import emailjs from "@emailjs/browser";
function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs.send(
      "service_o1028b8",
      "template_zb5sext",
      templateParams,
      "Dyzwvo29eBsnUDU5S"
    ).then((response)=>{
      console.log("Email Enviado", response.status, response.text);
      setName('')
      setEmail('')
      setMessage('')
    }, (err)=>{
      console.log("Erro: ",err);
    })
  }

  return (
    // TODO:Section Home
    // TODO:Section Quem somos
    // TODO:Section História
    // TODO:Section Seja um doador
    // TODO:Section Projetos
    // TODO:Section Apoiadores
    // TODO:Section Fale Conosco
    <div className="App">
      <Header />
      <main>
        <section>
          <div className="wrapper-home">
            <figure className="figure-home">
              <img
                src={logo}
                alt="Logo da instituição Voz à Vida."
                width="170px"
              />
            </figure>
            <h1 className="title-home">
              <span className="letter-i">I</span>nstituto
              <br />
              <span className="letter-v">V</span>oz à
              <span className="letter-v2">V</span>ida
            </h1>
            <hr className="separator" width="45%" />
          </div>
        </section>
        <hr className="separator secundary" width="100%" />
        <section className="section-who-we-are">
          <div className="wrapper-who-we-are">
            <SectionTitle content={"Quem Somos"} />
            <div className="who-we-are-all">
              <div className="who-we-are-all secondary">
                <figure>
                  <img src={who_we_are_1} alt="" />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat fuga excepturi vero unde sequi cupiditate ut voluptas
                  magnam incidunt natus rem ipsum, enim nam sapiente
                  repellendus, nulla laborum officiis consequatur. Cumque fugit
                  ipsam, libero voluptatem, aliquid placeat assumenda rerum
                  obcaecati sapiente, dolorem quos! Fuga laboriosam commodi
                  ipsum. Animi quos, sed modi labore ex placeat a fugit? Aut
                  deserunt eum aliquam. Rerum magnam est incidunt quisquam
                  deserunt blanditiis, officiis inventore, commodi nihil
                  architecto eveniet iusto recusandae porro accusantium, dolor
                  voluptatibus sequi corporis quis dolores sapiente! Facere
                  suscipit itaque ut perspiciatis repudiandae?
                </p>
              </div>
              <div className="who-we-are-all secondary">
                <figure>
                  <img src={who_we_are_2} alt="" />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat fuga excepturi vero unde sequi cupiditate ut voluptas
                  magnam incidunt natus rem ipsum, enim nam sapiente
                  repellendus, nulla laborum officiis consequatur. Cumque fugit
                  ipsam, libero voluptatem, aliquid placeat assumenda rerum
                  obcaecati sapiente, dolorem quos! Fuga laboriosam commodi
                  ipsum. Animi quos, sed modi labore ex placeat a fugit? Aut
                  deserunt eum aliquam. Rerum magnam est incidunt quisquam
                  deserunt blanditiis, officiis inventore, commodi nihil
                  architecto eveniet iusto recusandae porro accusantium, dolor
                  voluptatibus sequi corporis quis dolores sapiente! Facere
                  suscipit itaque ut perspiciatis repudiandae?
                </p>
              </div>
              <div className="who-we-are-all secondary">
                <figure>
                  <img src={who_we_are_3} alt="" />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat fuga excepturi vero unde sequi cupiditate ut voluptas
                  magnam incidunt natus rem ipsum, enim nam sapiente
                  repellendus, nulla laborum officiis consequatur. Cumque fugit
                  ipsam, libero voluptatem, aliquid placeat assumenda rerum
                  obcaecati sapiente, dolorem quos! Fuga laboriosam commodi
                  ipsum. Animi quos, sed modi labore ex placeat a fugit? Aut
                  deserunt eum aliquam. Rerum magnam est incidunt quisquam
                  deserunt blanditiis, officiis inventore, commodi nihil
                  architecto eveniet iusto recusandae porro accusantium, dolor
                  voluptatibus sequi corporis quis dolores sapiente! Facere
                  suscipit itaque ut perspiciatis repudiandae?
                </p>
              </div>
              <div className="who-we-are-all secondary">
                <figure>
                  <img src={who_we_are_4} alt="" />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat fuga excepturi vero unde sequi cupiditate ut voluptas
                  magnam incidunt natus rem ipsum, enim nam sapiente
                  repellendus, nulla laborum officiis consequatur. Cumque fugit
                  ipsam, libero voluptatem, aliquid placeat assumenda rerum
                  obcaecati sapiente, dolorem quos! Fuga laboriosam commodi
                  ipsum. Animi quos, sed modi labore ex placeat a fugit? Aut
                  deserunt eum aliquam. Rerum magnam est incidunt quisquam
                  deserunt blanditiis, officiis inventore, commodi nihil
                  architecto eveniet iusto recusandae porro accusantium, dolor
                  voluptatibus sequi corporis quis dolores sapiente! Facere
                  suscipit itaque ut perspiciatis repudiandae?
                </p>
              </div>
              <div className="who-we-are-all secondary">
                <figure>
                  <img src={who_we_are_5} alt="" />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat fuga excepturi vero unde sequi cupiditate ut voluptas
                  magnam incidunt natus rem ipsum, enim nam sapiente
                  repellendus, nulla laborum officiis consequatur. Cumque fugit
                  ipsam, libero voluptatem, aliquid placeat assumenda rerum
                  obcaecati sapiente, dolorem quos! Fuga laboriosam commodi
                  ipsum. Animi quos, sed modi labore ex placeat a fugit? Aut
                  deserunt eum aliquam. Rerum magnam est incidunt quisquam
                  deserunt blanditiis, officiis inventore, commodi nihil
                  architecto eveniet iusto recusandae porro accusantium, dolor
                  voluptatibus sequi corporis quis dolores sapiente! Facere
                  suscipit itaque ut perspiciatis repudiandae?
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="separator secundary" width="100%" />
        <section className="section-history">
          <SectionTitle content={"História"} />
        </section>
        <hr className="separator secundary" width="100%" />
        <section className="section-projects">
          <SectionTitle content={"Projetos"} />
        </section>
        <hr className="separator secundary" width="100%" />
        <section className="section-supporters">
          <SectionTitle content={"Apoiadores"} />
        </section>
        <hr className="separator secundary" width="100%" />
        <section className="section-be-a-donor">
          <SectionTitle content={"Seja um doador"} />
        </section>
        <hr className="separator secundary" width="100%" />
        <section className="section-contact-us">
          <SectionTitle content={"Fale Conosco"} />
          <form
            action="https://formsubmit.co/viniciustadeusores@gmail.com"
            method="POST"
            className="form-contact-us"
            onSubmit={sendEmail}
          >
            <input type="hidden" name="_captcha" value="false" />
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="inp-name-form"
              placeholder="Digite seu nome aqui."
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="inp-email-form"
              placeholder="Digite seu email aqui."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label htmlFor="message">Mensagem:</label>
            <textarea
              name="message"
              id="inp-msg-form"
              cols="30"
              rows="10"
              placeholder="Digite sua mensagem aqui."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            ></textarea>
            <button id="btn-form" type="submit">
              Enviar
            </button>
          </form>
        </section>
        <hr className="separator secundary" width="100%" />
      </main>
      <Footer />
    </div>
  );
}

export default App;

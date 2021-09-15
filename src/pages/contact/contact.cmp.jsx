import emailjs from "emailjs-com";
import React from "react";
import { FaEnvelope, FaMapMarker } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../components/form-input/form-input.cmp";
import "./contact.scss";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    };
  }

  sendEmail = (data) => {
    return new Promise((resolve, reject) => {
      emailjs
        .sendForm(
          "benjamincopinetfr",
          "template_jufwop9",
          data,
          "user_Xi8P00Kv0Ne36u3IvN9oA"
        )
        .then(
          (result) => {
            this.setState({
              name: "",
              email: "",
              phone: "",
              message: "",
              subject: "",
            });
            resolve();
          },
          (error) => {
            reject();
          }
        );
    });
  };

  handleForm = (e) => {
    e.preventDefault();
    toast.promise(this.sendEmail(e.target), {
      pending: "Envoi en cours.",
      success: "Le mail a bien été envoyé. 👌",
      error:
        "Erreur lors de l'envoi. Si le problème persiste, contactez-moi directement à benjamin.copinet@outlook.fr 🤯",
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="contact flex-c">
        <div className="contact-backround" />
        <div className="contact-content flex-c">
          <div className="contact-left">
            <h1 className="contact-title">CONTACTEZ MOI</h1>
            <div className="contact-details">
              <h2>Informations de contact:</h2>
              <p>
                <FaEnvelope className="react-icons" />
                <a
                  href="mailto:benjamin.copinet@outlook.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  benjamin.copinet@outlook.fr
                </a>
              </p>
              <p>
                <FaMapMarker className="react-icons" /> Reims, France
              </p>
            </div>
          </div>
          <form className="contact-form flex-c" onSubmit={this.handleForm}>
            <legend>
              <h2>
                Remplissez le formulaire et je reviendrai vers vous dès que
                possible!
              </h2>
            </legend>
            <FormInput
              name="name"
              type="text"
              placeholder="Nom"
              value={this.state.name}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="subject"
              type="text"
              placeholder="Sujet"
              value={this.state.subject}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="phone"
              type="number"
              placeholder="Téléphone"
              value={this.state.phone}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              name="message"
              type="text"
              placeholder="Message"
              value={this.state.message}
              handleChange={this.handleChange}
              textarea="true"
              required
            />
            <input className="contact-button" type="submit" value="ENVOYER" />
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default ContactPage;

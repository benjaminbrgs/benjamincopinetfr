import emailjs from "emailjs-com";
import React from "react";
import { FaEnvelope, FaMapMarker } from "react-icons/fa";
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
    };
  }

  sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "iliyan_tsachev_ilnweb_com",
        "template_A6tGVBFX",
        e.target,
        "user_yzFWSar3pajA0DntG0rT5"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
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
                <FaEnvelope className="react-icons" /> :
                contact@benjamincopinet.fr
              </p>
              <p>
                <FaMapMarker className="react-icons" /> : Reims, France
              </p>
            </div>
          </div>
          <form className="contact-form flex-c" onSubmit={this.sendEmail}>
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
      </div>
    );
  }
}

export default ContactPage;

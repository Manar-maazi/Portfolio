import Title from "../Title";
import Form from "./Form";
import Card from "./Card";

function Contact() {
  return (
    <div className=" m-5 md:m-0 :h-full "  id="Contact"
     >
      <Title title="Contact Me" />

      <div className="flex flex-wrap justify-center items-center gap-10 min-h-screen md:justify-evenly">
        <Card   />
        <Form />
      </div>
    </div>
  );
}

export default Contact;

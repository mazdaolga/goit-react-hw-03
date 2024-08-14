import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={css.contactWrapper}>
        <div className={css.contactTextWrapper}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactTextWrapper}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
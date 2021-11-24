import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contacts/contacts-action";
import { filteredContacts } from "../../redux/contacts/contacts-selector";
import s from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.contact}>
              {name} : {number}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;

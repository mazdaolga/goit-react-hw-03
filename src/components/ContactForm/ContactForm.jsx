import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .matches(phoneRegExp, "The phone format 'xxx-xx-xx' is required")
    .required("Required!"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div className={css.formContainer}>
          <label className={css.formLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formContainer}>
          <label className={css.formLabel} htmlFor={telFieldId}>
            Number
          </label>
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
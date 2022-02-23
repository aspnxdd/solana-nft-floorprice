import { useFormik } from "formik";
import { Form } from "../../components/form/FormElements";
import { useEffect, useState } from "react";

export default function NewListing() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const formik = useFormik({
    initialValues: {
      projectName: "",
      numberOfTokens: 3333,
      digitalEyes: "",
      solanart: "",
      // magicEden: "",
      answer: "",
    },
    onSubmit: () => {
      if (formik.values.answer != a + b) return alert("Wrong answer!");
      const Subject = `New Listing: ${formik.values.projectName}`;
      const Message = `Project Name: ${formik.values.projectName}%0A
      numberOfTokens: ${formik.values.numberOfTokens}%0A
      digitalEyes: ${formik.values.digitalEyes}%0A
      solanart: ${formik.values.solanart}%0A
 
     `;
      window.location = `mailto:esarnau21@gmail.com?subject=${Subject}&body=${Message}`;
    },
  });
  useEffect(() => {
    setA(Math.floor(Math.random() * 10 + 1));
    setB(Math.floor(Math.random() * 10 + 1));
  }, []);
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Submit this form to get your project added</h1>
      <div>
        <label htmlFor="projectName">Project Name</label>
        <input
          id="projectName"
          name="projectName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.projectName}
          placeholder="Project Name"
          required
        />
        <label htmlFor="numberOfTokens">Number of tokens</label>
        <input
          id="numberOfTokens"
          name="numberOfTokens"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.numberOfTokens}
        />
        {/* <label htmlFor="magicEden">MagicEden URL</label>
        <input
          id="magicEden"
          name="magicEden"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.magicEden}
        /> */}
        <label htmlFor="solanart">Solanart URL</label>
        <input
          id="solanart"
          name="solanart"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.solanart}
        />
        <label htmlFor="digitalEyes">DigitalEyes URL</label>
        <input
          id="digitalEyes"
          name="digitalEyes"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.digitalEyes}
        />
        <label htmlFor="answer">{`How much is ${a} + ${b}`}</label>

        <input
          id="answer"
          name="answer"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.answer}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
}

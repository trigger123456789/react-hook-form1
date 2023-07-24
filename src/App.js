import { useState } from "react";
// import Form from './components/forms/yup';
// import Form from "./components/forms/zod";
import Form from "./components/forms/zod/Form";

import ThankYouMessage from "./components/ThankYouMessage";
import { fieldsConfig } from "./components/forms/zod/FieldsConfig";

function App() {
  const [signupFinished, setSignupFinished] = useState(false);

  return signupFinished ? (
    <ThankYouMessage />
  ) : (
    <Form setSignupFinished={setSignupFinished} fieldsConfig={fieldsConfig} />
  );
}

export default App;

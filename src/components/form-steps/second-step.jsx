import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'antd';

import { TextArea } from '../fields';
import styles from './steps.module.css';

const SecondStep = ({ handleSubmit, prev }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <Field
          name="compositionAndFormOfRelease"
          type="textarea"
          component={TextArea}
          label="Composition and releases form"
        />
        <Field
          name="indication"
          type="textarea"
          component={TextArea}
          label="Indication"
        />
        <Field
          name="contraindications"
          type="textarea"
          component={TextArea}
          label="Contraindications"
        />
      </div>
      <div className={styles.modalControl}>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={prev}>Prev</Button>
        <Button htmlType="submit">Create/Edit</Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'form',
  destroyOnUnmount: false,
})(SecondStep);

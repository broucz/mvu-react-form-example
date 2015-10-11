import {Form, start} from 'mvu-react-form';
import {devTools} from 'mvu-devtools';

const options = {
  fields: [
    {
      type: 'short_text',
      question: 'How old are you?',
      description: 'We would consider it for sure!',
      validate: {
        expression: /\d/,
        message: {
          advice: 'Put your age using numbers',
          error: 'I said numbers...'
        }
      }
    }
  ]
};

const form = new Form(options);
start(devTools(form), 'root');

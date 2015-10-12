import {Form, start} from 'mvu-react-form';
import {devTools} from 'mvu-devtools';

const options = {
  fields: [
    {
      type: 'short_text',
      question: 'What is your postal code?',
      description: 'For sure there is something interesting around you!',
      validate: {
        expression: /\d{5}/,
        message: {
          advice: 'Spanish postal code is composed by 5 numbers',
          error: 'Try something like: 08002'
        }
      }
    }
  ]
};

const form = new Form(options);
start(devTools(form), 'root');

// uncomment the following line if you want to use `normalizr`
// import { Schema, arrayOf, normalize } from 'normalizr';

// import { CALL_API } from 'redux-api-middleware';
// import config from 'config';
// import { REQUEST, FAILURE, SUCCESS} from 'constant/types';

// okay, so redux doesn't like nested json, so there is this module called `normalizr`,
// it flattens the json schema according to the provided `schema` which would be something
// like this:
/*
 const articleSchema = new Schema('articles', {
  vendor: new Schema('vendor', {
    idAttribute: '_id'
  }),
  idAttribute: '_id'
 });
*/

export default function action() {
  return {
    /*
    [CALL_API]: {
      endpoint: `${config.apiUrl}/path/to/api`,
      method: 'GET',
      types: [
        REQUEST,
        {
          type: SUCCESS,
          payload: (action, state, response) => {
            const contentType = response.headers.get('Content-Type');
            if (contentType && ~contentType.indexOf('json')) {
              // remove line below along with the schema in the beginning to use normalizr
              // return response.json().then(
              //  (json) => normalize(json.result, arrayOf(articleSchema))
              // );
              return response.json();
            }
          }
        },
        FAILURE
      ]
    }
    */
  };
}

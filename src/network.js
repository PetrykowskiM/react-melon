// Installs fetch as global function (can be mocked)
import 'isomorphic-fetch';

// Relative paths: https://github.com/matthew-andrews/isomorphic-fetch/issues/46
// const API_URL = process.env.NODE_ENV === 'production'
//   ? '/api'
//   : 'http://localhost:8080/api'

const API_URL = 'https://markdown.glitch.me';

// Similar to:
// http://stackoverflow.com/questions/29473426/fetch-reject-promise-with-json-error-object
const fetchJson = (url, request) => {
  const finalRequest = request
    ? {
      ...request,
      body: JSON.stringify(request.body),
      mode: 'cors',
      headers: {
        ...request.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    : {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
  return fetch(url, finalRequest).then(
    (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      // Reject other status
      return response.json().then(Promise.reject.bind(Promise));
    },
    (error) => {
      /*
        workaround for bug in "fetch" function in Edge 38.14393
        401 fetch response leads to TypeMismatchError
        this did not lead to a fetchError action, which would normally redirect to login
      */
      if (window.navigator.userAgent.indexOf('Edge') > -1 && error.name === 'TypeMismatchError') {
        return Promise.reject({ msg: 'not logged in' });
      }
      return Promise.reject(error); // Network or connection failure
    }
  );
};

export const analyseMarkdown = (content) => fetchJson(`${API_URL}/markdown/analyse`, {
  body: { content },
  method: 'POST',
});

export const getFile = (path) => fetch(path).then( response => response.text() ) ;
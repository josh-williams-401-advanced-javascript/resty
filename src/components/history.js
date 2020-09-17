import React from 'react';

export default (props) => {

  const makeRequest = (request) => {
    props.talkToApi(request);
  }

  // return (
  if (props.pastSearches) {
    return (<aside>
      <ul>
        {
          Object.keys(props.pastSearches).map(hash =>
            <li key={hash}>
              <span className={props.pastSearches[hash].method}>{props.pastSearches[hash].method} </span>
              <button onClick={() => makeRequest(props.pastSearches[hash])}> {props.pastSearches[hash].url} </button>
            </li>
          )}
      </ul>
    </aside>
  );
} else { return null;}
}
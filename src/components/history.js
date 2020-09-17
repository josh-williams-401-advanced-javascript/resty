import React from 'react';

export default (props) => {
  const makeRequest = (request) => {
    props.talkToApi(request);
  }

  return (
    <aside>
      <ul>
        {
          Object.keys(props.pastSearches).map(hash =>
            <li id={hash}>
              <span class={props.pastSearches[hash].method}>{props.pastSearches[hash].method} </span>
              <button onClick={() => makeRequest(props.pastSearches[hash])}>{props.pastSearches[hash].url}</button>
            </li>
          )}
      </ul>
    </aside>
  );
}
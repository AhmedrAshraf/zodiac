import React from 'react';
import { useNavigate, useParams } from 'react-router';

// React Router v6+ removed withRouter; this gives class components back the
// `history.push` and `match.params` props they were written against.
export default function withRouter(Component) {
  return function WithRouter(props) {
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} history={{ push: navigate }} match={{ params }} />;
  };
}

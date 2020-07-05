const PWToolTips = () => {
  return (
    <div>
      Password must contain:
      <ul>
        <li>at least 1 lowercase character</li>
        <li>at least 1 uppercase alphabetical character</li>
        <li>at least 1 numeric character</li>
        <li>at least 1 special character</li>
        <li>must be six characters or longer</li>
      </ul>
      <style jsx>
        {`
          div {
            align-self: center;
            position: absolute;
            margin-top: 3em;
            padding: 0.5em;
            padding-left: 1em;
            border-radius: 1em;
            top: 100%
            left: 50%;
            font-size: smaller;
            color: white;
            background-color: gray;
          }
          div::after {
            content: " ";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 7px;
            border-style: solid;
            border-color: transparent transparent gray transparent;
          }
          ul {
            margin: 0.5em 1em 0.5em 0em;
          }
        `}
      </style>
    </div>
  );
};

export default PWToolTips;

import Link from 'next/link';

const Footer = () => {
  return (
    <div id="footer">
      <Link href="/">
        <button type="button">Contact</button>
      </Link>
      <Link href="/">
        <button type="button">Contact</button>
      </Link>
      <Link href="/">
        <button type="button">Contact</button>
      </Link>
      <Link href="/">
        <button type="button">Contact</button>
      </Link>
      <style jsx>
        {`
          #footer {
            padding-top: 10px;
            display: flex;
            justify-content: center;
          }
          button {
            margin: 20px;
            background-color: transparent;
            border: none;
            transition-duration: 0.4s;
          }
          button:hover {
            color: pink;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;

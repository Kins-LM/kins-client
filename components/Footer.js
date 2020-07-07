import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
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
          footer {
            padding-top: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 2.5rem;
            background-color: white;
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
    </footer>
  );
};

export default Footer;

import Link from 'next/link';

const MyFirstView = () => (
  <section className="index">
    <h1 className="title-index"> Comic Web </h1>

    <Link href='/characters'>
      <a className="link-index">Characters</a>
    </Link>

    <Link href='/comics'>
      <a className="link-index"> Comics </a>
    </Link>

    <Link href='/series'>
      <a className="link-index"> Series </a>
    </Link>

  </section>
);

MyFirstView.Layout = ({children}) => <> {children} </>;


export default MyFirstView;
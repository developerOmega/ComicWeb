import Link from 'next/link';

const MyFirstView = () => (
  <section className="index">
    <div className="container">
      <h1 className="title-index"> Comic Web </h1>

      <div className="opt">
        <Link href='/characters'>
          <a className="link-index">Characters</a>
        </Link>
      </div>

      <div className="opt">
        <Link href='/comics'>
          <a className="link-index"> Comics </a>
        </Link>
      </div>

      <div className="opt">
        <Link href='/series'>
          <a className="link-index"> Series </a>
        </Link>
      </div>
    </div>

  </section>
);

MyFirstView.Layout = ({children}) => <> {children} </>;


export default MyFirstView;
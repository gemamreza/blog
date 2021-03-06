import Document, { Html, Head, Main, NextScript } from 'next/document';
import '../components/script/carousel';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://codepen.io/gemamreza/pen/Exxdveq.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald:400,500|Source+Serif+Pro|ZCOOL+XiaoWei&display=swap"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
        </Head>
        <body>
          <div className="container">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
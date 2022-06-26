
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'


import App, { Container } from 'next/app';

class CustomApp extends App {
  static async getInitialProps(appContext) {
    
    // Call "super" to run page's `getInitialProps`
    const appProps = await App.getInitialProps(appContext);

    // Send it to `render`
    return {
      ...appProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default CustomApp;
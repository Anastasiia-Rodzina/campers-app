import { Component } from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import css from './loader.module.css';

class Loader extends Component {
  render() {
    return (
      <RevolvingDot
        visible={true}
        height={100}
        width={100}
        color="#e44848"
        ariaLabel="revolving-dot-loading"
        wrapperClass={css.loader}
      />
    );
  }
}

export default Loader;

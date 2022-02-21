import PropTypes from 'prop-types';

import styles from './searchbar.module.css';

import searchIcon from '../img/searchIcon.svg';
import { Component } from 'react/cjs/react.development';

class Searchbar extends Component {
  state = {
    searchWord: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = ev => {
    this.setState({
      searchWord: ev.target.value,
    });
  };

  render() {
    return (
      <header>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            onChange={this.handleChange}
          />
          <button className={styles.submitButton} type="submit">
            <img
              className={styles.searchIcon}
              src={searchIcon}
              width="15px"
              alt="Search Icon"
            />
          </button>
        </form>
      </header>
    );
  }
}
export default Searchbar;

// Searchbar.propTypes = {
//   searchIcon: PropTypes.string,
//   typeSearchWord: PropTypes.func.isRequired,
//   searchPhotos: PropTypes.func.isRequired,
// };

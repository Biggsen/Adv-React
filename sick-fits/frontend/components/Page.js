import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>Page component</h2>
      {children}
    </div>
  );
}

Page.PropTypes = {
  children: PropTypes.any,
};

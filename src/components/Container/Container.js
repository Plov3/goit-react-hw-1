import PropTypes from 'prop-types';
import { GContainer } from './Container.styled';

export const Container = ({ children }) => {
  return <GContainer>{children}</GContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
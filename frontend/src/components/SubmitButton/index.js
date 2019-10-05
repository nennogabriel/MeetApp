import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function SubmitButton({ children }) {
  const working = useSelector(state => state.ux.working);
  return (
    <button type="submit" disabled={working}>
      {working ? 'Carregando...' : children}
    </button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

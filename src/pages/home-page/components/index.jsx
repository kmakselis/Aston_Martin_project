import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const propsForStyling = ['contracted'];

export const Link = styled(NavLink, {
  shouldForwardProp: (propName) => !propsForStyling.includes(propName),
})(({ theme }) => {
  const {
    palette: { common, primary, grey },
    spacing,
  } = theme;

  const commonStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing(0, 2),
    textDecoration: 'none',
  };

  return {
    ...commonStyles,
    color: grey[400],

    '&.active': {
      boxShadow: `inset 0 -2px 0 ${common.white}`,
      color: grey[50],
    },

    ':hover': {
      backgroundColor: primary.light,
      color: common.white,
    },
  };
});

import styled from '@emotion/styled';
import { Box } from '@mui/system';

export const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  order: 1,
  objectFit: 'cover',
});

export const ParamsContainer = styled(Box)({
  marginTop: '-150px',
  height: '80%',
  width: '700px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

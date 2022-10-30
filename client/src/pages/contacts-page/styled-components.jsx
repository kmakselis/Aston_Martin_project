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

export const ContentContainer = styled(Box)({
  height: '600px',
  width: '700px',
  order: 2,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
});

export const ParamsContainer = styled(Box)({
  position: 'absolute',
  top: 50,
  height: '100%',
  width: '700px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

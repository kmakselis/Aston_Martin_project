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
  position: 'absolute',
  top: 180,
  left: '5%',
  height: '500px',
  width: '95%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'start',
  flexWrap: 'wrap',
});

export const ModelNames = styled(Box)(({ theme }) => ({
  height: '80%',
  width: 650,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(6),
}));

export const ParamsContainer = styled(Box)({
  height: '300px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
});

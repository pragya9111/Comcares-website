import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { toggleTheme } from '../store/themeSlice';
import { useAppDispatch, useAppSelector, type RootState } from '../store/store';

const getSwitchStyles = (isMobile: boolean) => ({
  width: isMobile ? 45 : 62,
  height: isMobile ? 26 : 36,
  padding: isMobile ? 4 : 7,
  '& .MuiSwitch-switchBase': {
    margin: 2.5,
    padding: 0,
    transform: isMobile ? 'translateX(2px)' : 'translateX(5px)',
    '&.Mui-checked': {
      transform: isMobile ? 'translateX(17px)' : 'translateX(23px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="${isMobile ? 14 : 20
          }" width="${isMobile ? 14 : 20}" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff'
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#1b94cc',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#374151',
    width: isMobile ? 22 : 30,
    height: isMobile ? 22 : 30,
    border: '1px solid #e5e7eb',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="${isMobile ? 14 : 20
        }" width="${isMobile ? 14 : 20}" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fbbf24'
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#d1d5db',
    borderRadius: 20 / 2,
  },
});

const MaterialUISwitch = styled(Switch)<{ isMobile?: boolean }>(({ isMobile }) =>
  getSwitchStyles(isMobile ?? false)
);

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state: RootState) => state.theme);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm breakpoint <600px

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          isMobile={isMobile}
          checked={currentTheme.theme === 'dark'}
          onChange={handleChange}
          slotProps={{
            input: {
              'aria-label': 'toggle theme', // Critical for accessibility - announces the switch purpose to screen readers
            },
          }}
        />
      }
      label=""
    />
  );
};

export default ThemeToggle;
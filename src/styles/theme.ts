const ROOT_FS = 16;

const theme = {
  ROOT_FS,

  palette: {
    blue: '#34495e',
    white: '#FFFFFF',
  },

  pxToRem: (px: number): string => `${px / ROOT_FS}rem`,
};

export default theme;

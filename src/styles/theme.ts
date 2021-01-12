const ROOT_FS = 16;

const theme = {
  ROOT_FS,

  palette: {
    red: 'red',
  },

  pxToRem: (px: number): string => `${px / ROOT_FS}rem`,
};

export default theme;

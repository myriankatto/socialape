export default {
  palette: {
    primary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff',
    },
    secondary: {
      light: '#637bfe',
      main: '#3d5afe',
      dark: '#2a3eb1',
      contrastText: '#fff',
    },
  },
  spread:{
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: 'center',
    },
    image: {
      margin: '20px auto 20px auto',
      maxWidth: '50px',
    },
    pageTitle: {
      margin: '10px auto 10px auto',
      fontWeight: '100',
    },
    textField: {
      margin: '10px auto 10px auto',
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      fontWeight: '100',
      position: 'relative',
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10,
    },
    progress: {
      position: 'absolute',
    },
  }
}
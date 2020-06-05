import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    AppBar_root: {
        flexGrow: 1,
    },
    AppBar_menuButton: {
        marginRight: theme.spacing(2),
    },
    AppBar_title: {
        flexGrow: 1,
        cursor: "pointer",
    },
    Login_root: {
        display: "flex",
        height: "auto",
        minHeight: "93vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    LoginForm_root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        textAlign: "center",
        
    },
    errorMsg: {
        color: "red",
        fontSize: "11px",
        margin: "0 auto",
    }
}));

export default useStyles;
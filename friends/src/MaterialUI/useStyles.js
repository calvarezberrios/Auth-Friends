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
        "& > a": {
            margin: theme.spacing(2),
            color: "white",
            textDecoration: "none"
        }
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
    },
    Card_root: {
        minWidth: 305,
        margin: theme.spacing(1),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    Card_title: {
        fontSize: 14,
    },
    Card_pos: {
        marginBottom: 12,
    },
    Grid_root: {
        flexGrow: 1,
    }
}));

export default useStyles;
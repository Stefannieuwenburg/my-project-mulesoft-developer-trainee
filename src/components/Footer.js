import "../App.css";
import { Box, Typography, Link } from "@material-ui/core";

function Copyright() {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            className="footer"
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const Footer = () => {
    return (
        <>
            <Box
                sx={{ bgcolor: "background.paper", p: 6 }}
                component="footer"
                className="footer"
            >
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    from stefan Nieuwenburg
                </Typography>
                <Copyright />
            </Box>
        </>
    );
};

export default Footer;

import "../App.css";
import { Box, Typography, Link } from "@material-ui/core";

function Copyright() {
    return (
        <Typography
            style={{ color: "white" }}
            variant="body2"
            align="center"
            className="footer"
        >
            {"Copyright © "}
            <Link
                style={{ color: "white" }}
                href="https://mulesoft.com"
            >
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
                    style={{ color: "white" }}
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

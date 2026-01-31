import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import './style.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
        <Box
            id="Footer"
            component="footer"
            sx={{
                px: 3,
                py: 4,
                backgroundColor: "#121212", // خلفية سوداء حقيقية
                color: "#fff",
            }}
        >

            {/* Top */}
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
            >
                {/* Brand */}
                <Box>
                    <Typography fontSize={20} fontWeight={700}>
                        Adam Food
                    </Typography>
                    <Typography fontSize={13} color="rgba(255,255,255,0.7)">
                        Fresh food delivered fast
                    </Typography>
                </Box>

                {/* Links */}
                <Stack direction="row" spacing={3}>
                    <Typography fontSize={14} sx={{ cursor: "pointer" }}>
                        Home
                    </Typography>
                    <Typography fontSize={14} sx={{ cursor: "pointer" }}>
                        Menu
                    </Typography>
                    <Typography fontSize={14} sx={{ cursor: "pointer" }}>
                        Contact
                    </Typography>
                </Stack>

                {/* Social */}
                <Stack direction="row" spacing={1}>
                    <IconButton sx={{ color: "#fff" }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#fff" }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: "#fff" }}>
                        <TwitterIcon />
                    </IconButton>
                </Stack>
            </Stack>

            <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

            {/* Bottom */}
            <Typography
                fontSize={12}
                textAlign="center"
                color="rgba(255,255,255,0.6)"
            >
                © {new Date().getFullYear()} Adam Food. All rights reserved.
            </Typography>
        </Box>
    );
}

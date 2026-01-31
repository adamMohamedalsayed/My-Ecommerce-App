import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import './payment.css'
export default function Payment({ handleCloseClick }) {
    return (
        <form
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: '#121212'
            }}
        >
            <Card
                sx={{
                    minWidth: 350,
                    maxWidth: 400,
                    borderRadius: 4,
                    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                    bgcolor: "#121212",
                    color: "#fff",

                    '@media (max-width:400px)': {
                        minWidth: 280,
                        width: '95%',
                    }
                }}
            >
                <CardContent>
                    {/* Header */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
                            Payment
                        </Typography>

                        <IconButton onClick={handleCloseClick}>
                            <CloseIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </div>

                    {/* Inputs */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{
                            mb: 2,
                            input: { color: "#fff" },
                            label: { color: "#aaa" },
                            fieldset: { borderColor: "#444" },
                        }}
                    />

                    <TextField
                        label="Card Number"
                        variant="outlined"
                        fullWidth
                        sx={{
                            mb: 2,
                            input: { color: "#fff" },
                            label: { color: "#aaa" },
                            fieldset: { borderColor: "#444" },
                        }}
                    />

                    <TextField
                        label="Expiry Date"
                        variant="outlined"
                        fullWidth
                        sx={{
                            mb: 2,
                            input: { color: "#fff" },
                            label: { color: "#aaa" },
                            fieldset: { borderColor: "#444" },
                        }}
                    />

                    <TextField
                        label="CVV"
                        variant="outlined"
                        fullWidth
                        sx={{
                            mb: 3,
                            input: { color: "#fff" },
                            label: { color: "#aaa" },
                            fieldset: { borderColor: "#444" },
                        }}
                    />

                    {/* Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 1.3,
                            borderRadius: 3,
                            fontSize: 16,
                            fontWeight: 600,
                            textTransform: "none",
                            background: "linear-gradient(135deg, #2196f3, #21cbf3)",
                            transition: "0.3s",
                            '&:hover': {
                                transform: "translateY(-10px)",
                                boxShadow: "0 8px 20px rgba(33,203,243,0.4)",
                            }
                        }}
                    >
                        Pay Now
                    </Button>
                </CardContent>
            </Card>
        </form>
    );
}

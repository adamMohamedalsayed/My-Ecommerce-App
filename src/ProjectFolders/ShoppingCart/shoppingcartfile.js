import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Payment from "../paymentFolder/payment";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
export default function ShoppingCart({ close, cartItems }) {
    const [open, setopen] = useState(false)
    function click() {
        close()
    }
    function handleClose() {
        setopen(false)
    }
    function handleClickClose() {
        setopen(false)
    }


    return (
        <Box
            sx={{
                position: "fixed",
                zIndex: 1000,
                alignItems: 'center',
                '@media (max-width:380px)': {
                    width: '400px'
                }
            }}
        >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        minWidth: 350,     // الحجم الافتراضي
                        width: '90%',      // عرض نسبي
                        maxWidth: 400,     // الحد الأقصى للعرض
                        '@media (max-width:400px)': {  // لو الشاشة <=400px
                            minWidth: 280,  // تصغير الحجم
                            width: '95%',
                        }
                    }

                }}
            >
                <Payment handleCloseClick={handleClickClose} />
            </Dialog>
            <Card
                sx={{
                    width: 320,
                    borderRadius: 3,
                    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                }}
            >
                {/* Header */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: 2,
                        py: 1.5,
                    }}
                >
                    <Typography fontWeight={600}>
                        Shopping Cart
                    </Typography>

                    <IconButton size="small" onClick={click}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider />

                {/* Content */}
                <CardContent>

                    <Box
                        sx={{
                            p: 2,
                            borderTop: "1px solid #eee",
                            backgroundColor: "#fafafa",
                        }}
                    >
                        {/* Total */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1.5,
                            }}
                        >
                            <Typography fontSize={14} color="text.secondary">
                                Total
                            </Typography>
                            <Typography fontSize={16} fontWeight={700}>
                                ${cartItems.length * 50}
                            </Typography>
                        </Box>

                        {/* Checkout Button */}
                        <Button
                            onClick={() => setopen(true)}
                            variant="contained"
                            fullWidth
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                py: 1,
                                fontWeight: 600,
                                fontSize: "15px",
                                background: "linear-gradient(135deg, #1976d2, #42a5f5)",
                                boxShadow: "0 6px 20px rgba(25,118,210,0.35)",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #1565c0, #1e88e5)",
                                },
                            }}
                        >
                            Checkout
                        </Button>

                        {/* Small note */}
                        <Typography
                            fontSize={11}
                            color="text.secondary"
                            textAlign="center"
                            mt={1}
                        >
                            Taxes and delivery calculated at checkout
                        </Typography>
                    </Box>

                </CardContent>

                <Divider />

                {/* Footer */}
                {/* <Box sx={{ p: 2 }}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            textTransform: "none",
                            borderRadius: 2,
                        }}
                    >
                        Checkout
                    </Button>
                </Box> */}
            </Card>
        </Box>
    );
}

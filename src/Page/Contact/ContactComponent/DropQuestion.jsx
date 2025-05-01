import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const DropQuestion = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 5,
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%", lg: "100%" },
          maxWidth: 800,
          mx: "auto",
          p: { xs: 3, sm: 4, md: 5 },
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 4,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Box mb={4}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "text.primary",
            }}
          >
            Leave a Question
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Fill out the form and send us your questions
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            fullWidth
            id="name"
            label="Your Name"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaRegUser style={{ color: "#6b7280" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "divider",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <TextField
            fullWidth
            id="email"
            label="Your Email"
            variant="outlined"
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MdOutlineEmail style={{ color: "#6b7280" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "divider",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <TextField
            fullWidth
            id="phone"
            label="Your Phone"
            variant="outlined"
            type="tel"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FaPhone style={{ color: "#6b7280" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "divider",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <TextField
            fullWidth
            id="question"
            label="Your Question"
            variant="outlined"
            multiline
            rows={4}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <TiMessages
                    style={{
                      color: "#6b7280",
                      alignSelf: "flex-start",
                      marginTop: 8,
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "divider",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              mt: 1,
              backgroundColor: "#141F51",
              color: "primary.contrastText",
              "&:hover": {
                backgroundColor: "#141F51",
                transform: "translateY(-2px)",
              },
              borderRadius: 3,
              transition: "all 0.3s ease",
            }}
          >
            Submit Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DropQuestion;

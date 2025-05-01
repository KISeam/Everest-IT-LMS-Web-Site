import React from "react";
import { Box, Typography } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

const Address = () => {
  return (
    <Box 
      component="section"
      sx={{
        py: { xs: 4, md: 5 },
        px: { xs: 2, sm: 4 },
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', lg: 1200 },
          mx: 'auto',
          p: { xs: 3, md: 5 },
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 4,
          boxShadow: 2,
          backgroundColor: 'background.paper'
        }}
      >
        <Box mb={{ xs: 4, md: 6 }}>
          <Typography 
            variant="h4" 
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
              fontSize: { xs: '1.75rem', md: '2.125rem' }
            }}
          >
            Office Information
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Completely recapitalize 24/7 communities via standards compliant metrics whereas.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, md: 5 }
          }}
        >
          {/* Phone & Email */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: { xs: 3, md: 4 },
              pb: { xs: 4, md: 5 },
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:hover .icon-box': {
                backgroundColor: '#141F51',
                color: 'primary.contrastText'
              }
            }}
          >
            <Box
              className="icon-box"
              sx={{
                flexShrink: 0,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 2,
                transition: 'all 0.3s ease',
                color: 'text.secondary'
              }}
            >
              <FaPhoneAlt style={{ fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography 
                variant="h6" 
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'text.primary'
                }}
              >
                Phone Number & Email
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                +88 01321231802
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                info@bdcallingacademy.com
              </Typography>
            </Box>
          </Box>

          {/* Address */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: { xs: 3, md: 4 },
              pb: { xs: 4, md: 5 },
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:hover .icon-box': {
                backgroundColor: '#141F51',
                color: 'primary.contrastText'
              }
            }}
          >
            <Box
              className="icon-box"
              sx={{
                flexShrink: 0,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 2,
                transition: 'all 0.3s ease',
                color: 'text.secondary'
              }}
            >
              <FaLocationDot style={{ fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography 
                variant="h6" 
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'text.primary'
                }}
              >
                Our Office Address
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Daisy Garden, House 14, Block A, Banasree, main road, Dhaka-1219
              </Typography>
            </Box>
          </Box>

          {/* Work Time */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: { xs: 3, md: 4 },
              '&:hover .icon-box': {
                backgroundColor: '#141F51',
                color: 'primary.contrastText'
              }
            }}
          >
            <Box
              className="icon-box"
              sx={{
                flexShrink: 0,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 2,
                transition: 'all 0.3s ease',
                color: 'text.secondary'
              }}
            >
              <MdOutlineWatchLater style={{ fontSize: '1.5rem' }} />
            </Box>
            <Box>
              <Typography 
                variant="h6" 
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'text.primary'
                }}
              >
                Official Work Time
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Saturday - Friday 9:00 am to 6:00 pm
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Address;
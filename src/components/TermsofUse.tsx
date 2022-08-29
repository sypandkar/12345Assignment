import { Box, Typography } from "@material-ui/core";
import "../assets/styles/termsOfUse.scss";
const TermsofUse = () => {
  return (
    <Box width="75%" maxWidth="60%" p={2} className="wrapper-term">
      <Box>
        <Typography variant="h2" className="normalFontWeight">
          Terms of Use
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsofUse;

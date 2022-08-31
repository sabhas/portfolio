import { IconButton, Link } from "@mui/material"
import { Facebook, LinkedIn, GitHub } from "@mui/icons-material"

const SocialIcons = () => (
  <>
    <IconButton
      component={Link}
      href="https://www.linkedin.com/in/sabir-hassan-8b1484140/"
      target="_blank"
      rel="noopener"
    >
      <LinkedIn />
    </IconButton>
    <IconButton
      component={Link}
      href="https://github.com/sabhas"
      target="_blank"
      rel="noopener"
    >
      <GitHub />
    </IconButton>
    <IconButton
      component={Link}
      href="https://www.facebook.com/sabirhassan06"
      target="_blank"
      rel="noopener"
    >
      <Facebook />
    </IconButton>
  </>
)

export default SocialIcons

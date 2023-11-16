import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AboutAvatar from "../assets/about-avatar.svg";
import { skills, skillsHeading } from "../lib/Constants";

const About = () => {
  return (
    <div>
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            backgroundImage: `url(${AboutAvatar})`,
            backgroundSize: "100vw 100vh",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >
          <Grid container spacing={2} sx={{ p: 4 }}>
            <Grid item xs={12} sm={6}>
              <Card style={{ backgroundColor: "#e1f8e8" }}>
                <CardHeader title="About me" />
                <CardContent>
                  <Typography>
                    {`For the longest time since teenage, my goal was pretty simple: Turning challenges into solutions. Hi, I'm Anapeksha, your dedicated software developer and coding consultant. 
                            Are you looking to boost your revenue through an effective online presence, or turning innovative ideas into successful code? I'm here to offer you custom solutions crafted just for you.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card style={{ backgroundColor: "#e1f8e8" }}>
                <CardHeader title="Why Work with Me?" />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemText>
                        - Revenue Growth: Enhancing your online presence can
                        potentially increase your revenue by 75%.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Problem Solver: Struggling with coding challenges? I
                        specialize in turning complex ideas into functional
                        code.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Personal Touch: I believe in a personalized approach
                        to meet your specific needs.
                      </ListItemText>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card style={{ backgroundColor: "#e1f8e8" }}>
                <CardHeader title="Experience and Skills" />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemText>
                        - Diverse Projects: I've successfully worked with over
                        10 client companies and partners.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Efficiency Expert: My automation skills have reduced
                        daily tasks by 50%, cutting costs by up to 25%.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Tech Versatility: From websites to mobile apps and
                        automated scripts, I've built over 20 diverse projects.
                      </ListItemText>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card style={{ backgroundColor: "#e1f8e8" }}>
                <CardHeader title="My Commitment to You" />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemText>
                        - Competitive Pricing: Get top-notch services at a fair
                        rate.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Quality Delivery: I guarantee 100% quality in all
                        deliverables.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Tailored Solutions: Each project is customized for
                        your unique requirements.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Ongoing Support: Offering tailored maintenance
                        services.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        - Integration Expertise: Seamless integration with your
                        existing systems.
                      </ListItemText>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Stack spacing={2} sx={{ ml: 4 }}>
            <Typography gutterBottom>{skillsHeading}</Typography>
            <Grid container rowGap={2}>
              {skills.map((value, index) => {
                return (
                  <Grid item xs={6} sm={4}>
                    <Chip
                      icon={<CheckCircle color="primary" />}
                      label={value}
                      key={index}
                      color="secondary"
                      sx={{ whiteSpace: "normal" }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default About;

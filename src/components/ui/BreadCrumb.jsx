import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadCrumb = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="blue" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Typography
      underline="hover"
      key="2"
      color="blue"
      href="/"
      onClick={handleClick}
    >
      Attractions
    </Typography>,
    <Typography key="3" color="text.primary"></Typography>,
  ];

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumb;

import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const data = useLocation();
  return (
    <div className="mb-12">
      <h1 className="text-2xl font-semibold capitalize">
        {data?.pathname.slice(1, 100).split("-").join(" ")}
      </h1>
      <p className="capitalize">
        Welcome to {data?.pathname.slice(1, 100).split("-").join(" ")} Page
      </p>
      <div role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ fontSize: 14, margin: "2px 0" }}
        >
          <Link underline="hover" color="inherit" href="/dashboard">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/dashboard"
            className="capitalize"
          >
            <Typography color="text.primary" className="capitalize">
              {data?.pathname.slice(1, 100).split("-").join(" ")}
            </Typography>
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Navigation;

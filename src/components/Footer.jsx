import ExploreIcon from "@mui/icons-material/Explore";
import ApprovalIcon from "@mui/icons-material/Approval";

const Footer = () => {
  return (
    <div className="mt-auto bg-slate-100 py-3 flex justify-around text-sm border-t-2 border-emerald-200">
      <a href="/" className="text-emerald-600">
        <div className="grid place-items-center">
          <ExploreIcon />
        </div>
        <span className="text-xs">Explore</span>
      </a>
      <a href="/upload" className="text-emerald-600">
        <div className="grid place-items-center">
          <ApprovalIcon />
        </div>
        <span className="text-xs">Upload</span>
      </a>
    </div>
  );
};

export default Footer;

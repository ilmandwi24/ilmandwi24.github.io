import Link from "next/link";
import Divider from "../../divider";

const Footer = () => {
  return (
    <footer className="-translate-y-px bg-white  border-border ">
      <Divider />
      <div className="container">
        <div className="border-x border-border">
          <div className="max-w-3xl mx-auto text-center   gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
            <p>
              2026 © | Template {" "} dari {" "}
              <Link
                href={"https://shadcnspace.com/templates/typefolio"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                shadcnspace.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

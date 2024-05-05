import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <Link to="/" className="mb-10 bold-20 ">
            Shoppee
          </Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link to="/" key={link.label}>
                    <p>{link.label}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default Footer;

import type { FooterType } from "../types";

interface FooterProps {
  footer: FooterType;
}

const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="border-t border-gray-200 py-4">
      <div className="container mx-auto p-8 space-y-8">
        <div className="flex justify-between flex-col-reverse md:flex-row">
          <div className="space-y-8">
            <img src={footer.logo} alt="logo" className="w-24 hidden md:block" />
            <div className="space-y-2">
              <div>Follow us</div>
              <div className="flex space-x-4">
                {footer.socials.map((social) => (
                  <a href={social.url} target="_blank" rel="noreferrer">
                    <img src={social.logo} alt={social.alt ?? social.name} className="w-10" />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div>Download the app now!</div>
              <div className="flex space-x-4">
                {footer.download.map((item) => (
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <img src={item.logo} alt={item.alt ?? item.name} className="h-12 object-contain" />
                  </a>
                ))}
              </div>
              <img src="/footer/shopee-link.png" alt="qr code" className="w-40" />
            </div>
          </div>
          <div>
            <img src={footer.logo} alt="logo" className="w-24 md:hidden block mt-2 sm:mt-0" />
            <div className="flex gap-8 flex-col md:flex-row">
              {footer.links.map((link) => (
                <div className="space-y-4">
                  <div className="text-gray-500">{link.title}</div>
                  {link.items.map((item) => (
                    <a
                      href={item.url}
                      className="block hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto border-t text-center text-gray-500 text-sm p-8">
          <p>Copyright © Shopee Limited . Trademarks belong to their respective owners. All rights reserved.</p>
          <div>
            <a
              href="https://help.shopee.ph/portal/article/133983"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            |
            <a
              href="https://help.shopee.ph/portal/article/77307?gclid=Cj0KCQjwxuCnBhDLARIsAB-cq1pM23WCSrVAx9Me_e3mvq5_kbatXUfaY0w-gIA0e_AcJ3odAIKTY8UaAk9FEALw_wcB"
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

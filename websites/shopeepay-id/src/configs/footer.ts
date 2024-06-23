import { type Footer } from "../types";
import download from "./download";

const footer: Footer = {
  logo: "/spay.svg",
  download: download,
  socials: [
    {
      text: "Facebook",
      url: "https://www.facebook.com/ShopeePayPH",
      logo: "/footer/facebook.svg",
      alt: "Facebook",
    },
    {
      text: "Instagram",
      url: "https://www.instagram.com/shopeepay_ph/",
      logo: "/footer/instagram.svg",
      alt: "Instagram",
    },
    {
      text: "Tiktok",
      url: "https://www.tiktok.com/@shopeepay_ph",
      logo: "/footer/tiktok.svg",
      alt: "Twitter",
    },
  ],
  links: [
    {
      title: "Customer Service",
      items: [
        {
          name: "ShopeePay Features",
          url: "https://www.shopee.ph/m/shopeepay-features",
        },
        {
          name: "Merchants",
          url: "https://www.shopee.ph/m/shopeepay-merchant",
        },
        {
          name: "Help Center",
          url: "https://help.shopee.ph/s/article/Contact-Us",
        },
      ],
    },
    {
      title: "Explore ShopeePay",
      items: [
        {
          name: "About Us",
          url: "https://www.shopee.ph/m/shopeepay-about-us",
        },
        {
          name: "Terms of Service",
          url: "https://www.shopee.ph/m/shopeepay-terms-of-service",
        },
        {
          name: "Privacy Policy",
          url: "https://www.shopee.ph/m/shopeepay-privacy-policy",
        },
      ],
    },
  ],
  copyright: {
    title: "Copyright © Shopee Limited . Trademarks belong to their respective owners. All rights reserved.",
    privacyLink: {
      lang: "footer.privacy",
      text: "Privacy Policy",
      url: "https://help.shopee.ph/portal/article/133983",
    },
    termsLink: {
      lang: "footer.terms",
      text: "Terms of Service",
      url: "https://help.shopee.ph/portal/article/133984",
    },
  },
};

export default footer;

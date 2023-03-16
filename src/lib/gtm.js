export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
const isProd = process.env.NODE_ENV !== "production";

export const pageview = (url) => {
  if (!isProd) return;
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export const menuClick = (value) => {
  if (!isProd) return;
  window.dataLayer.push({
    event: "menu_click",
    menu_name: value,
  });
};

export const mainCardClick = (value) => {
  if (!isProd) return;
  window.dataLayer.push({
    event: "main_card_click",
    card_name: value,
  });
};

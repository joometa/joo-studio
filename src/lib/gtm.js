export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export const menuClick = (value) => {
  window.dataLayer.push({
    event: "menu_click",
    menu_name: value,
  });
};

export const mainCardClick = (value) => {
  window.dataLayer.push({
    event: "main_card_click",
    card_name: value,
  });
};

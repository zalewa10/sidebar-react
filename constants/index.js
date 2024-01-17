import {
  bike,
  logo,
  cart,
  ebike,
  explore,
  home,
  search,
  send,
} from "@/public/icons/index";

export const logoTop = [{ imgURL: logo, name: "TopBike", href: "/" }];

export const main = [
  { imgURL: home, name: "Home", href: "/" },
  { imgURL: search, name: "Search", href: "/search" },
];

export const navi = [
  { imgURL: explore, name: "Explore", href: "/" },
  { imgURL: bike, name: "Bikes", href: "/" },
  { imgURL: ebike, name: "E-Bikes", href: "/" },
  { imgURL: cart, name: "Cart", href: "/" },
];

export const bottom = [{ imgURL: send, name: "Send", href: "/" }];

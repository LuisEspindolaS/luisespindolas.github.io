import { SITE } from "../../config/site";

export default function Footer() {
  return <footer>© {new Date().getFullYear()} {SITE.name}</footer>;
}

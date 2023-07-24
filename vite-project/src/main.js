import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import classes from "./main.module.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/Products";
import NotFoundPage from "./pages/NotFound";
import { render, router } from "./utilities";
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/products", () => render(ProductsPage, app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();

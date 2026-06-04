import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { EnerjiDagitimSistemi } from "./pages/EnerjiDagitimSistemi";
import { PanoSistemleri } from "./pages/PanoSistemleri";
import { ServisBakim } from "./pages/ServisBakim";
import { DevreyeAlma } from "./pages/DevreyeAlma";
import { Otomasyon } from "./pages/Otomasyon";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/enerji-dagitim-sistemi",
    Component: EnerjiDagitimSistemi,
  },
  {
    path: "/pano-sistemleri",
    Component: PanoSistemleri,
  },
  {
    path: "/servis-bakim",
    Component: ServisBakim,
  },
  {
    path: "/devreye-alma",
    Component: DevreyeAlma,
  },
  {
    path: "/otomasyon",
    Component: Otomasyon,
  },
]);
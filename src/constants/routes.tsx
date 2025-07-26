import { AuthUI } from "../pages/AuthUi";
import { HomePage } from "../pages/Home";


export const route = [
  {
    path: "/auth",
    element: <AuthUI />,
  },
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
];

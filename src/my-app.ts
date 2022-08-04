import { IRouteViewModel, IChildRouteConfig } from "@aurelia/router-lite";

export class MyApp implements IRouteViewModel {
  static routes: IChildRouteConfig[] = [
    {
      id: "page-1",
      path: ["page-1"],
      component: () => import("./pages/page-1"),
      viewport: 'main'
    },
    {
      id: "page-2",
      path: ["page-2"],
      component: () => import("./pages/page-2"),
      viewport: 'main'
    },
    {
      id: "page-3",
      path: ["page-3"],
      component: () => import("./pages/page-3"),
      viewport: 'main'
    },
  ];
}

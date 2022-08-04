import Aurelia from "aurelia";
import { RouterConfiguration } from '@aurelia/router-lite';
import { MyApp } from "./my-app";

Aurelia.register(RouterConfiguration.customize({ resolutionMode: 'static' })).app(MyApp).start();

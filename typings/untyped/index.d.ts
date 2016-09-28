///<reference path="../index.d.ts"/>

declare module "offline-plugin/runtime" {
  export var install: Function;
}

declare module "warning" {
  var warning: (boolean, string) => void;
  export = warning;
}

declare module "expect" {
  import EventHandler = __React.EventHandler;
  import SyntheticEvent = __React.SyntheticEvent;
  interface Spy extends EventHandler<SyntheticEvent> {
    (): EventHandler<SyntheticEvent>;
  }
}

declare module _ {
  export interface LoDashStatic {
    conformsTo: (a: any, b: any) => boolean;
  }
}


declare module "react-router-scroll" {
  export var useScroll: Function; //TODO: needs type definition
}

declare module "react-router" {
  var applyRouterMiddleware: (...funcs: Function[]) => Element; //TODO: type definition not up to date?
}

declare namespace Redux { //TODO: better method?

  export interface IDevTools extends IDevToolsStatic {
    new (): JSX.ElementClass
  }

  export interface IDevToolsStatic extends Function {
    instrument(): (opts: any) => any;
    updateStore(store: Redux.Store<any>) : void;
  }
}

declare namespace ReactRouter {
  interface RouterProps {
    render?: Element; //TODO: not sure why definition file does not have this. Is this not a public api attribute?
  }
}

interface NodeModule {
  hot: {
    accept: (path: string, callback: () => void ) => void
  };
}

interface Window {
  Intl: any;
  devToolsExtension: Redux.IDevTools;
}
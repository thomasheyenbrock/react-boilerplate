declare type ReadableStream = NodeJS.ReadableStream; // TODO: proper fix for whatwg-fetch?

declare module "offline-plugin/runtime" {
  export var install: Function;
}

declare module "warning" {
  var warning: (boolean, string) => void;
  export = warning;
}

declare module Expect {
  import EventHandler = React.EventHandler;
  import SyntheticEvent = React.SyntheticEvent;
  interface Spy extends EventHandler<SyntheticEvent<any>> {
    (): EventHandler<SyntheticEvent<any>>;
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

interface NodeModule {
  hot: {
    accept: (path: string, callback: () => void ) => void
  };
}

interface Window {
  Intl: any;
}
declare function init(url: string): Promise<void>;
declare function init_functions(url: string): Promise<void>;
declare function readData(): any;
declare function readFunctions(): any;
declare function getData(url: string): Promise<any>;
declare function getFunctions(url: string): Promise<any>;
declare const _default: {
    init: typeof init;
    readData: typeof readData;
    getData: typeof getData;
    getFunctions: typeof getFunctions;
    init_functions: typeof init_functions;
    readFunctions: typeof readFunctions;
};
export default _default;

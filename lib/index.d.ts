declare function init(url: string): Promise<void>;
declare function readData(): any;
declare function getData(url: string): Promise<any>;
declare const _default: {
    init: typeof init;
    readData: typeof readData;
    getData: typeof getData;
};
export default _default;

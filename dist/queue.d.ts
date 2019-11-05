export declare type RunFunction = (() => Promise<unknown>) | ((arg: any) => Promise<unknown>);
export interface Queue<Options> {
    size: number;
    dequeue(): RunFunction | undefined;
    enqueue(run: RunFunction, options?: Partial<Options>): void;
}

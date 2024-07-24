export type AccessorFn = (item: any) => any;

export function accessorFn(p : AccessorFn | string | bigint | boolean | number) : AccessorFn {
    if (typeof p === 'function')
        return p;

    if (typeof p === 'string')
        return (obj : Record<string, unknown>) => obj[p];

    return (_ : any) => p; // any constant
}

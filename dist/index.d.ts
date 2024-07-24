type AccessorFn = (item: any) => any;
declare function accessorFn(p: AccessorFn | string | bigint | boolean | number): AccessorFn;

export { type AccessorFn, accessorFn };

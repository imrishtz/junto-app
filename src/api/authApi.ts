export function loginApi() {
    return new Promise<{data: string}>(resolve =>
        setTimeout(() => resolve({data: 'yo'}), 1000),
    );
}

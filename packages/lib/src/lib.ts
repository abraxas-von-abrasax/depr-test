export namespace Lib {
    export function f() {
        console.log('[f] hello world');
    }

    /**
     * @deprecated Don't use this function anymore. Use Lib.f() instead.
     */
    export function g() {
        console.log('[g] hello world')
    }
}

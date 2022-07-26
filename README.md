# Sample repository for reproducing an issue where Intellisense cannot detect deprecated functions if they are re-exported

This issue happens when a consumer package (here: `@depr-test/main`) uses a deprecated function from a library
(here `@depr-test/lib`) if this deprecated function is not consumed directly from this library but from another package
(here `@depr-test/wrapper`) which re-exports the affected function.

## Steps to reproduce

1. Make sure you use `node:16.16.0` and `npm:8.15.0` (I tried it with other node/npm versions with the same result though)
2. Run `npm install` in the root directory
3. Run `npm start` in the root directory. This should print the following:

```text
[f] hello world // <-- imported from @depr-test/lib, non-deprecated function
[g] hello world // <-- imported from @depr-test/lib, function marked as @deprecated
===============
[f] hello world // <-- imported from @depr-wrapper/lib, non-deprecated function
[g] hello world // <-- imported from @depr-wrapper/lib, function marked as @deprecated
```
Now you are sure that the code has compiled correctly.

4. Open `packages/main/src/main.ts`. You will see the following main function:

```typescript
function main() {
    // Imported directly from @depr-test/lib
    const lib = Lib;
    lib.f();
    lib.g();    // <-- This is correctly crossed out (i.e. correctly identified as deprecated)

    console.log('===============')

    // Imported from @depr-test/wrapper
    const lib2 = Wrapper.lib;
    lib2.f();
    lib2.g();   // <-- This is *not* crossed out!
}
```

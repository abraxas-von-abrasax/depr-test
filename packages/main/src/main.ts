import { Wrapper } from '@depr-test/wrapper';
import { Lib } from '@depr-test/lib';

main();

function main() {
    // Imported directly from @depr-test/lib
    const lib = Lib;
    lib.f();
    lib.g();

    console.log('===============')

    // Imported from @depr-test/wrapper
    const lib2 = Wrapper.lib;
    lib2.f();
    lib2.g();
}

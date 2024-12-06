## PSR 2 \[Deprecated] - Coding Style Guide

As of 2019, PSR-12 is an alternative

- 4 spaces indentation, no tabs
- No hard line limit, 120 soft limit, <80 characters recommanded
- Must use Unix LF for line ending, no trailing whitespace on non-blank lines
- Single empty line at the end, `?>` omitted for PHP-only files

### Declarations

```php
<?php 
namespace Vendor\Package;
# Empty line after "namespace" declaration
use FooNamespace;
use BarNamespace;
# Empty line after "use" declarations block

```

### Classes, properties and methods

```php
class Foo extends Bar implements Baz
{ # New line
    # Properties and methods:
    # [abstract|final] > public/protected/private > [static]
    # No var, No underscore for private/protected
    final protected static string $prop = "val";

    public methodName(int $arg1, int $arg2, int $arg3 = []) # Default value at the end
    { # New line
        # Space after control strucutre keyword, not inside parentheses
        if (true) { # Same line
            // ...
        } # New line
    } # New line

    public method2(
        $arg1,
        $arg2
    ) {
        // ...
    }
} # New line

class Foo2 implements
    /Baz1
    /Baz2
    /Baz3
{
    // ...
}

```

### Control structures and closures

```php
if ($exp1) {
    // ...
} elseif ($exp2) {
    // ...
} else {
    // ...
}

switch ($expr) {
    case 0:
        // ...
        break;
    case 1:
        // ...
        // NO-BREAK
    case 2:
    case 3:
        // ...
        return;
    default:
        // ...
        break;
}

$closureWithArgsAndVars = function ($arg1, $arg2, $arg3 = []) use ($var1, $var2) {
    // ...
};

```
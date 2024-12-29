# PERL Basics

*[Home](../README.md)* &nbsp; › &nbsp; 
*[PERL](./perl.md)* &nbsp; › &nbsp; 
*Basics*

---

## Comments

```perl
# Inline comment

=pod
Block comment
=cut
```

## Variables 

Declaration

```perl
my $var = "Hello world"; # Scalar
my %hash = (             # Hash
    "apple" => "red"
);

# Arrays
@arr = (1, 2, 3);
@arr = (1..5);
@slice = @arr[0,2..4];
$length = @arr;
$last_index = $#a;
$scalarElem = $arr[0]; # Use $ to ref scalar, even when array
($a, $b) = ($b, $a);


$str = "Hey" x 4;        # $str is "HeyHeyHeyHey"
```

Comparison

|       |       |                   |
|-------|-------|-------------------|
| `==`  | `!=`  | Equal / Not equal |
| `eq`  | `ne`  | Str equal / Str not equal |
| `=~`  | `!~`  | Str contains / Does not contain |
| `<`   | `>`   | Less / Greater |
| `<=`  | `>=`  | Less or equal / Greater or equal |
| `lt`  | `gt`  | Stringwise less / Stringwise greater |
| `le`  | `ge`  | Strw less or equal / Strw greater or equal |
| `<=>` | `cmp` | Both returns -1, 0 or 1 |

## Functions (subroutines)

```perl
sub function {
    my $args = shift;

    return $args # Optional
}
```

## Control flow

```perl
# If, Else If, Else
if ($x > 4) {
    ...
} elsif ($x == 5) {
    ...
} else {
    ...
}

# Unless
unless ($x > 0) { ... }

# Ternary
$x = 1 > 2 ? 3 : 4;

# Inlide if
print "True" if 1 == 1;
```

## Loops

```perl
# For
for my $i (0..5) { print "$i\n"; }

# Foreach
foreach my $item (@arr) { print "$item\n"; }
foreach (@arr) { print "$_\n"; }
for (@arr) { print "$_\n"; }
foreach my $key (keys %hash) { ... }

# While, Until and Inline while
while ($x < 10) { $x++; }
until ($x < 5) { $x--; }
print "Infinite" while 1;
```
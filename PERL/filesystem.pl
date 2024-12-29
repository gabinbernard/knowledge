open $f, '<', 'file.txt' or die "Error: $!";
while ($l=<$f>) {
    print $l;
}
close $f;

open $w, '>', 'output.txt' or die "Error: $?";
print $w "Heyyyy";
close $w;
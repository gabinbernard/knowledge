

my %hash = ("key" => "value");
my $hash_val = $hash{"key"};

sub greet {
    ($name) = shift;
    print "Hello $name\n";
}
greet("my friend");

sub add {
    ($a,$b)=@_;
    return $a+$b;
}
print add(1, 2);

$txt = "1,2,3";
@splitted = split(",", $txt);
$txt = join(",", @splitted);

print $txt;

print "\n\n";

$text = "Hello my friend";
if ($text =~ /Hello/) {
    print "Match!\n";
}

$text =~ s/o/0/g;
print "$text\n";

@arr = $text =~ /[a-z]/g;
print join(',', @arr);

$arr_ref = \@arr;
print $arr_ref->[0];
$hash_ref = \%hash;
print $hash_ref->{key};

warn "WOOOOH";
die "WHOOOOPS";
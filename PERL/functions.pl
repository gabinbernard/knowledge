# Remove trailing \n
$input = "Hello world\n";
chomp($input);
print "$input\n";

# Remove last character
$input = "Hello";
chop $input;
print "$input\n";

# Returns character corresponding to code, and inverse
print chr 97,$/;
print ord a,$/;

# Hash
print crypt("Text", "Password"),$/;

# Interpet octal or hexadecimal string
print oct "0o77",$/;
print hex "0xFF",$/;

# Returns index of first occurence, -1 if not found
print index(Perl, e),$/;

# Lower case and uppercase
print lc "Hey\n";
print uc "Hey\n";
print lcfirst "HEY\n";
print ucfirst "hey\n";

# Length
print length Salut,$/;
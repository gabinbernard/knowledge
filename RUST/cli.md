# Rust CLI

*[Home](../README.md)* &nbsp; › &nbsp;
*[Rust](./rust.md)* &nbsp; › &nbsp;
*CLI*

---

## rustr

```bash
# Compile main.rs
rustc
    -v # Verbose
    --target=<target> # For example x86_64-unknown-linux-gnu
    --edition=<edition> # Rust edition
    --crate-type=<bin | lib | rlib ...> # Crate type
    -C <flag> # Compiler options 
        --opt-level=3 # Optimisations
    --release # With optimisations
    main.rs
    -o filename # Output file

# Debugging
rustc
    -g # Include debug informations
    --pretty=expanded # Pretty output
    --pretty=ast # Show abstract syntax tree
    --emit=llvm-ir # Show LLVM intemediate representation
    --emit=asm # Show assembly code
    --emit=obj # Show the machine code
    --check # Check for errors without compiling
    main.rs
```
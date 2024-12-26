# Cargo

*[Home](../README.md)* &nbsp; › &nbsp;
*[Rust](./rust.md)* &nbsp; › &nbsp;
*Cargo*

---

### CLI

```bash
cargo new [--bin | --lib] <project-name>
cargo build [--release]                 # Build
cargo run [--release]                   # Build and run
cargo test [--release] [<test-name>]    # Run tests
cargo bench                             # Run benchmarks
cargo doc [--open]                      # Build [or open] doc
cargo check                             # Check errors without building
cargo update                            # Update .toml dependencies
cargo clean                             # Clean target directory
cargo { add | remove } <package-name>   # Add package
cargo tree [--all]                      # Deps. tree [w/ transitives]
cargo install <tool-name>               # Install a CLI tool
cargo publish                           # Publish crate to crates.io
cargo show <crate-name>                 # Show detailed infos
```

### Config file

Package manifests cannot be changed in already published versons

```toml
[package]
name = "project-name" # Alphanumeric, _ or -
description = "Package description"
version = "0.1.0" # Sementic versioning
edition = "2021"
authors = ["Jean <jean@example.com"]
readme = "README.md"
homepage = "https://example.com"
documentation = "https://example.com/documentation"
repository= "https://github.com/gabinbernard/knowledge"
license = "MIT OR Apache-2.0" # AND and OR
license-file = "LICENSE.txt" # License file
keywords = ["key", "word"] # Max 5 keywords for crates.io

[dependencies]
<package-name> = "<version>"

[dev-dependencies]
<package-name> = "<version>"

[build-dependencies]
<package-name> = "<version>"

[lints.rust]
# lint-level = forbid | deny | warn | allow
# priority = <unsigned int>
unsafe_code = { level = "forbid", priority = 0 } # or "<lint-level>"

[badges]
maintenance = { status: "..." } # Currently not used by crates.io
```
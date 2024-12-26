#![allow(warnings)]

fn main() {
    let x1 = String::from("Hey");
    let x2 = x1; // Ownership is moved, x1 can't be used anymore
    // println!("{}", x1); This would fail

    let s = String::from("Hoy");
    let s_ref = &s; // Borrowing reference of s
    println!("{}", s_ref); // This works

    let mut s_mut = String::from("Heyo");
    let s_mut_ref = &mut s_mut;
    s_mut_ref.push_str(" WoRlD!?!");
    println!("{}", s_mut_ref);
}
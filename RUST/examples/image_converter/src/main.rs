use image;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    println!("Hello, world!");

    let mut img = image::open("img.jpg")?.to_rgba8();
    let pixels = img.as_mut();

    for pixel_chunk in pixels.chunks_mut(4) {
        let temp = pixel_chunk[0];
        pixel_chunk[0] = pixel_chunk[1];
        pixel_chunk[1] = pixel_chunk[2];
        pixel_chunk[2] = temp;
    }

    img.save("image.webp")?;

    Ok(())
}

use wasm_bindgen::prelude::*;
use image::{DynamicImage, GenericImageView, Rgba, RgbaImage};
use std::io::Cursor;

fn keep_red_channel(image: &DynamicImage) -> RgbaImage {
    let (width, height) = image.dimensions();
    let mut output_image = RgbaImage::new(width, height);

    for (x, y, pixel) in image.pixels() {
        output_image.put_pixel(x, y, Rgba([pixel[0], pixel[1], pixel[0], 255]));
    }

    output_image
}

#[wasm_bindgen]
pub fn process_image(image_data: Vec<u8>, format: String) -> Vec<u8> {
    // Load the image from the input byte data
    let img = image::load_from_memory(&image_data).expect("Failed to load image");

    // Manipulate the image by keeping only the red channel
    let red_channel_image = keep_red_channel(&img);

    // Select the output format based on the user's input
    let output_format = match format.as_str() {
        "jpeg" => image::ImageOutputFormat::Jpeg(1), // Adjust the quality setting
        "webp" => image::ImageOutputFormat::WebP, // Adjust the quality setting
        _ => image::ImageOutputFormat::Png, // Default to PNG
    };

    // Use a Cursor to wrap the Vec<u8> and allow seeking
    let mut output_data = Vec::new();
    let mut cursor = Cursor::new(&mut output_data); // Wrap the output data in a Cursor
    red_channel_image
        .write_to(&mut cursor, output_format)
        .expect("Failed to write image");
    
    output_data
}

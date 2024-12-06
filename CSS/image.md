# Image

[‹ Back to Properties](./properties.md)

## image-rendering

```css
image-rendering: 
    auto /* UA dependant */ |
    smooth /* Maximizes apparence, for photos, such as bilinear */ |
    high-quality /* Same as smooth, high quality preferred when limited ressources */ |
    crisp-edges /* Nearest neighbor */ |
    pixelated /* Nearest-neighbor to integer multiple of image size, then smooth */;
```

## image-resolution

```css
image-resolution: [ from-image || <resolution /* dpi */> ] && snap?;
```

## image-orientation

```css
image-orientation: from-image | none | [<angle> || flip ]
```

## object-fit

```css
object-fit: fill | contain | cover | none | scale-down /* none or container */ ;
```

## object-position

```css
object-fit:
    [ left | center | right | top | bottom ] |
    [[ left | center | right | <len-per> ] && [ top | center | bottom | <len-per> ]] |
    [ left | right ] <len-per> && [ top | bottom ] <len-per>;
```
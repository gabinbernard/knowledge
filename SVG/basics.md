# SVG - The basics

*[Home](../README.md)* &nbsp; › &nbsp; 
*[SVG](./svg.md)* &nbsp; › &nbsp; 
*Basics*

---

## Basic template

```xml
<svg 
    xmlns="http://www.w3.org/2000/svg"
    width="200" 
    height="200" 
    viewBox="0 0 200 200"
>
    <!-- Your SVG content here -->
</svg>
```

## Shapes

```xml
<rect x="10" y="10" width="10" height="10" />

<circle cx="10" cy="10" r="40" />

<ellipse cx="10" cy="10" rx="10" ry="10" />

<line x1="10" y1="10" x2="20" y2="20" />

<polyline points="10,10 10,20 20,20 20,10" />

<polygon points="10,10 10,20 20,20 20,10" />

<path d="<path>" />

<...
    fill="<color>"
    fill-rule="<nonzero | evenodd>"
    fill-opacity="<[0;1] | percentage>"

    stroke="<color>"
    stroke-width="<length>"
    stroke-dasharray="<space separated lengths>"
    stroke-dahsoffset="<length>"
    stroke-linecap="<butt | round | square>"
    stroke-linejoin="<miter | miter-clip | bevel | round | arcs>"
    stroke-miterlimit="<length>"
    stroke-opacity="<[0;1] | percentage>"

    clip-path="<none | <url> | [ <basic-shape> || <geometry-box> ]>"
    clip-rule="<nonzero | evenodd | inherit>"
/>
```

## Path

Set point position
```
M x  y
m dx dy
```

Draw a line (any, horizontal, vertical)
```
L x  y
l dx dy
H x
h dx
V y
v dy
```

Close the path
```
Z
z
```

Bézier Cubic Curve
```
C x1 y1, x2 y2, x y
c dx1 dy1, dx2 dy2, dx dy
S x2 y2, x y
s dx2 dy2, dx dy
```

Bézier Quadratic Curve
```
Q x1 y1, x y
q dx1 dy1, dx dy
T x y
t dx dy
```

## Image

Only JPEG, PNG and SVG must be supported
```xml
<image
    x="<length>" y="<length>"
    width="<length>" height="<length>"
    href="<image-url"
    preserveAspectRatio="none | meet | slice | ..."
/>
```
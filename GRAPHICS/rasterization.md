# Rasterization algorithms

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Graphics](./graphics.md)* &nbsp; › &nbsp; 
*Color*

---

1. Line Rasterization Algorithms
    - DDA - Digital Differencial Analyzer
    - Bresenham's Line Algorithm
    - Midpoint Line Algorithm
2. Circle Rasterizaton Algorithms
    - Midpoint Circle Algorithm

## DDA - Digital Differencial Analyzer

- Simple, but rounding and performance issues
- Incremental calculations based on line slope
- $slope(m) = \frac{\Delta y}{\Delta x}$
- If `slope < 1` => Horizontal rasterization
- If `slope > 1` => Vertical rasterization

```js
function dda(p1, p2) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;

    const steps = Math.max(Math.abs(dx), Math.abs(dy));

    const incrementX = dx / steps;
    const incrementY = dy / steps;

    let x = p1.x;
    let y = p1.y;

    const points = [];
    
    for (let i = 0; i < steps; i++) {
        points.push({x: Math.round(x), y: Math.round(y)});
        x += incrementX;
        y += incrementY;
    }

    return points;
}
```

## Bresenham's Line Algorithm

- Very efficient integer-only calculations
- Determines closest pixel to ideal path using error term


```js
function bresenham(x1, y1, x2, y2) {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = x1 < x2 ? 1 : -1;
    const sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;

    while (true) {
        points.push({x: x1, y: y1});

        if (x0 === x1 && y0 === y1) break;
        let err2 = 2 * err;

        if (err2 > -dy) {
            err -= dy;
            x0 += sx;
        }

        if (err2 < dx) {
            err += dx;
            y0 += sy;
        }

    }

    return points;
}
```

## Midpoint Line Algorithm

- Similar to Bresenham's algorithm, based on midpoint decision approach
- Uses implicit line equation 
- Used in conjunction with circle and ellipsis drawing algorithms

```js
function midpoint(x1, y1, x2, y2) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;
    
    let swapped = false;
    if (dy > dx) {
        [dx, dy] = [dy, dx];
        swapped = true;
    }

    let d = 2 * dy - dx;
    let x = x0;
    let y = y0;

    for (let i = 0; i <= dx; i++) {
        points[y][x] = 0;

        if (d > 0) {
            if (swapped) {
                x += sx;
            } else {
                y += sy;
            }
            d -= 2 * dx;
        }

        if (swapped) {
            y += sy;
        } else {
            x += sx;
        }

        d += 2 * dy;
    }
}
```

### Midpoint Circle Algorithm

```js
/* Basic implementation */

function midpointCircleAlgorithm(cx, cy, r) {
    let x = 0;
    let y = -r;

    const points = [];
    while (x < -y) {
        yMid = y + 0.5;
        if (x*x + yMid*yMid > r*r) {
            y+=1;
        }

        points.push({x: cx + x, y: cy + y});
        points.push({x: cx - x, y: cy + y});
        
        points.push({x: cx + x, y: cy - y});
        points.push({x: cx - x, y: cy - y});

        points.push({x: cx + y, y: cy + x});
        points.push({x: cx - y, y: cy + x});
        
        points.push({x: cx + y, y: cy - x});
        points.push({x: cx - y, y: cy - x});
        
        x += 1;
    }
}
```

```js
/* More efficient implementation */

function midpointCircleAlgorithm(cx, cy, r) {
    let x = 0;
    let y = -r;
    let p = -r;

    const points = [];
    while (x < -y) {
        yMid = y + 0.5;

        // p = x² + yMid² - r²
        // if (p > 0) y+=1;

        // pInitial = x² + ymid² - r²
        //          = 0² + (r - 0.5)² - r²
        //          = (-r - 0.5)² - r²
        //          = (-r)² + 0.25 - (2 * 0.5 * r) - r²
        //          = 0.25 - r + r² - r²
        //          = 0.25 - r
        //          ≈ -r
        //          (Approximation, barely noticeable)

        // If p > 0, it still means that the midpoint is outside the circle
        if (p > 0) {
            y += 1;

            // When y is incremented
            // p = x² + (y-0.5)² - r²
            // pNext = (x+1)² + (y+0.5)² - r²
            //
            // pStep = pNext - p
            // pStep = (x+1)² + (y+0.5)² - r² - (x² + (y-0.5)² - r²)
            // pStep = x² + 1 + 2x + y² + 0.25 + y - r² - x² - y² - 0.25 + y + r²
            // pStep = 2x + 2y + 1

            p += 2 * (x + y) + 1;
        } else {
            // When y is not incremented
            // p = x² + (y+0.5)² - r²
            // pNext = (x+1)² + (y+0.5)² - r²
            //
            // pStep = pNext - p
            // pStep = (x+1)² + (y+0.5)² - r² - (x² + (y+0.5)² - r²)
            // pStep = x² + 1 + 2x + (y+0.5)² - r² - x² - (y+0.5)² + r²
            // pStep = 2x + 1

            p += 2 * x + 1;
        }

        points.push({x: cx + x, y: cy + y});
        points.push({x: cx - x, y: cy + y});
        
        points.push({x: cx + x, y: cy - y});
        points.push({x: cx - x, y: cy - y});

        points.push({x: cx + y, y: cy + x});
        points.push({x: cx - y, y: cy + x});
        
        points.push({x: cx + y, y: cy - x});
        points.push({x: cx - y, y: cy - x});
        
        x += 1;
    }
}
```
# Convex Hull

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*Convex Hull*

---

- The convex of a set of points is the smallest convex shape containing all points.

### Graham's scan

- **Step 1** : Find the pivot (lowest y-coordinates, leftmost if tie)
- **Step 2** : Sort points based on their polar angle compared to the pivot
- **Step 3** : Iteratively building the hull by checking and maintaining a left-turn condition

```js
// Function to compute cross product to determine turn direction
function crossProduct(p1, p2, p3) {
    return (p2.x - p1.x) * (p3.y - p2.y) - (p2.y - p1.y) * (p3.x - p2.x);
}

// Function to calculate polar angle
function polarAngle(pivot, point) {
    return Math.atan2(point.y - pivot.y, point.x - pivot.x);
}

function grahamScan(points) {
    const pivot = points.reduce((lowest, p) => {
        (p.y < lowest.y) ? p : (p.y === lowest.y) ? (p.x < lowest.x) ? p : lowest : lowest;
        (p.Y < lowest.y) || (p.y === lowest.y && p.x < lowest.x ) ? p : lowest  
    });

    let sortedPoints = points.slice().sort((a, b) => {
        let angleA = polarAngle(pivot, a);
        let angleB = polarAngle(pivot, b);
        return angleA - angleB || (a.x - pivot.x)**2 + (a.y - pivot.y)**2 - (b.x - pivot.x)**2 - (b.y - pivot.y)**2;
    });

    let hull = [];
    for (point of sortedPoints) {
        while (hull.length >= 2 && crossProduct(hull[hull.length - 2], hull[hull.length - 1], point) <= 0) {
            hull.pop();
        }

        hull.push(point);
    }

    return hull;
}
```
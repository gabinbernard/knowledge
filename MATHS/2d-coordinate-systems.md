# 2D Coordinate Systems

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*2D Coordinate Systems*

---

- Used to define positions of a flat plane

## Types of 2D Coordinates Systems

### Cartesian Coordinates System (Standard XY Plane)**
- Origin => (0,0)
- X-axis => Horizontal
- Y-axis => Vertical (positive upwards)
- 4 Quadrants (+ +, - +, - -, + -)

**Transformations in 2D Cartesian Coordinate Systems**
- Translation: $$x' = x + t^x \qquad y' = y + t^y$$
- Sclaing: $$x = sx' \qquad y' = sy$$
- Rotation: $$x' = x\cos(\theta) -y\sin(\theta) \qquad y' = x\sin(\theta) + y\cos(\theta)$$
- Reflecting: $$x' = -x \qquad y' = -y$$
- Shearing: $$x' = x + sh_x \cdot y \qquad y' = y + sh_y \cdot x$$

### Screen Coordinates System**
- Origin at top-left corder
- X-axis Horizontal (right is positive)
- Y-axis => Vertical (down is positive)

**Screen to Cartesian**
```math
x_{screen} = x_{cartesian} \qquad y_{screen} = height -y_{cartesian}
```

### Polar Coordinates System**
- Defined by radius $r$ and angle $\theta$

**Cartesian to Polar**
```math
r = \sqrt{a^2 + b^2} \qquad \theta = \tan^{-1}(\frac{y}{x})
```

**Polar to Cartesian**
```math
x = r\cos(\theta) \qquad y = r\sin(\theta)
```

### Homogeneous coordinates

- Adding a third coordinate $w$ to simplify affine transformations.
- $(x, y) \longrightarrow (x, y, 1)$
- Uses matrix multiplication for efficient computation


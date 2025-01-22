# Vectors

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*Vectors*

---

- Let V be a vector
- Magnitude of a vector |V|


## Forms of Vector

- Component Form: $v = (x, y)$
- Unit Vector Form: $v = xî + yĵ$
- Polar Form: $v = (r, \theta)$

## Vector operations

- Addition: $v_1 + v_2 = (x_1 + x_2, y_1 + y_2)$
- Subtraction: $v_1 - v_2 = (x_1 - x_2, y_1 - y_2)$
- Scalar multiplication: $k \cdot v = (kx, ky)$
- Magnitude: $|v| = \sqrt{x^2 + y^2}$
- Unit vector: $\hat{v} = \frac{v}{|v|}$

## Dot product

**Measures the similarity of projection of one vector on another.**

**Properties**
- Commutative $A \cdot B = B \cdot A$
- Distributive $A \cdot (B + C) = A \cdot B + A \cdot C$
- If vectors are perpandicular, dot product = 0

**Formula in 2D**
```math
A \cdot B = |A||B|\cos(\theta)
```

**Formula in 3D**
```math
A \cdot B = A_xB_x + A_yB_y + A_zB_z
```

## Cross product

**The cross product of 2 vectors result in a vector perpandicular to both**

**Properties**
- Anticommutative ($A \times B = -(A \times B)$)
- Distributive ($A \times (B + C) = A \times B + A \times C$)
- If A and B are parallel, cross product 0 vector
- Magnitude is equal to the area of the parallelogram formed by the 2 vectors 

```math
A \times B = |A||B|\sin(\theta)n
```

## Vector projection

**Vector projection is the process of finding how much a vector falls along the direction of another**

```math
Proj_uv = \frac{u \cdot v}{|u|^2}u
```

(2, 4), (2, 0)

// (/ 4) * 2
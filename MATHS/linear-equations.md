# Linear equations

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*Linear Equations*

---

**Linear equations caracteristics:**
- Represent lines when graphed on a coordinate plane 
- Rate of change between any 2 points is constant
- Have at most 1 solution set (infinite solutions, a unique solution or no solution)

**Identifying linear equations:**
- Every terms must be of degree 1
- No multiplication between variables
- No functions applied
- Coeffiscients must be constants or parameters
- No variables in denominator

## Forms of linear equations

### General or Implicit form

$$Ax + By + C = 0$$

- Convenient in theoritical mathematics and computer graphics
- Helpful when working with implicit functions in calculus

### Standard form

$$Ax + By = C$$

- Ideal for solving systems of equations using elimination

### Point-slope form

$$y - y_1 = m(x - x_1)$$

- Best when you know a point and the slope
- Useful for deriving from real-world data

### Slope-Intercept form

$$y = mx + b$$

- Quickly identify slope and intercept point
- Fast for drawing line

### Intercept form

$$\frac{x}{a} + \frac{y}{b} = 1$$

- $a$ is x-intercept (when the line crosses the $x$ axis, and $b$ is the y-intercept)
- Best for quickly finding intercepts

### Two-Point form

$$y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$$

- Useful when 2 points are known but not the slope

**Going from Two-Point form to Standard form**

Given 2 points $\begin{pmatrix}1 \\ 2\end{pmatrix}$ and $\begin{pmatrix}2 \\ 4\end{pmatrix}$:

**Step 1 -** The Two-Point form of the line passing through both those points is:

$$(y - 2) = \frac{4 - 2}{2 - 1}(x - 1)$$

**Step 2 -** Eliminate fractions

$$ (y - 2)(2 - 1) = (4 - 2)(x - 1) $$

**Step 3 -** Expand and rearrange

$$ 2y - y - 4 + 2 = 4x - 4 - 2x + 2 $$
$$ y - 2 = 2x - 2 $$
$$ 2x - y = 0 $$

**Find Y based on x, x1, x2, y1 and y2**

$$ y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1) $$
$$ y = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1) + y_1 $$

**Find X based on y, x1, x2, y1 and y2**

$$ \frac{y_2 - y_1}{x_2 - x_1}(x - x_1) = y - y_1 $$
$$ x - x_1 = (y - y_1)\frac{x_2 - x_1}{y_2 - y_1} $$
$$ x = (y - y_1)\frac{x_2 - x_1}{y_2 - y_1} + x_1 $$



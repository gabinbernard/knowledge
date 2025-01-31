# Color - Spaces and Modes

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Graphics](./graphics.md)* &nbsp; › &nbsp; 
*Color*

---

## RGB - Red, Green, Blue

- Additive color model
- Bit-depth - 8-bits (standard), 10+ bits (HDR, high-end displays)
- Channels - 0 to 255, or 0 to 1 for normalized float

**Variants**
- Linear RGB - Suitable for mathematical operations like blending
- sRGB - Used in web and screens (typical gamma of 2.2)
- Adobe RGB - Wider gamut, used in professional photography
- ProPHoto RGB - Even wider gamut, used in high-end photography
- DCI-P3 - Used in digital cinema
- REC 709 - HDTV Standard
- REC 2020 - UHDTV Standard, higher gamut

## CMYK - Cyan, Magenta, Yellow, Black

- Subtractive color model, used in printing
- Smaller gamut than RGB
- Bit-depth - 8-bit or 16-bit
- Channels - 0% to 100% 

**Variants**
- CMYKOG - Adds orange and green for wider gamut
- Hexachrome - Adds orange and green for high-fidelity printing

**RGB 2 CMYK**

```math
R' = \frac{R}{255} \qquad
G' = \frac{G}{255} \qquad 
B' = \frac{B}{255}
```

```math
K = 1 - \max(R', G', B')
```

```math
C = 1 - K - R' \qquad
M = 1 - K - G' \qquad
Y = 1 - K - B'
```

**CMYK 2 RGB (using normalized parameters)**

```math
R = 255 \cdot (1 - C) \cdot (1 - K)
```
```math
G = 255 \cdot (1 - M) \cdot (1 - K)
```
```math
B = 255 \cdot (1 - Y) \cdot (1 - K)
```

## HSL / HSV / HSB - Hue, Saturation, Lightness/Value/Brightness

- Alternative RGB representation for better human perception, used in color pickers
- Range - Hue (0° to 360°), others from 0% to 100%
- Bit-depth - normalized floating point or 8-bit

**RGB 2 HSL**

```math
R' = \frac{R}{255} \qquad
G' = \frac{G}{255} \qquad 
B' = \frac{B}{255}
```
```math
C_{min} = \min(R', G', B') \qquad
C_{max} = \max(R', G', B') \qquad
\Delta = C_{max} - C_{min}
```
```math
L = \frac{ C_{max} + C_{min} }{ 2 } \qquad
S = \frac{ \Delta }{ 1 - |2L - 1| }
```
```math
H = \begin{cases}
0 & \Delta = 0 \\
60 \times (\frac{G' - B'}{\Delta} \mod 6) & C_{max} = R' \\
60 \times (\frac{B' - R'}{\Delta} + 2) & C_{max} = G' \\
60 \times (\frac{R' - G'}{\Delta} + 4) & C_{max} = B'
\end{cases}
```

**HSL 2 RGB**

```math
C = (1 - |2L - 1|) \times S \qquad
X = C \times (1 - |(H / 60) \mod 2 - 1|)
```

```math
(R', G', B') =
\begin{cases} 
(C, X, 0), & 0^\circ \leq H < 60^\circ \\
(X, C, 0), & 60^\circ \leq H < 120^\circ \\
(0, C, X), & 120^\circ \leq H < 180^\circ \\
(0, X, C), & 180^\circ \leq H < 240^\circ \\
(X, 0, C), & 240^\circ \leq H < 300^\circ \\
(C, 0, X), & 300^\circ \leq H < 360^\circ
\end{cases}
\qquad
m = L - \frac{C}{2}
```

```math
R = (R' + m) \times 255 \qquad
G = (G' + m) \times 255 \qquad
B = (B' + m) \times 255
```

## LAB - Lightness, Green-Red, Blue-Yellow

- Perceptually uniform color space, device independant
- Used for color corrections
- Range - L (0 to 100), Green-Red and Blue-Yellow (-128 to +127)
- Bit-depth - Usually 16-bits

**Variants**
- CIELAB - Standard perceptual color space

## YUV / YCbCr / YPbPr

- Color model that separates luminance from chrominance
- Used in video compression, image processing and television broadcasting

**Components**
- Y (Luminance) - 16 to 235 (TV), 0 to 255 (PC)
- U (Blue difference chroma) - 16 to 240
- V (Red difference chroma) - 16 to 240

**Variants**
- YUV - Analog color space
- YCbCr - Digital color mode
- YPbPr - Component video

**RGB 2 YUV**

```math
R' = \frac{R}{255} \qquad
G' = \frac{G}{255} \qquad 
B' = \frac{B}{255}
```

```math
Y = 0.299R' + 0.587G' + 0.114B'
```

```math
U = 0.492(B' - Y)
\qquad
V = 0.877(R' - Y)
```

**RGB 2 Integer YUV representation**

```math
Y = 16 + ( 65.481R + 128.553G + 24.966B ) / 255
```

``` math
U = 128 + ( −37.797R − 74.203G + 112.0B ) / 255
```

```math
V = 128 + ( 112.0R − 93.786G − 18.214B ) / 255
```

## Grayscale

- Shades of gray
- Bit-depth: 8-bits, 16-bits or 32-bits

**Conversion**
- Perceptual formula: $0.299R + 0.587G + 0.114B$
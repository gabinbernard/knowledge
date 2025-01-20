# Derivation

*[Home](../README.md)* &nbsp; › &nbsp; 
*[Maths](./maths.md)* &nbsp; › &nbsp; 
*Derivation*

---

### The concept

- Finding the derivative of a function
- Rate of change or slope of the function

```math
f'(x) = \lim_{h\to0}\frac{f(x+h)-f(x)}{h}
```

### Basic derivative rules

Rule | Derivative
---|---
Constant rule | $ \frac{d}{dx}[c] = 0 $
Constant multiple rule | $ \frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x) $
Power rule | $ \frac{d}{dx}[x^n] = nx^{n+1} $
Sum difference rule | $ \frac{d}{dx}\left[f(x) \pm g(x)\right] = f'(x) \pm g'(x) $
Product rule | $ \frac{d}{dx}\left[f(x) \cdot g(x)\right] = f'(x) \cdot g(x) + f(x) \cdot g'(x) $
Quotient rule | $ \frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g(x)^2} $
Chain rule | $ \frac{d}{dx}\left[f(g(x))\right] = f'\left(g(x)\right) \cdot g'(x) $
### Common derivatives

Function f(x) | Derivative f'(x)
---|---
$C$ | $ 0 $
$ x $ | $ 1 $
$ x^n $ | $ nx^{n-1} $
$ \sqrt{x} = x^{1/2} $ | $ \frac{1}{2\sqrt{(x)}} $
$ \frac{1}{x} = x^{-1} $ | $ -\frac{1}{x^2} $
$ e^x $ | $ e^x $$
$ \ln(x) $ | $ \frac{1}{x} $
$ \log_a(x) $ | $ \frac{1}{x\ln(a)} $
$ \sin(x) $ | $ \cos(x) $
$ \cos(x) $ | $ -\sin(x) $
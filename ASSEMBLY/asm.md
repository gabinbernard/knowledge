# Assembly


## Instructions

### Data movement

- MOV - Move data between registers or memory
- MOVSX - Move and textend with zeros (signed)
- MOVZX - Move and extend with zeros (non-negative)
- PUSH - Push data to the stack
- POP - Pop data from the stack
- XCHG - Exchange data between two operands

### Arithmetic Operations

- ADD - Add one operand to another
- SUB - Subtract one operand to another
- MUL - Unsigned multiply
- IMUL - Signed multiply
- DIV - Unsigned division
- IDIV - Signed division
- INC - Increment a value
- DEC - Decrement a value

### Logical Operations

- AND - Bitwise and
- OR - Bitwise or
- XOR - Bitwise xor
- NOT - Bitwise not

### Control Flow

- JMP - Unconditional jump
- JE/JZ - Jump if equal/zero
- JNE/JNZ - Jump if not equal/not zero
- JG/JNLE/[JGE] - Jump if greater [or equal]
- JL/JNGE/[JLE] - Jump if lower [or equal]
- CALL - Call a procedure
- RET - Return from a procedure

### Comparison

- CMP - Compare two operands
- TEST - Logical and without storing result

### Bit Manipulation

- SHL/SAL - Shift left
- SHR/SAR - Shift right
- ROL - Rotate left
- ROR - Rotate right

### System operations

- NOP - No operation
- HLT - Halt the CPU until the next interrupt
- INT - Trigger an interupt

### String operation

- MOVS - Move string data
- CMPS - Compare string data
- LODS - Load string data into a register
- STOS - Store string data from a register


## Registers

- RAX, EAX, AX, AL, AH (Accumulator) - Arithmetic operations
- RBX, EBX, BX, BL, BH (Base) - Base pointer for addressing memory
- RCX, ECX, CX, CL, CH (Counter) - Loop counters and string manipulation
- RDX, EDX, DX, DL, DH (Data) - Data storage during manipulations, I/O
- RSI (Source Index) - Pointer for source operand in string manipulation
- RDI (Destination Index) - Pointer to destination operand in string manimulation
- RBP (Base pointer) - Stable reference point for function parameters and local variables
- RSP (Stack pointer) - Points to the top of the stack (automatically adjusted)

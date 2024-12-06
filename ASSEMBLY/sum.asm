section .data
    num1 db 4
    num2 db 8
    result db 0
    msg db "result: ", 0
    newline db 10
    msg_len equ $ - msg

section .text
    extern printf
    global _start

_start:
    ; add result
    mov eax, [num1]
    add eax, [num2]
    mov [result], eax

    ; print line
    ; mov rax, 1
    ; mov rdi, 1
    ; mov rsi, msg
    ; mov rdx, msg_len
    ; syscall

    ; convert result to ascii
    movzx rax, byte [result]
    add rax, '0'

    ; result
    mov rdi, 1
    mov rsi, rax
    mov rax, 1
    mov rdx, 2
    syscall

    ; newline
    ; mov rax, 1
    ; mov rdi, 1
    ; mov rsi, newline
    ; mov rdx, 1
    ; syscall

    ; exit program
    mov rax, 60
    xor rdi, rdi
    syscall
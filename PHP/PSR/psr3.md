# PSR 3 - Logger interface

- Exposes eight level of logs (RFC5424)
- Messages must be stringable
- Optional placeholders from context array : `{a-zA-Z0-9_.}`
- No error, warning or notice on context data
- If exception passed, it should be in the `exception` key

## The Logger Interface

```php
class InvalidArgumentException extends \InvalidArgumentException 
{}

interface LoggerInterface
{
    /**
     * Detailed debug information.
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function debug(string $message, array $context = array()): void;

    /**
     * Interesting events.
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function info(string $message, array $context = array()): void;

    /**
     * Normal but significant events
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function notice(string $message, array $context = array()): void;

    /**
     * Exceptional occurences that are not errors
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function warning(string $message, array $context = array()): void;

    /**
     * Runtime errors that do not require immediate action but should be logged
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function error(string $message, array $context = array()): void;

    /**
     * Critical conditions
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function critical(string $message, array $context = array()): void;

    /**
     * Actions must be taken immediately
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function alert(string $message, array $context = array()): void;

    /**
     * System is unusable
     *
     * @param string  $message
     * @param mixed[] $context
     *
     * @return void
     */
    public function emergency(string $message, array $context = array()): void;

    /**
     * Log with an arbitrary level
     * 
     * @param mixed   $level
     * @param string  $message
     * @param mixed[] $context
     * 
     * @return void
     * 
     * @throws InvalidArgumentException
     */
    public function log($level, string $message, array $context = array()): void;
}
```

## The Psr\Log Package

- Psr\Log\LoggerInterface => Logger interface
- Psr\Log\AbstractLogger => Easy implementation, only log()
- Psr\Log\LoggerTrait => Same thing
- Psr\Log\NullLogger => Fallback empty logger
- Psr\Log\LoggerAwareInterface => Class that has a logger, auto-wiring
- Psr\Log\LoggerAwareTrait => Same thing
- Psr\Log\LogLevel => Contains the 8 log level constants
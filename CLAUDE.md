# Code Review Rules

## Bugs and syntax errors

Flag code that will not parse or run (syntax errors, type errors, missing
imports, unresolved references), and logic that produces the wrong result
regardless of input.

## Redundant imports

Flag a `require`/`import` that is never referenced in the file, and a module
imported more than once in the same file (directly or via a duplicate
`require` path).

## Unused code

Flag a declared variable, function, or parameter that is never used, and
code that cannot be reached (e.g. after a `return`/`throw`, or behind a
condition that is always false).

## Variable naming

Local variables, function names, and parameters are camelCase
(`messageText`, not `message_text` or `MessageText`).

## File names and object properties

File names and the keys of object/JSON literals are snake_case
(`message_service.js`, `{ created_at: ... }`), not camelCase or
kebab-case.

# Markdown: Basics

## Getting the Gist of Markdown's Formatting Syntax

## Paragraphs, Headers, Blockquotes

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like
a blank line -- a line containing nothing but spaces or tabs is
considered blank.) Normal paragraphs should not be indented with
spaces or tabs.

Markdown offers two styles of headers: _Setext_ and _atx_.
Setext-style headers for `<h1>` and `<h2>` are created by
"underlining" with equal signs (`=`) and hyphens (`-`), respectively.
To create an atx-style header, you put 1-6 hash marks (`#`) at the
beginning of the line -- the number of hashes equals the resulting
HTML header level.

Blockquotes are indicated using email-style '`>`' angle brackets.

Markdown:

    A First Level Header
    ====================

    A Second Level Header
    ---------------------

    ### Header 3

    > This is a blockquote.

### Phrase Emphasis

Markdown uses asterisks and underscores to indicate spans of emphasis.

Markdown:

    Some of these words *are emphasized*.
    Some of these words _are emphasized also_.

    Use two asterisks for **strong emphasis**.
    Or, if you prefer, __use two underscores instead__.

## Lists

Unordered (bulleted) lists use asterisks, pluses, and hyphens (`*`,
`+`, and `-`) as list markers. These three markers are
interchangeable; this:

    *   Candy.
    +   Candy.
    -   Candy.

    1.  Red

### Links

    This is an [example link](http://example.com/).

## Fenced code blocks (and syntax highlighting)

```javascript
for (var i = 0; i < items.length; i++) {
  console.log(items[i], i); // log them
}
```

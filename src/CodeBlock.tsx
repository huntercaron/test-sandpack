import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  Sandpack,
  getSandpackCssText,
  SandpackCodeViewer
} from "@codesandbox/sandpack-react";
import { markdown } from "@codemirror/lang-markdown";
import { nightOwl, ecoLight } from "@codesandbox/sandpack-themes";
import { LanguageSupport, StreamLanguage } from "@codemirror/language";

const DEFAULT_CODE = `
// Paste a code snippet here and set your language preference
Markdown: Basics
================

Getting the Gist of Markdown's Formatting Syntax
------------------------------------------------

## Paragraphs, Headers, Blockquotes ##

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like
a blank line -- a line containing nothing but spaces or tabs is
considered blank.) Normal paragraphs should not be indented with
spaces or tabs.

Markdown offers two styles of headers: *Setext* and *atx*.
Setext-style headers for  are created by
"underlining" with equal signs and hyphens, respectively.
To create an atx-style header, you put 1-6 hash marks  at the
beginning of the line -- the number of hashes equals the resulting
HTML header level.

Blockquotes are indicated using email-style  angle brackets.

Markdown:

    A First Level Header
    ====================

    A Second Level Header
    ---------------------

    ### Header 3

    > This is a blockquote.

### Phrase Emphasis ###

Markdown uses asterisks and underscores to indicate spans of emphasis.

Markdown:

    Some of these words *are emphasized*.
    Some of these words _are emphasized also_.

    Use two asterisks for **strong emphasis**.
    Or, if you prefer, __use two underscores instead__.

## Lists ##

    *   Candy.
    +   Candy.
    -   Candy.

    1.  Red


### Links ###


    This is an [example link](http://example.com/).


## Fenced code blocks (and syntax highlighting)

`;

/**
 *
 * CODE BLOCK
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 *
 * @framerDisableUnlink
 *
 * @framerIntrinsicWidth 500
 * @framerIntrinsicHeight 200
 *
 * @framerComponentPresetProps borderRadius
 */
export default function CodeBlock(props: any) {
  const { code = DEFAULT_CODE, theme, style, lang = "markdown" } = props;
  const [hovering, setHovering] = useState<boolean>(false);

  const selectedTheme = theme === "dark" ? nightOwl : ecoLight;

  return (
    <motion.div
      whileHover="visible"
      className="framer-sp"
      style={{
        ...props.style,
        position: "relative",
        width: "100%",
        overflow: "hidden"
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <SandpackProvider
        {...props}
        files={{
          "example.md": code
        }}
        customSetup={{
          entry: "example.md"
        }}
      >
        <SandpackLayout
          style={
            {
              height: "100%",
              "--sp-layout-height": "100%"
            } as any
          }
        >
          <SandpackCodeEditor
            initMode="immediate"
            // readOnly={true}
            // files={{ "/bonk.md": code }}
            showReadOnly={false}
            additionalLanguages={[
              {
                name: "markdown",
                extensions: ["md"],
                language: markdown()
              }
            ]}
          />
        </SandpackLayout>
      </SandpackProvider>
    </motion.div>
  );
}

const sandpackCSS = getSandpackCssText().replace(
  /@media\s*?{/gm,
  "@media all {"
);

function SandpackStyles() {
  return (
    <>
      <style
        data-framer-css-ssr
        dangerouslySetInnerHTML={{
          __html:
            ".sp-preview-container {height: 100%;} \n" +
            ".dark .sp-preview-container {background: #151515;} \n" +
            ".framer-sp {--sp-layout-height: 100%;}\n" +
            sandpackCSS
        }}
      />
    </>
  );
}

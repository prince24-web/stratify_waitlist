"use client";

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockFiles,
  CodeBlockFilename,
  CodeBlockSelect,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockCopyButton,
  CodeBlockBody,
  CodeBlockItem,
  CodeBlockContent
} from "../../components/ui/kibo-ui/code-block";

export default function CodeDisplay() {
  const files = [
    {
      language: "javascript",
      filename: "React",
      code: `
export default function Meta() {
  return (
    <Head>
      <title>PrepPal – Your Smart Study Companion</title>
      <meta
        name="description"
        content="PrepPal helps students study smarter with AI-powered summaries, quizzes, and learning tools."
      />

      {/* Open Graph / Social Preview */}
      <meta property="og:title" content="PrepPal – Your Smart Study Companion" />
      <meta
        property="og:description"
        content="Turn your notes and PDFs into AI-powered summaries and quizzes."
      />
      <meta property="og:image" content="https://preppal.app/og-image.png" />
      <meta property="og:url" content="https://preppal.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="PrepPal – Your Smart Study Companion" />
      <meta
        name="twitter:description"
        content="AI-powered summaries and quizzes for smarter studying."
      />
      <meta name="twitter:image" content="https://preppal.app/og-image.png" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
");`,
    },
    {
      language: "html",
      filename: "HTML",
      code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>PrepPal – Your Smart Study Companion</title>
  <meta
    name="description"
    content="PrepPal helps students study smarter with AI-powered summaries, quizzes, and learning tools."
  />

  <!-- Open Graph / Social Preview -->
  <meta property="og:title" content="PrepPal – Your Smart Study Companion" />
  <meta
    property="og:description"
    content="Turn your notes and PDFs into AI-powered summaries and quizzes."
  />
  <meta property="og:image" content="https://preppal.app/og-image.png" />
  <meta property="og:url" content="https://preppal.app/" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="PrepPal – Your Smart Study Companion" />
  <meta
    name="twitter:description"
    content="AI-powered summaries and quizzes for smarter studying."
  />
  <meta name="twitter:image" content="https://preppal.app/og-image.png" />

  <link rel="icon" href="/favicon.ico" />
</head>
`,
    },
  ];

  return (
    <CodeBlock defaultValue="React" data={files} className="my-4">
      {/* Header */}
      <CodeBlockHeader>
        <CodeBlockFiles>
          {(file) => (
            <CodeBlockFilename key={file.filename} value={file.filename}>
              {file.filename}
            </CodeBlockFilename>
          )}
        </CodeBlockFiles>

        <CodeBlockSelect>
          <CodeBlockSelectTrigger>
            <CodeBlockSelectValue />
          </CodeBlockSelectTrigger>
          <CodeBlockSelectContent>
            {(file) => (
              <CodeBlockSelectItem
                key={file.filename}
                value={file.filename}
              >
                {file.filename}
              </CodeBlockSelectItem>
            )}
          </CodeBlockSelectContent>
        </CodeBlockSelect>

        <CodeBlockCopyButton />
      </CodeBlockHeader>

      {/* Body */}
      <CodeBlockBody>
        {(file) => (
          <CodeBlockItem key={file.filename} value={file.filename}>
            <CodeBlockContent language={file.language}>
              {file.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
}

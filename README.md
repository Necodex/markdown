# @necodex/markdown

Markdown Component based on [Facebook Lexical](https://github.com/facebook/lexical).

## Getting started

To install add `@necodex/markdown` to your `package.json` file or run the command

```bash
npm install --save @necodex/markdown
```

A basic example of the editor component

```typescript
import { MarkdownEditor } from "@necodex/markdown";

export default function MyComponent() {
  // This could come from an async call to the database, an API, etc.
  const contentInJSON: string = someFunction();

  const handleChange = (
    editorState: EditorState,
    editor: LexicalEditor
  ): void => {
    // This function will fire after the latest change.
    // After the milliseconds specified on debounceOnChange.
    // Maybe store it to your database or something else.
    const content = JSON.stringify(editorState.toJSON());
  };

  return (
    <div>
      <MarkdownEditor
        onChange={handleChange} // Optional. Default is () => {}
        debounceOnChange={250} // Optional. Milliseconds. Default is 500.
        initialJSON={contentInJSON} // Optional. Useful when editing something.
      />
    </div>
  );
}
```

A basic example of the display component

```typescript
import { MarkdownDisplay } from "@necodex/markdown";

export default function MyComponent() {
  // This could come from an async call to the database, an API, etc.
  const contentInJSON: string = someFunction();

  return (
    <div>
      <MarkdownDisplay 
        contentJSON={contentInJSON} // Optional. If left empty only an empty block renders.
      />
    </div>
  );
}
```

## Developing

When installing the dependencies make sure to run the install with the flag `--legacy-peer-deps`
```bash
npm install --legacy-peer-deps
```

Storybook is used for local preview of the components. Make sure to check `/src/stories`
```bash
npm run storybook
```

### TODO

- Fix links (they're not clickable currently)
- Indent capability for lists and others
- Add a way to extend the toolbar plugin

### About

Heavily inspired on this [post](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe) for the whole setup.

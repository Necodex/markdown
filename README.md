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
  const markdownString: string = someFunction();
  // const JSONString: string = someFunction();

  const handleChange = (content: string): void => {
    // This function will fire after the latest change.
    // After the milliseconds specified on debounceOnChange.
    // Maybe store it to your database or something else.

    console.log(content); // Either Markdown or JSON.
  };

  return (
    <div>
      <MarkdownEditor
        onChange={handleChange} // Optional. Default is () => {}
        debounceOnChange={250} // Optional. Milliseconds. Default is 500.
        outputFormat="markkdown" // Optional. Either markdown or json. Default is markdown.
        // One or the other. initialMarkdown or initialJSON
        initialMarkdown={markdownString} // Optional. Useful when editing something.
        initialJSON={JSONString} // Optional. Useful when editing something.
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
  const markdownString: string = someFunction();
  // const JSONString: string = someFunction();

  return (
    <div>
      <MarkdownDisplay 
        // One or the other.
        contentMarkdown={markdownString} // Optional. If left empty only an empty block renders.
        contentJSON={JSONString} // Optional. If left empty only an empty block renders.
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
- Setup ESLint for development
- Limit to only one type of content as input

### About

Heavily inspired on this [post](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe) for the whole setup.

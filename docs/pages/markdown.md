# Markdown preview tests

Here's a page for documenting and testing our markdown preview capabilities.

## Intro to markdown code blocks

In markdown, code block are enclosed by triple-backticks.

````
```
# Your code here.
```
````

We can define the types of code in these block via labels. For example, the following code block is labeled as `js` for Javascript.


````
```js
// Your Javascript code here.
```
````

Here's the [full list of labels](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md) supported by our [syntax highlighter](https://highlightjs.org/).

## Sprinkle with magic

Inspired by the [MDJS plugin](https://rocket.modern-web.dev/docs/eleventy-plugins/mdjs-unified/), we've created a way to actually run these code blocks on the page. This allows us to both display the code and offer a preview for a given code block.

### Javascript preview

The `script` instruction will execute a Javascript code block live on the page. It can be added directly after the `js` label on the code block, separated by a space.

````
```js script
console.log("This javascript would be executed on the page.")
```
````

#### Javascript preview example 1: define custom elements

Here's a live example. Nothing much to see here, yet. Under the hood, that `<my-el>` Custom Element is now hot within the page. We'll use this in subsequent examples.

```js script
class MyEl extends window.HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.innerHTML = `<p style="color: red">I am alive</p>`
    }
}

customElements.define('my-el', MyEl);
```

### HTML preview

The `preview` instruction will insert an HTML code block into the page. 

````
```html preview
<p>This HTML would be inserted into the DOM.</p>
```
````

A couple live examples follow.

#### HTML preview example 1: basic

For this first example, you should see the HTML preview appear above the code block.

```html preview
<p style="color: blue">It's a fine day for writing Markdown!</p>
```

#### HTML preview example 2: fancy

Following the above `script` example, we can now check out `<my-el>` too. "I am alive" should appear in red above the code block.

```html preview
<my-el></my-el>
```

We can do more to style these code blocks to make the preview content more recognizable as such. But this should provide a good idea.

## Bring it together

We can combine these two markdown code block instructions to create interactive demos.

First we'll define and insert our Javascript via the `script` instruction. This is a live example.

```js script
let counter = 0
document.getElementById("counterButton").onclick = () => {
    counter += 1
    document.getElementById("count").innerHTML = counter
}
```

Next, we'll display and insert the relevant HTML via the `preview` instruction. This is also a live example. Clicking the "Add one" button should increment the counter.

```html preview
<style>
    /* We should have a decent default button style in our Design System! */
    #counterButton {
        border: 2px solid;
        border-radius: 5px;
        padding: 5px;
    }
</style>

<p>Counter: <span id="count">0</span></p>

<button id="counterButton">Add one</button>
```
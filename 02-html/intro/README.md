# Hypertext Markup Language (HTML)
HTML defines the structure of a website. It's extremely important for a site's structure to be solid. We all know what happens to buildings with faulty foundations.

Today, we'll learn about what HTML is, how to write well-formatted HTML, and what to keep in mind when writing HTML.

## HTML Tags/Elements
HTML is made up of HTML elements, also known as "tags". There are tags for headings, paragraphs, lists, images, links, etc. There are also generic tags for when an existing tag isn't quite right. There are also tags for unseen elements. We'll talk about all of them today.

Tags are enclosed in angle brackets (the less than and greater than signs). Most tags have an opening tag and a closing tag:

```html
<h1>This is a heading.</h1>
<p>This is a paragraph.</p>
```

As you can see, the closing tag is preceded by a forward slash.

Some tags do not have a corresponding closing tag. The major ones that fall into this category are image tags and input tags. We'll come to those soon.

Tags may also have one or more attributes. These attributes are used to configure the tag further. Here's an example of an anchor tag, used to render a link on the page:

```html
<a href="http://google.com">Click here to search Google.</a>
```

As you can see, attributes are placed inside the opening tag.  Some tags are not considered valid unless they have a specific attribute. Here's an example of an image tag:

```html
<img src="cat.jpg" alt="This is my cat!">
```

An image tag, as you can see, has no closing tag. It must have `src` and `alt` attributes to be considered valid. To test your HTML code for validity, you can visit [the W3C Validator](https://validator.w3.org/).

### The `id` Attribute
There is one attribute that is valid for any tag -- the `id` attribute.

```html
<button id="like-button">Like</button>
```

The `id` attribute allows us to give unique identities to any element. You may not repeat the same `id`, they must be unique. This will come up later in the course when we learn how to incorporate JavaScript.

```html
<h2>Vote!</h2>
<button id="like-coke">Coke</button>
<button id="like-pepsi">Pepsi</button>
```

## Tag Relationships
Up to now, we have seen tags that have a sibling relationship to one another.

```html
<h1>About Me</h1>
<p>My name is Narciso Lobo. I'm an instructor at Coding Dojo.</p>
```

There are tags that require other tags *inside* of them. Take a look at the unordered list tag. This tag requires at least one list item tag inside of it.

```html
<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Bread</li>
</ul>
```

These tags have a parent-child relationship. The `ul` tag is the parent, while the `li` tags are children. It's important to note that just because we are practicing good formatting in the above example, it's not the indentation that defines the relationship.

The browser does not care whether we have good formatting or not. We could technically write all of our HTML on one super long line, and the browser would render it happily. The developers that maintain our code would not be so happy about it, though. Whenever we write code, we must always strive for clear, well-formatted code. We should be able to identify each tag's relationship to another at a glance.

### Keep in Mind
Shortly, we will learn a very powerful CSS property that relies on a parent-child relationship. It's critical that we understand how to identify and implement relationships in our HTML code.


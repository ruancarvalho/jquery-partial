# jquery-partial
A jQuery plugin for loading partial HTML pages, or HTML templates. A partial view enables you to define a view that will be rendered inside a parent view. 

With this plugin you can re-use HTML pages, without the need of a server-side language.

Work in progress...

## Use-cases

* Front-end Prototyping
* Theme Development
* Others...

## How to Use

Create an empty element at the exact position you want to load the partial view. Use an ID to identify the element.

```html
<div id="header-template"></div>
```

Add the reference to the plugin:
```html
<script src="js/jquery.min.js"></script>
<script src="js/jquery-partial.js"></script>
```

At the bottom of your page, call the plugin to load the partial view, in the previously created element:

```html
<script>
	$("header-template").partial('header.html');
</script>
```

Now, create the partial view, or the template, in a separated file (You can use folders, as well).

*The empty element will be removed, after the partial view is loaded*
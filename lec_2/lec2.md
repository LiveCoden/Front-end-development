## Important Points 

<br>


### Open link a new tab

```html
  <a href="https://www.google.com" target="_blank"> Google in new tab</a>
```
<br>

### Accordian


```html
<details>
  <summary>Click to view</summary>
  <p>this is a paragraph</p>
</details>
```
<br>

### Strong tag


```html
   <strong>this is a strong tag</strong>
```
> strong indicates that its contents have strong importance

<br>


### Formatting tags


* Bold

```html
<b>hello world</b>
```

* Italic

```html
<i>hello world</i>
```

<div style="page-break-after: always;"></div>

* Underline

```html
<u>hello world</u>
```
<br>

### Horizontal line
<br>

```html
<hr>
```

<br>

### Progress bar


```html
<progress value="70" max="100">50%</progress>
```

### Table
```html
<table border="1px">

<tr>
    <th>n1</th>
    <th>n2</th>
    <th>n3</th>

</tr>
<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>

</tr>
<tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>

</tr>
<tr>
    <td>7</td>
    <td>8</td>
    <td>9</td>

</tr>

</table>

```
* tr - row
* td - col
* th -  table heading

### Picture tag


```html
  <picture>
    <source srcset="img1.png" media="(min-width: 1000px)">
    <source srcset="img2.png"
      media="(min-width: 100px)">
    <img width="900px" alt="coden live header image">
  </picture>
```
* id width is >=1000px, img1 will be shown
* if width is >=100px and <1000px, img2 will be shown

<br>


### Area tag


```html
<img width="800px" src="img.png" usemap="#demo">
  <map name="demo">
    <area shape="rect" coords="0,0, 400,800" alt="coden live header image" href="https://www.coden.live">
    <area shape="rect" coords="400,0, 800,800" alt="coden live header image" href="https://www.google.com">
```
> dividing image into 2 equal parts

<br>

###  Basic input types


```html
<input type="text" value="Rohit Sharma" name="name" placeholder="Enter name">

<input type="text" value="" name="user_email" placeholder="Enter email">

<input type="password" name="password" placeholder="Enter password">

<textarea name="message" rows="2" cols="50" placeholder="Enter message"></textarea>

<input type="color">

<input type="date">

<input type="time">

<input type="file">
```
> dividing image into 2 equal parts

<br>

### Datalist


```html
<input list="sports">
    <datalist id="sports">
    <option value="Cricket">
    <option value="Football">
    <option value="Hockey">
    <option value="Hockbe">
    <option value="Basketball">
</datalist>
```


### Radio button


```html
<input type="radio" value="HTML" name="lang">HTML
<input type="radio" value="CSS" name="lang"> CSS
<input type="radio" value="Javascript" name="lang"> JavaScript
<input type="radio" value="Bootstrap" name="lang"> Bootstrap
```


### Checkbox


```html
<input type="checkbox">CSS
```
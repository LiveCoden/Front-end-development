## Important Points 

<br>


### Some basic tags

```html
<h1>Hello World</h1>
<br>
<br>
<h2>Hello World</h2>
<h3>Hello World</h3>
<h4>Hello World</h4>
<h5>Hello World</h5>
<h6>Hello World</h6>

 <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
 of Lorem Ipsum. </p>

```
<br>

### Show local img 


```html
 <img src="img/name.png" width="300" height="200">
```
<br>

### Show online img 


```html
 <img src="https://coden.live/static/img/courses_header.png" width="300" height="200">
```
<br>

<div style="page-break-after: always;"></div>

#### Ordered and unordered list


```html
<ul>
    <li>first</li>
    <li>first</li>
    <li>first</li>
    <li>first</li>

</ul>

<ol>
    <li>first</li>
    <li>first</li>
    <li>first</li>
    <li>first</li>

</ol>
```
<br>

### Show video
<br>

```html
<video width="200" height="100" autoplay controls muted loop >

    <source src="https://github.com/intel-iot-devkit/sample-videos/blob/master/people-detection.mp4?raw=true"
        type="video/mp4">

</video>
```
* muted : to mute the video
* autoplay : to start playing the video automatically
* loop : to loop the video
* autoplay doesn't work if we don't include muted attribute because in 2018 google changed this feature

<br>

### Show youtube video


```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/VCYoFzaXi00">
</iframe>
```
* Youtube video without controls
```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/VCYoFzaXi00?controls=0">
 </iframe>
```

* Youtube video with mute and autoplay
```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/VCYoFzaXi00?mute=1&autoplay=1">
</iframe>
```
> autoplay doesn't work without mute

<br>

* Loop youtube video 
```html
<iframe width="420" height="315" src="https://www.youtube.com/embed/?playlist=VCYoFzaXi00&loop=1">
</iframe>
```

### Play audio


```html
<audio controls muted loop>

    <source src="https://github.com/prof3ssorSt3v3/media-sample-files/blob/master/fight-club.mp3?raw=true">

</audio>
```
* muted : to mute the video
* loop : to loop the video

<br>
## Prerequisites

- This works on Windows, macOS and Linux.
- Node Package Manager and Gulp are required. Make sure you can run `gulp -v` and `npm -v`.
- You can get Node at [nodejs.org](https://nodejs.org), then install gulp using `npm install gulp-cli -g`

## Getting started

2. Clone this repo
3. Run `npm install`
4. Run `gulp watch`
4. Look at `index.html` (ideally with a [local development webserver](https://askubuntu.com/questions/377389/how-to-easily-start-a-webserver-in-any-folder))
5. Add any Bootstrap Sass variables into `scss/_custom-variables.scss`
6. Add any custom styles into `scss/_custom-styles.scss`. You can use Bootstrap's mixins here.
7. Repeat steps 4 to 6 until you like what you see :-)

## Setup
1. Make sure gulp watch is running.
2. Remove the last 6 lines from js/index.js to remove any demo code.
3. Save, and gulp will compile both scss to css, and javascript to minified js.

## Javascript Functions
```javascript
rollResolved(int){}
```
This function takes the number rolled from the server, changes the roll buttons text to that number, pulses for 2.5 seconds, then goes back to the text 'Roll Dice'.

```javascript
winEOS(string){}
lossEOS(string){}
winBET(string){}
```
These functions enable an animation showing the user, how much they one/lost in both EOS, and BET.

## Notes
```javascript
$('.fairness-seed').html(generate_seed());
```
This line in js/index.js is optional. It puts a new seed in the fairness modal after each page refresh. It can be changed depending on use.

```javascript
$('.roll_btn').on('click', function() {});
```
The roll button already has an on click event listener. Please hook up into that, instead of making another even listener.
# Getting Started
Note: You'll need a version of Node.js (>= v8) set up on your machine to run the code.
```bash
$ npm i use-persisted-state
```

Clone the master branch of this repo
Open the folder and run:
```bash
npm i
```
```bash
npm start
```
and in another terminal: 
```bash
npm run server
```
 (you may not need this if you don't choose to do the back-end optional features)
Open the app and take a look around!
Once you've taken a look at the starter code and app, you'll notice that clicking on the eraser icon in the NavBar doesn't do anything. You should expect see the <Eraser /> component rendered in the <ToolPanel />. This is a great place to start before moving on to adding the required features below.

## Requirements
```bash
use-persisted-state
```

## Usage

Once your server is up and running the canvas app should load with no pronlem.
The pen color options only persist on reload when you update another option on the same panel.
The download button and clear canvas button does not work. I was struggling with global states and writing to local storage
without a third party libray. 

## Q&A

> 1.  What aspect of your submission are you most proud of, and why?
	 
 I'm most proud of the image uploader in the Stamp Tool. It was tough trying to get the image src to be read across states without using a third party library. I've never used React before this so I had to really become familiar with states and what they are before I was able to solve that problem. 

   >2.  What would you work on if you had more time?

Besides finishing the clear button and the save button, I would most likely add some assertions and saftey checks on my variables. I didn't sanatize any of the data given by users. Possibly  add some preloaded stickers.

>3.   Of all the resources (blog posts, tutorials, videos, mentors etc.) you referenced, what was most helpful for you?

I would say blog posts and stackoverflow was the most helpful. There were times where I didn't understand a concept and had a hard time finding answers due to a lack of familiarity with the terms used. I would present my problem and stackoverflow would always help me think about the problem in a novel way or reveal some information I hadn't seen before. Blog posts as well were just good to see generally how a canvas app is done and apply what they did to my code.


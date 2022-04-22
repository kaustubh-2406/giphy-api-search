Hello this is Kaustubh. I have been given the task to implement a giphy api search. It is the repo containing the source. It was build using Vitejs, React, Material UI and React hooks.

URL of site after deployment: 

Some Questions you might be thinking -

**Why didn't I used the create-react-app**
Ans - I think create react app is a great tool. Create react app has a bunch of features like propTypes, service workers, testing and many others, which are not included in vite. I think using create-react-app would have been overkill. Therefore, I used vite to spin up a basic react app, which is just the same as cra, but it doesnot include the above mentioned features, which is absolutely fine (and in my opinion fast) to use in small projects. 


**How I spent my time**
Since I dont have a great commit history. I thought it would be nice to give you a breakdown of what tasks have I done first and why.

1. First of all I analysed the giphy api, studied various endpoints and query params, how pagination work, etc.
2. Then I moved forward to create the [useGiphyHook]('./hooks/useGiphyHooks.js') hook, which in my opinion covers all the major cases of fetching the gifs, some basic error handling, and some states to manage. It has pagination built in.
3. Then I moved forward to see the figma file. 
4. Since, gifs can be of various resolutions. I though that it might be a perfect usecase of masonary layout. So I grabbed the material ui package and it's complimentary masonary package to start my way building the UI.
5. Then I implemented the UI. Which I think is pretty close to the original design. 
6. Further Action: Deploy

EXTRA FEATURES:
- "Ctrl + k" keyboard shortcut to quickly focus on search bar.
-  By default shows top 15 trending gifs
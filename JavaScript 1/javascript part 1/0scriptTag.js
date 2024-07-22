// Havign seperate javascript files helps in caching. As it downloads JS file when we visit that website first time.
// This also means seperation of concerns and caching(above)

// Method 1
// <script> 'code directly in html'
// <script/>

// Method 2
// <script src="script.js" > </script>  <- having a seperate file.

// NOTE- dont try to use both as <script src=""> will get the priority.
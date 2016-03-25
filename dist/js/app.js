(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function articleWordCount() {
  var article = document.querySelector(".article");
  var articleText = article.textContent;
  var count = articleText.trim().replace(/\s+/g, ' ').split(' ').length;
  return Math.round(count / 230) + " min read";
}

function createReadTimeLocation() {
  var h3 = document.createElement("h3");
  h3.textContent = articleWordCount();
  h3.classList.add("time-to-read");
  document.querySelector(".media-body").appendChild(h3);
}

createReadTimeLocation();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFTLGdCQUFULEdBQTJCO0FBQ3pCLE1BQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBVixDQURxQjtBQUV6QixNQUFJLGNBQWMsUUFBUSxXQUFSLENBRk87QUFHekIsTUFBSSxRQUFRLFlBQVksSUFBWixHQUNULE9BRFMsQ0FDRCxNQURDLEVBQ08sR0FEUCxFQUVULEtBRlMsQ0FFSCxHQUZHLEVBR1QsTUFIUyxDQUhhO0FBT3pCLFNBQU8sS0FBSyxLQUFMLENBQVcsUUFBTSxHQUFOLENBQVgsR0FBd0IsV0FBeEIsQ0FQa0I7Q0FBM0I7O0FBV0EsU0FBUyxzQkFBVCxHQUFpQztBQUMvQixNQUFJLEtBQUssU0FBUyxhQUFULENBQXVCLElBQXZCLENBQUwsQ0FEMkI7QUFFL0IsS0FBRyxXQUFILEdBQWlCLGtCQUFqQixDQUYrQjtBQUcvQixLQUFHLFNBQUgsQ0FBYSxHQUFiLENBQWlCLGNBQWpCLEVBSCtCO0FBSS9CLFdBQVMsYUFBVCxDQUF1QixhQUF2QixFQUFzQyxXQUF0QyxDQUFrRCxFQUFsRCxFQUorQjtDQUFqQzs7QUFRQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBhcnRpY2xlV29yZENvdW50KCl7XG4gIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlXCIpO1xuICBsZXQgYXJ0aWNsZVRleHQgPSBhcnRpY2xlLnRleHRDb250ZW50O1xuICBsZXQgY291bnQgPSBhcnRpY2xlVGV4dC50cmltKClcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnICcpXG4gICAgLnNwbGl0KCcgJylcbiAgICAubGVuZ3RoO1xuICByZXR1cm4gTWF0aC5yb3VuZChjb3VudC8yMzApICsgXCIgbWluIHJlYWRcIjtcbiAgfVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWRUaW1lTG9jYXRpb24oKXtcbiAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoMy50ZXh0Q29udGVudCA9IGFydGljbGVXb3JkQ291bnQoKTtcbiAgaDMuY2xhc3NMaXN0LmFkZChcInRpbWUtdG8tcmVhZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZWRpYS1ib2R5XCIpLmFwcGVuZENoaWxkKGgzKTtcblxufVxuXG5jcmVhdGVSZWFkVGltZUxvY2F0aW9uKCk7XG4iXX0=

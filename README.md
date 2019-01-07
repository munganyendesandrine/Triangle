# Triangle Track

This project presents:

Types of Triangle

## Description of Project and BDD

```
  1. How the Project works
  -------------------------
  This Project describes the type of triangle according to the sides measurement the user inputs.

  First the software has to test if input sides form a triangle, if true then it will executes conditions by prooving if the triangle is Equilateral,isosceles or scalene. 

  If input sides don't form a triangle, the software will return a message telling that Input Sides don't form a triangle. 

  2. Triangle and Triangle types conditions Description (BDD)
  ------------------------------------------------------
  | Behaviour                                                                                                                      | input | output                |
  |--------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------|
  |Let's suppose 3 respectives sides a,b,c of a triangle:
   If a+b>c=true and a+c>b=true and b+c>a=true, then input sides form a triangle   |

  | If all the sides are equal the triangle is an  equilateral triangle                                                                         | 8,8,8 | equilateral           |
  | If any two sides are equal the triangle is an isosceles triangle                                                                         | 5,3,5 | isosceles              |
  | If all the side are not equal and the sum of any two side of the triangle is greater than the third side, the triangle is a scalene triangle | 8,9,7 | scalene               |

  | if the sum of any two sides of  the triangle is equal or less  than the third remaining side, then it is not a triangle        | 9,4,3 | Not a triangle |

```

## Project Setup Instructions

```
A. REQUIREMENTS
------------------
1. You need  a web browser and a text editor inorder to be able to use this project.
2. You  have to download a browser and a text editor of your choice
3. Install the browser and text editor of your choice
```

```
Examples
Browser: Google Chrome
Text Editor:visual studio code,atom,notepad,... 

B. PROJECT FILES
----------------------
-Use the file "index.html" to run the project and collect data from the user
-Use the file "triangle.js" to view codes for javascript programming into the text editor
-Use the file "styles.css" to view codes for styling the webpage
-"README.md" is used for project description and programmer details.
```

### Downloading

Follow this link instructions to download google chrome: https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en

Follow this link instructions to download Visual studio code:https://code.visualstudio.com/Download

### Installing

Install the browser and text editor of your choice by following these steps:
   -First locate your setups in the Downloads folder,
   -Right-click on your browser / your text editor setup (google chrome/ visual studio code for example),
   -Agree the terms for installing
   -Click Next/continue then Finish to finish the installation

### Using the Text Editor and Browser

-Text Editor

After creating the project directory, go inside it using cd command then run your text editor. In the above example of visual studio code text editor, write "code ." to be able to use it.
Locate your .html file or .css file to write tags and style them. 
Let's notice that you have always to remember to link the .css file into .html file for later being able to display your css styles.

Then do Ctrl+S to save.

-Browser

Locate your directory, then double-clik on your .html file, it will be opened in the browser (google chrome in the above given example) and all your work will pe displayed there.


## Author Name:

* **Sandrine MUNGANYENDE** - *Initial work* - Find me at https://github.com/munganyendesandrine/

## link to live site on GitHub Pages
```
You can find this project intitled "Triangle Track" in the "Triangle" repository at: https://github.com/munganyendesandrine/Triangle
```

## Copyright and License Information
Copyright©2018 Triangle Track Project

This project is licensed under the MIT License - see the [License.md](LICENSE.md) file for details

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
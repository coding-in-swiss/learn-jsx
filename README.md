## Sup, Stewart! Before We Start...
We Need To Set Up Some Things:

*There is a lot to download coming up...*
1. __Create a Projects Folder__
   - Open your terminal and type ```cd ~ ```.
   - Make a directory called "Projects" ```mkdir Projects``` (*we will be creating all of our projects in this folder*).
   - ```cd``` into ```Projects```.
2. __Make a New Directory for our new project and call it whatever you want.__
   - ```cd``` into that directory.
3. __Check if you have Node downloaded.__
   - ```node -v```
     - If you recieved an error, [Download The Current Version of Node Here](https://nodejs.org/en/)
4. __Verify Node has Downloaded__
   - ```node -v```
5. __Verify That you have NPM__ 
   - *Npm should be included in the download of Node.js*
     - ```npm -v```
6. __Download Create React App Globally__
   - ```npm i create-react-app -g```
     - "node package manager install 'create-react-app- globally"
   - If you receive a ```ERR!Error: EACCES``` error, put ```sudo``` in front of the command. This will prompt you to type in your password.
   - *This Will Allow Us to use ```create-react-app``` anywhere in our computer.*
7. __Open VS Code__
8. __Download Quokka.js for VSCode__
   - In VS Code, click the square icon on the left underneith the bug icon.
   - Type in "quokka.js" and download the first option.
   - Click the "install" button.
   - *Quokka.js will give you live updates while you type code. It makes things easier.*
9. __Download Prettier for VSCode__
   - Type in "prettier" in the search bar and download the first option.
   - *Prettier automatically formats the code you write.*
10. __Configure Prettier to Format Code on Save__
   - At the very top left of your screen click __Code__ => __Preferences__ => __Settings__.
   - Type "prettier" into the search bar.
   - Click "User Settings"
   - Click "Edit in settings.json" underneath the "Disable Languages" section.
   - Copy and paste ```"editor.formatOnSave": true,``` inside of the brackets and save the file.
11. __Install Shell Command for Terminal__
   - Hold ``` CMD + Shift + P ``` and type "Shell Command" into the search bar.
   - Install code command in PATH.
   - *This will allow you to type ```code .``` inside of your project directory to automatically open your entire project inside of VSCode without going through the long process.*

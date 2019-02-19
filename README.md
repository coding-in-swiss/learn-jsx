#Sup, Stewart! Before We Start...
We Need To Step Up Some Things:
*There is a lot to download coming up...*
1. Create a Projects Folder
   - Open your terminal and type ```cd ~ ```.
   - Make a directory called "Projects" ```mkdir Projects``` (we will be creating all of our projects in this folder).
   - ```cd``` into ```Projects```.
2. Make a new directory for our new project and call it whatever you want.
   - ```cd``` into that directory.
3. Check if you have Node downloaded.
   - ```node -v```
     - If you recieved an error, [Download The Current Version of Node Here](https://nodejs.org/en/)
4. Verify Node has Downloaded
   - ```node -v```
5. Verify That you have NPM 
   - Npm should be included in the download of Node.js
     - ```npm -v```
6. Download Create React App Globally
   - ```npm i create-react-app -g```
     - "node package manager install 'create-react-app- globally"
   - If you receive a ```ERR!Error: EACCES``` error, put ```sudo``` in front of the command. This will prompt you to type in your password.
7. Open VS Code
8. Download Quokka.js for VSCode
   - In VS Code, click the square icon on the left underneith the bug icon.
   - Type in "quokka.js" and download the first option.
   - Click the "install" button.
*Quokka.js will give you live updates while you type. It makes things easier.*
9. Download Prettier for VSCode
   - Type in "prettier" in the search bar and download the first option.
*Prettier automatically formats the code you write.*
10. Configure Prettier to Format Code on Save
   - At the very top left of your screen click __Code__ => __Preferences__ => __Settings__.
   - Type "prettier" into the search bar.
   - Click "User Settings"
   - Click "Edit in settings.json" underneath the "Disable Languages" section.
   - Copy and paste ```"editor.formatOnSave": true,``` inside of the brackets and save the file.
11. Install Shell Command for Terminal
   - Hold ``` CMD + Shift + P ``` and type "Shell Command" into the search bar.
   - Install code command in PATH.
*This will allow you to type ```code .``` inside of your project directory to automatically open your entire project inside of VSCode without going through the long process.*

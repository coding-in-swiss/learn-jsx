# JSX
Let's create a static web page using JSX.

## To Begin
Clone this repository into a directory within your ```Projects``` folder.
  1. Click the green button "Clone or Download" at the top right.
  2. Copy the provided link onto your clipboard.
  3. Open your terminal and `cd` into the desired directory you want this project to live in.
  4. Type `git clone` into the terminal and paste the copied link after it.
  5. Once the repository has finished downloading, `cd` into the downloaded repository.
  6. Run `npm i` in the terminal to download any dependancies.
  7. Run `npm start` to run the project.
  8. In your project's directory in your terminal, create a new branch and switch over to it.
     - ``` git checkout -b stewsBranch ```
     - *This command __CREATES__ a new branch named "stewsBranch" (you can call it whatever you want) and it automatically switches to it. __You only need to do this once__.*

## Making Changes
When you make changes to the project, you will need to work on your on branch within Git.
 __IMPORTANT: MAKE SURE YOU PULL ANY CHANGES AND MERGE THEM ONTO YOUR OWN BRANCH BEFORE YOU START CODING!__
  1. Pull any changes from the Master Branch before your start working.
     1. ``` git checkout master ```
     2. ``` git pull origin master ```
     3. ``` git checkout [nameOfYourBranch] ```
     4. ``` git merge master ```
  2. Verify what branch you are on.
     - ``` git branch ```
     - *This will give you a list of all working branches with an asterisk next to the name of the branch you are currently on.*
  3. If you are not on your branch, switch over to it. __Do *NOT* make changes directly on the master branch.__
     - ``` git checkout [nameOfYourBranch]```
  4. Begin making changes to your code.
  5. Once you are finished, commit your changes to your branch.
     1. ``` git status ```
       - *Shows all uncommitted changes.*
     2. ``` git add . ``` 
       - *Adds all uncommitted changes to the que.*
     3. ``` git commit -m '*write a comment of what you are committing here*' ```
       - *Commits the changes to your branch*
  6. Push your committed changes to GitHub.
     - ``` git push origin [nameOfYourBranch] ```

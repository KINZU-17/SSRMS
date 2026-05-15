# *COLLABORATORS READ THE F@#KING MANUAL*

# The **"Golden Rule" Workflow** *(The James Protocol)*
Tell your team they must follow these 4 Steps every single time they sit down to code:

**A. START :** git pull origin main

(Always get the latest updates before you type a single line of code.)

**B. WORK :** Write your code in your assigned file.

**C. SYNC :** git pull origin main (Again!) (Do this right before you push, just in case someone else finished their work while you were coding.)

**D. FINISH :** git add . -> git commit -m "added sidebar" -> git push origin main



1. **The Direct Collaborator Method (Best for small teams)**
If you trust your teammates and want them to be able to push changes directly to your repository, you can add them as Collaborators.

- Step 1: Navigate to your repository on GitHub.

- Step 2: Click on Settings (the gear icon at the top).

- Step 3: On the left sidebar, click Collaborators (under "Access").

- Step 4: Click Add people and enter their GitHub usernames or emails.

- Step 5: They will receive an invite via email (or a notification on GitHub). They must accept this invite before they can push any code.

2. **The Development Workflow**
Once they have access, your team should follow these steps to ensure you aren't overwriting each other’s work:

## Initial Setup (The Clone)
Each teammate needs to get the code onto their local Ubuntu machine by running:

```Bash
git clone <repository-url>
cd <repository-name>
```

### Making Changes (The Branching Strategy)
To keep the main branch stable, it’s a good habit for everyone to work on their own "feature branches."

1. Create a branch:

git checkout -b feature-name

2. Make changes and commit:

git add .
git commit -m "Added a new feature"

3. Push the branch to GitHub:

git push origin feature-name


3. **Merging Work via Pull Requests**
Instead of pushing directly to main, have your teammates open a Pull Request (PR) on GitHub after they push their branch.

- This allows you (or the rest of the team) to review the code before it’s officially added to the project.

- Once reviewed, you can click "Merge Pull Request" on GitHub to combine their work into the main codebase.

4. **Staying Up to Date**
Since four people are working on the same project, your local code will quickly get out of sync. Remind everyone to run this command frequently—especially before starting new work:

```Bash
git pull origin main
```

This fetches the latest changes made by your teammates and merges them into your local files.

5. **Communication is Key**
- Make sure everyone is communicating about what they’re working on. Use GitHub Issues, a shared
- Google Doc, or a chat app like Slack to keep everyone in the loop and avoid duplicate work.
- By following these steps, your team can collaborate effectively without stepping on each other’s code. Happy coding!

## Having a problem pushing your work to github? Follow these steps exactly to get back on track:

Phase 1: **Clean Up the Corruption**
- Because your .git folder is broken, the simplest "clean" fix is to move your work aside and bring down a fresh copy from GitHub.

1. Open your terminal and move out of the folder:

cd ..

2. Rename the broken folder to keep your current code safe:

mv Financial-Tracker Financial-Tracker-backup

3. Clone a fresh copy (since you started the repo, you own the link):

git clone https://github.com/YOUR_USERNAME/Financial-Tracker.git

4. Go into the new folder:

cd Financial-Tracker

5. Copy your latest work back:

- Open your file manager, go to Financial-Tracker-backup, and copy everything except the .git folder. Paste it into the new Financial-Tracker folder.

Phase 2: **Setting the Workflow for the Group**

- To prevent the "fatal error" or "merge conflicts" from happening again:

1. Pull before you work: Always run git pull origin main every morning before you start coding to get your partners' updates.

2. Branching (Optional but Recommended): Instead of everyone working on main, tell your partners to create their own branch:
git checkout -b feature-partner-name

3. SSH Key Check: If you get a "Permission Denied" when pushing, make sure your Ubuntu terminal is authenticated. Run:
ssh -T git@github.com
If it doesn't say "Hi [YourName]!", you need to generate a new SSH key and add it to your GitHub Profile settings.
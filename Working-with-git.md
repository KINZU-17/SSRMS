# Phase 1: 
**The Initial Architecture (Lead Only)**
- Run these commands to set the foundation before the team starts.

1. **Create the Dev branch**:
```Bash
git checkout main
git checkout -b dev
git push -u origin dev
```

2. **Lock the branches (In GitHub/GitLab Settings)**:
- Go to Branch Protection Rules.
- Apply to main and dev.
- Enable "Require a pull request before merging".
- Enable "Require approvals" (Set to 1). This forces your team to talk to each other.

# Phase 2: 
**The Daily Feature Workflow (For all 4 members)**
- Each teammate follows these steps for every single task.

1. **Sync the local environment**:
- Always start from the latest version of the shared work.

```Bash
git checkout dev
git pull origin dev
```

2. **Branch out for a feature**:
```Bash
git checkout -b feat/api-integration
```

3. **Code and Commit**:
```Bash
git add .
git commit -m "feat: added basic api connection"
```

4. **Push the feature branch**:
```Bash
git push origin feat/api-integration
```

5. **Stay updated (The "Conflict Preventer")**:
- While working, pull updates from teammates once a day so you don't fall behind.

```Bash
git pull origin dev
```

# Phase 3: 
**The Integration Phase(Multiple Feature Branches)**
- With 4 people, multiple PRs will be open at once. Here is how to handle the merge into Dev.

1. Push the feature:

```Bash
git push origin feat/api-integration
```

2. The Pull Request (PR):
- The dev goes to GitHub/GitLab.
- Source: feat/api-integration → Target: dev.

3. Peer Review:
- At least one other teammate reviews the code.
- They leave comments or click Approve.

4. The Merge:
- Once approved, click Squash and Merge. This keeps the dev branch history clean by turning 10 "fix" commits into 1 "Feature" commit.

# Phase 4: **The Production Release (Main Branch)**
- Once dev has reached a milestone (e.g., at the end of the week), move the combined work to Main.
1. **Final Dev Sync**:
- Ensure dev is perfect and tested.

2. **The Release PR**:
- Open a PR on GitHub.
- Source: dev → Target: main.

3. **Merge and Tag**:
- After merging the PR into main, tag it so you can find this version later:

```Bash
git checkout main
git pull origin main
git tag -a v1.0 -m "First team release"
git push origin v1.0
```
# Summary Checklist for Success.

**Step => Action => Responsibility**

1. Protect main and dev in settings.  
**done by Lead**

2. Branch off dev for all new work.  
**done by Team**

3. Pull from dev daily to avoid conflicts.  
**done by Team**

4. PRs must target dev and be reviewed.  
**done by Team**

5. PR dev into main for production.  
**done by Lead**
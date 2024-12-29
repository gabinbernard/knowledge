# Git

*[Home](../README.md)* &nbsp; › &nbsp; 
*Git*

---

## Init, Config and Archive

- `git init` Init new empty repository
- `git clone <url> [<directory>]` Clone repository

- `git config --global user.name "<firstname> <lastname>"` Set author name
- `git config --global user.email "<email>"` Set author email
- `git config --global credential.helper store` Enable credentials caching

- `git archive --format=<format> --output=<file> <commit>` Export archive

## Stage and Snapshots

- `git add <file>` Stage file
- `git restore <file>` Restore unstaged file chnages
- `git restore --staged <file>` Unstage file chnages
- `git clean { -n | -f | -i }` List | Delete | Interactively delete untracked files

- `git status [-s | --short]` See staged files in working directory
- `git diff [--staged]` Show unstaged changes [or staged changes]
- `git ls-files` List tracked files

- `git mv <path> <new-path>` Move file and stage the move
- `git rm <path>` Remove file and stage the removal

- `git commit [-m <message>]` Commit staged content with message
- `git tag <tag>` Add a tag to a commit
- `git tag -a <tag> -m <message>` Add a tag with a message to a commit

Modify a commit

```bash
git commit --amend 
    [-m <message>]` # Inline message
    [--no-edit --reset-author] # Reset author
```

## Branches

- `git branch` List branches, * next to active branch
- `git branch <name>` Create new branch
- `git branch -m [<branch>] <name>` Rename branch (current if no branch provided)

- `git checkout <branch>` Checkout another branch
- `git checkout -b <name>` Create and chekout new branch

- `git merge <branch>` Merge specified branch's history into current one
- `git rebase <branch>` Apply commits of current branch ahead of specified one
- `git cherry-pick <commit | branch>` Cherry pick single commit or branch
- `git cherry-pick <commit1> [<commit2>] [...]` Cherry pick multiple commits
- `git cherry-pick <commit1>..<commit2>` Cherry pick range of commits
- `git revert <commit>` Create new commit that reverts commit
- `git reset --soft HEAD~1` Uncommit last commit

*Note: To get parent of &lt;commit&gt;, you may use either :*
- *&lt;commit&gt;^*
- *&lt;commit&gt;~*
- *&lt;commit&gt;~1*

## Inspect

- Show current branch's commit history
```bash
git log                                     # All entries
    [-<N>]                                  # N entries
    --since=<date> --until=<date>           # Since and until date
    --author=<author>                       # By author
    --grep=<regex>                          # Message matches regex
    [--all-match] [--invert-grep]
    --follow <file>                         # Commits editing this file
    --stat [-M]                             # More details [with path changes]
    --all --decorate --oneline --graph      # Useful log formatting
    branchB..branchA                        # Commits on branch A, not on branch B
```

- `git reflog` Show history of changes made to your repo's HEAD pointer

- `git show [SHA]` Show any object in human readable format

## Find a Bug

- Perform binary search to find out which commit introduced a bug
```bash
git bisect start
git bisect { good | bad } [<commit>]
```

- Show who last modified a line
```bash
git blame
    -L <start>,<end>                # From <start> to <end> lines
    --show-name                     # Show full commit hash
    --since=<date> --until=<date>   # Since and until date
    --ignore-rev <commit>           # Ignore a commit
    <file>
```

## Remote

- `git remote [-v]` List remote repos [with more details]
- `git remote show <remote>` Show detailed informations on remote repo
- `git remote add <name> <url>` Add remote repo
- `git remote remove <name>` Remove remote repo

- `git push [<remote> <branch>]` Push local changes [on branch] to remote repo
- `git push --set-upstream <remote> <branch>` Set default remote branch for push
- `git push <remote> --delete <branch>` Delete branch from remote repo

- `git remote update` Update refs for remotes
- `git fetch <remote> <branch>` Fetch branch without merging
- `git pull [--rebase] <remote> <branch>` Pull and merge [or rebase] branch from remote repo
+++
title   = "How is git different than svn?"
date    = 2017-10-08T02:43:31+02:00
type    = "post"
+++

Still using Subversion? Works for you? Why are all these guys fascinated by git? Well, just see how git is different than svn in a couple of ways.<!--more--> 

### There is no central repository needed.

Why is that an advantage?

+ You can check-in and check-out while you are offline. Every change can be tracked.
+ You can also use it to version any folder you like.
+ Commits to your local repository are lightning fast.
+ You can push all changes to another repository w/o losing any commit history.

Just think of a local development team that needs to deliver the source code at some point to the customer repository. You certainly don't want to wait for the remote repository, and wait, and wait.

Then think of the guy being in the home office. His or her internet connection may not be as fast as expected, or the central server may be slow, or that guy may be in a train without a connection at all.

### You always have the full repository.

Why do I want that?

+ Like it or not, you always have trunk, branches and tags accessible at your fingertips.
+ Need a new feature branch? Just create one in less than a second. Need to switch? Another second.
+ Your local computer crashed? Your central server crashed? Well, ask your colleague to give you a copy. That's it.

### Tooling

Subversion has excellent tooling. You got command line tools, graphical user interfaces, integrations into all major IDEs, and excellent guides on how to use svn or how to setup a Subversion server.

Same applies to git. With the advent of JGit and EGit for Eclipse even the IDE integration is available now and here. There are even Coursera courses available.

### What can git do what svn can't?

Apart from the topics above? Well, it is faster than svn on most repositories, especially if you need to merge. And it tracks files and folders not by name but by content. If you move a file or folder, git will very likely detect it. So you don't need to first create the new folder. Commit. Move the file. Commit. Delete folder. Commit. Missed a commit? Get a coffee!

All you do is create the folder. Add it. Move the file. Delete old folder. Commit. Feel free to keep the commits in between.

And if you really need to you can use a git client on a Subversion repository. It's not fun in the long run, but it works, and nobody will know ;-).

### Coolness

Git is hip. Even though that can change, it is no longer the new kid on the block, but still a rising star. It is fit for production. Not everyone will master it. But once you mastered it you can sell it to your customers. May-be they care that you stay up-to-date, may-be they don't, but then it doesn't matter to them anyway.

Still not convinced? Well, svn is a good tool. cvs was also a good tool. May they rest in peace :-).